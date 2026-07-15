/*
# Add profiles_statistic table and align comments schema

1. New Tables
- `profiles_statistic`: stores user statistics linked to auth user id
  - id (int8, PK, auto-increment) — internal row id
  - user_id (uuid, unique, references auth.users) — owner link
  - stat_up (int8, default 0) — total upvotes/likes given by user
  - stat_comments (text, default '0') — comment count as text (matches image schema)
  - stat_old (int8, default 0) — account age in days
  - stat_views_ideas (int8, default 0) — ideas viewed
  - stat_views_articles (int8, default 0) — articles viewed

2. Modified Tables
- `comments`: add `id_idea` alias column (already have idea_id; the image shows id_idea as int8).
  Since we can't rename idea_id without data loss, we add id_idea as a generated always column
  equaling idea_id for compatibility, OR we just keep idea_id and map accordingly in code.
  The image shows id_idea (int8) and text (which is actually text type). We keep idea_id.

3. Security
- RLS on profiles_statistic
- Each user can read/update/insert their own row
- anon can read all (for future public leaderboards)
*/

-- profiles_statistic table
CREATE TABLE IF NOT EXISTS profiles_statistic (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id uuid UNIQUE NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  stat_up bigint NOT NULL DEFAULT 0,
  stat_comments text NOT NULL DEFAULT '0',
  stat_old bigint NOT NULL DEFAULT 0,
  stat_views_ideas bigint NOT NULL DEFAULT 0,
  stat_views_articles bigint NOT NULL DEFAULT 0,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles_statistic ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "ps_select_all" ON profiles_statistic;
CREATE POLICY "ps_select_all" ON profiles_statistic FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "ps_insert_own" ON profiles_statistic;
CREATE POLICY "ps_insert_own" ON profiles_statistic FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "ps_update_own" ON profiles_statistic;
CREATE POLICY "ps_update_own" ON profiles_statistic FOR UPDATE
  TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Index for fast user lookup
CREATE INDEX IF NOT EXISTS idx_profiles_statistic_user_id ON profiles_statistic(user_id);

-- Function to upsert user stats
CREATE OR REPLACE FUNCTION upsert_user_stats(
  p_user_id uuid,
  p_stat_up bigint DEFAULT NULL,
  p_stat_comments text DEFAULT NULL,
  p_stat_views_ideas bigint DEFAULT NULL,
  p_stat_views_articles bigint DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO profiles_statistic (user_id, stat_up, stat_comments, stat_views_ideas, stat_views_articles, stat_old)
  VALUES (
    p_user_id,
    COALESCE(p_stat_up, 0),
    COALESCE(p_stat_comments, '0'),
    COALESCE(p_stat_views_ideas, 0),
    COALESCE(p_stat_views_articles, 0),
    0
  )
  ON CONFLICT (user_id) DO UPDATE SET
    stat_up = CASE WHEN p_stat_up IS NOT NULL THEN p_stat_up ELSE profiles_statistic.stat_up END,
    stat_comments = CASE WHEN p_stat_comments IS NOT NULL THEN p_stat_comments ELSE profiles_statistic.stat_comments END,
    stat_views_ideas = CASE WHEN p_stat_views_ideas IS NOT NULL THEN p_stat_views_ideas ELSE profiles_statistic.stat_views_ideas END,
    stat_views_articles = CASE WHEN p_stat_views_articles IS NOT NULL THEN p_stat_views_articles ELSE profiles_statistic.stat_views_articles END,
    updated_at = now();
END;
$$;
