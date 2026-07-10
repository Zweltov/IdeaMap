// ===== КОНФИГУРАЦИЯ SUPABASE =====
const SUPABASE_URL = 'https://ваш-проект.supabase.co'; // Замените на ваш URL
const SUPABASE_KEY = 'ваш-public-ключ'; // Замените на ваш публичный ключ
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ===== ДАННЫЕ =====
const ideas = [
  { id: 1, name: "AI-помощник для бизнеса", category: "IT", capital: 25000, complexity: "Средняя", potential: "Высокий", rating: 4.8, desc: "Чат-боты и аналитика для малого бизнеса.", why: "Автоматизация продаж.", pros: "Быстрая окупаемость.", cons: "Конкуренция.", how: "Соберите MVP за 3 мес.", risks: "Технические сбои." },
  { id: 2, name: "Доставка здоровой еды", category: "Еда", capital: 18000, complexity: "Средняя", potential: "Средний", rating: 4.2, desc: "Готовые рационы для офисов.", why: "Рост ЗОЖ.", pros: "Постоянные клиенты.", cons: "Логистика.", how: "Начните с кухни.", risks: "Срок годности." },
  { id: 3, name: "Клининг 2.0", category: "Услуги", capital: 8000, complexity: "Низкая", potential: "Высокий", rating: 4.5, desc: "Уборка с эко-средствами.", why: "Спрос на чистоту.", pros: "Низкий порог.", cons: "Много ручного труда.", how: "Закупите инвентарь.", risks: "Травмы." },
  { id: 4, name: "Коворкинг для фрилансеров", category: "Недвижимость", capital: 120000, complexity: "Высокая", potential: "Средний", rating: 3.9, desc: "Пространство с переговорными.", why: "Рост удаленки.", pros: "Долгосрочная аренда.", cons: "Высокая аренда.", how: "Найдите помещение.", risks: "Низкая заполняемость." },
  { id: 5, name: "Производство деревянных игрушек", category: "Производство", capital: 30000, complexity: "Средняя", potential: "Средний", rating: 4.0, desc: "Эко-игрушки ручной работы.", why: "Тренд на натуральное.", pros: "Уникальность.", cons: "Масштабирование.", how: "Мастерская + станки.", risks: "Сезонность." },
  { id: 6, name: "Онлайн-школа английского", category: "Онлайн-бизнес", capital: 15000, complexity: "Низкая", potential: "Высокий", rating: 4.7, desc: "Интерактивные уроки с носителями.", why: "Образование онлайн.", pros: "Масштабируемость.", cons: "Конкуренция.", how: "Платформа Zoom.", risks: "Отток учеников." },
  { id: 7, name: "Франшиза кофейни", category: "Еда", capital: 90000, complexity: "Высокая", potential: "Средний", rating: 3.8, desc: "Готовая бизнес-модель.", why: "Популярность кофе.", pros: "Поддержка.", cons: "Роялти.", how: "Купите франшизу.", risks: "Зависимость." },
  { id: 8, name: "Сервис по ремонту гаджетов", category: "Услуги", capital: 12000, complexity: "Средняя", potential: "Высокий", rating: 4.3, desc: "Ремонт с выездом на дом.", why: "Дорогие устройства.", pros: "Низкий вход.", cons: "Навыки.", how: "Инструменты + реклама.", risks: "Повреждения." },
  { id: 9, name: "Аренда эксклюзивных авто", category: "Услуги", capital: 150000, complexity: "Высокая", potential: "Средний", rating: 3.5, desc: "Прокат премиум-класса.", why: "Статус.", pros: "Высокая маржа.", cons: "Обслуживание.", how: "Парк из 3 авто.", risks: "ДТП." },
  { id: 10, name: "Платформа для наставников", category: "IT", capital: 40000, complexity: "Средняя", potential: "Высокий", rating: 4.6, desc: "Связь менторов и учеников.", why: "Образование.", pros: "Комиссия.", cons: "Доверие.", how: "Сайт + модерация.", risks: "Мошенники." },
  { id: 11, name: "Фудтрак с азиатской кухней", category: "Еда", capital: 22000, complexity: "Средняя", potential: "Средний", rating: 4.1, desc: "Уличная еда в стиле стрит-фуд.", why: "Мобильность.", pros: "Гибкость.", cons: "Погода.", how: "Купите фудтрак.", risks: "Разрешения." },
  { id: 12, name: "Агентство по продвижению в соцсетях", category: "Онлайн-бизнес", capital: 5000, complexity: "Низкая", potential: "Высокий", rating: 4.4, desc: "SMM для малого бизнеса.", why: "Рост соцсетей.", pros: "Низкий старт.", cons: "Креатив.", how: "Портфолио.", risks: "Отток клиентов." },
  { id: 13, name: "Умный дом под ключ", category: "IT", capital: 35000, complexity: "Средняя", potential: "Средний", rating: 3.7, desc: "Интеграция систем умного дома.", why: "Автоматизация.", pros: "Дорого.", cons: "Сложность монтажа.", how: "Обучение.", risks: "Совместимость." },
  { id: 14, name: "Бистро здорового питания", category: "Еда", capital: 28000, complexity: "Средняя", potential: "Высокий", rating: 4.3, desc: "Блюда без глютена и сахара.", why: "Здоровье.", pros: "Целевая аудитория.", cons: "Цены.", how: "Аренда помещения.", risks: "Продукты." },
  { id: 15, name: "Консалтинг для стартапов", category: "Услуги", capital: 2000, complexity: "Низкая", potential: "Средний", rating: 3.9, desc: "Помощь в запуске.", why: "Много стартапов.", pros: "Экспертность.", cons: "Репутация.", how: "Сайт.", risks: "Нестабильность." },
  { id: 16, name: "Студия 3D-печати", category: "Производство", capital: 45000, complexity: "Средняя", potential: "Средний", rating: 4.0, desc: "Печать прототипов и сувениров.", why: "Технологии.", pros: "Индивидуальные заказы.", cons: "Материалы.", how: "Принтеры.", risks: "Поломка." },
  { id: 17, name: "Психологическая онлайн-платформа", category: "Онлайн-бизнес", capital: 20000, complexity: "Средняя", potential: "Высокий", rating: 4.8, desc: "Сессии с психологами.", why: "Рост тревожности.", pros: "Масштаб.", cons: "Сложность подбора.", how: "CRM.", risks: "Этика." },
  { id: 18, name: "Аренда спортивного инвентаря", category: "Услуги", capital: 10000, complexity: "Низкая", potential: "Средний", rating: 3.6, desc: "Велосипеды, лыжи, скейты.", why: "Активный отдых.", pros: "Сезонность.", cons: "Износ.", how: "Закупка.", risks: "Кражи." },
  { id: 19, name: "Мини-пекарня", category: "Еда", capital: 32000, complexity: "Средняя", potential: "Средний", rating: 4.2, desc: "Выпечка на заказ.", why: "Домашний уют.", pros: "Высокая маржа.", cons: "Ранний подъем.", how: "Оборудование.", risks: "Рецепты." },
  { id: 20, name: "Аренда коворкинга для творцов", category: "Недвижимость", capital: 80000, complexity: "Высокая", potential: "Средний", rating: 3.8, desc: "Студии для художников, музыкантов.", why: "Креативная экономика.", pros: "Сообщество.", cons: "Шум.", how: "Ремонт.", risks: "Низкий спрос." }
];

// ===== СОСТОЯНИЕ =====
let favorites = JSON.parse(localStorage.getItem('ideahub_favs')) || [];
let likes = JSON.parse(localStorage.getItem('ideahub_likes')) || {};
let currentFilter = 'all';
let currentSort = 'rating';
let searchTerm = '';
let currentTheme = localStorage.getItem('ideahub_theme') || 'dark';
let currentUser = null;
let currentIdeaComments = [];

// ===== DOM =====
const grid = document.getElementById('cardsGrid');
const modalOverlay = document.getElementById('ideaModal');
const modalWindow = document.getElementById('modalWindow');
const modalContent = document.getElementById('modalContent');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const searchInput = document.getElementById('searchInput');
const filterPills = document.querySelectorAll('.filter-pill');
const sortSelect = document.getElementById('sortSelect');
const exploreBtn = document.getElementById('exploreBtn');
const userGreeting = document.getElementById('userGreeting');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const logoutBtn = document.getElementById('logoutBtn');

// ===== УВЕДОМЛЕНИЯ =====
function showNotification(message, type = 'success') {
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();

  const notif = document.createElement('div');
  notif.className = `notification ${type}`;
  notif.textContent = message;
  document.body.appendChild(notif);

  setTimeout(() => notif.classList.add('show'), 10);
  setTimeout(() => {
    notif.classList.remove('show');
    setTimeout(() => notif.remove(), 400);
  }, 3000);
}

// ===== АВТОРИЗАЦИЯ =====
async function signUp(email, password, name) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name }
      }
    });
    if (error) throw error;
    showNotification('Аккаунт создан! Проверьте почту для подтверждения.');
    closeRegister();
    return data;
  } catch (error) {
    showNotification(error.message, 'error');
    return null;
  }
}

async function signIn(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) throw error;
    showNotification('Добро пожаловать!');
    closeLogin();
    await updateUserUI();
    renderCards();
    return data;
  } catch (error) {
    showNotification(error.message, 'error');
    return null;
  }
}

async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    currentUser = null;
    await updateUserUI();
    renderCards();
    showNotification('Вы вышли из аккаунта');
  } catch (error) {
    showNotification(error.message, 'error');
  }
}

async function updateUserUI() {
  const { data: { user } } = await supabase.auth.getUser();
  currentUser = user;

  if (user) {
    const name = user.user_metadata?.name || user.email?.split('@')[0] || 'Пользователь';
    userGreeting.textContent = `👋 ${name}`;
    loginBtn.style.display = 'none';
    registerBtn.style.display = 'none';
    logoutBtn.style.display = 'inline-block';
    document.getElementById('profileSection').style.display = 'flex';
    document.getElementById('profileEmail').textContent = user.email;
  } else {
    userGreeting.textContent = '';
    loginBtn.style.display = 'inline-block';
    registerBtn.style.display = 'inline-block';
    logoutBtn.style.display = 'none';
    document.getElementById('profileSection').style.display = 'none';
  }
}

// ===== КОММЕНТАРИИ =====
async function loadComments(ideaId) {
  try {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('idea_id', ideaId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    currentIdeaComments = data || [];
    return data;
  } catch (error) {
    console.error('Ошибка загрузки комментариев:', error);
    return [];
  }
}

async function addComment(ideaId, text) {
  if (!currentUser) {
    showNotification('Войдите, чтобы оставить комментарий', 'error');
    return;
  }

  try {
    const { data, error } = await supabase
      .from('comments')
      .insert({
        idea_id: ideaId,
        user_id: currentUser.id,
        user_name: currentUser.user_metadata?.name || currentUser.email?.split('@')[0] || 'Аноним',
        text: text
      })
      .select();

    if (error) throw error;
    showNotification('Комментарий добавлен');
    await loadComments(ideaId);
    // Обновляем модал
    const idea = ideas.find(i => i.id === ideaId);
    if (idea) openModal(idea, currentCardElement);
    return data;
  } catch (error) {
    showNotification(error.message, 'error');
    return null;
  }
}

// ===== ЛАЙКИ (Supabase) =====
async function toggleLikeSupabase(ideaId) {
  if (!currentUser) {
    showNotification('Войдите, чтобы оценить идею', 'error');
    return;
  }

  try {
    // Проверяем, есть ли уже лайк
    const { data: existing } = await supabase
      .from('likes')
      .select('*')
      .eq('idea_id', ideaId)
      .eq('user_id', currentUser.id)
      .single();

    if (existing) {
      // Удаляем лайк
      await supabase
        .from('likes')
        .delete()
        .eq('idea_id', ideaId)
        .eq('user_id', currentUser.id);
      
      // Обновляем локальный счетчик
      likes[ideaId] = (likes[ideaId] || 1) - 1;
      if (likes[ideaId] <= 0) delete likes[ideaId];
    } else {
      // Добавляем лайк
      await supabase
        .from('likes')
        .insert({
          idea_id: ideaId,
          user_id: currentUser.id
        });
      
      likes[ideaId] = (likes[ideaId] || 0) + 1;
    }

    localStorage.setItem('ideahub_likes', JSON.stringify(likes));
    renderCards();
    return true;
  } catch (error) {
    console.error('Ошибка с лайком:', error);
    showNotification('Ошибка при оценке', 'error');
    return false;
  }
}

// ===== ИЗБРАННОЕ (Supabase) =====
async function toggleFavSupabase(ideaId) {
  if (!currentUser) {
    showNotification('Войдите, чтобы добавить в избранное', 'error');
    return;
  }

  try {
    const { data: existing } = await supabase
      .from('favorites')
      .select('*')
      .eq('idea_id', ideaId)
      .eq('user_id', currentUser.id)
      .single();

    if (existing) {
      await supabase
        .from('favorites')
        .delete()
        .eq('idea_id', ideaId)
        .eq('user_id', currentUser.id);
      
      favorites = favorites.filter(id => id !== ideaId);
    } else {
      await supabase
        .from('favorites')
        .insert({
          idea_id: ideaId,
          user_id: currentUser.id
        });
      
      if (!favorites.includes(ideaId)) favorites.push(ideaId);
    }

    localStorage.setItem('ideahub_favs', JSON.stringify(favorites));
    renderCards();
    return true;
  } catch (error) {
    console.error('Ошибка с избранным:', error);
    showNotification('Ошибка при сохранении', 'error');
    return false;
  }
}

// ===== ЗАГРУЗКА ДАННЫХ ПОЛЬЗОВАТЕЛЯ =====
async function loadUserData() {
  try {
    // Загружаем избранное
    if (currentUser) {
      const { data: favData } = await supabase
        .from('favorites')
        .select('idea_id')
        .eq('user_id', currentUser.id);
      
      if (favData) {
        favorites = favData.map(f => f.idea_id);
        localStorage.setItem('ideahub_favs', JSON.stringify(favorites));
      }

      // Загружаем лайки
      const { data: likeData } = await supabase
        .from('likes')
        .select('idea_id')
        .eq('user_id', currentUser.id);
      
      if (likeData) {
        const newLikes = {};
        likeData.forEach(l => {
          newLikes[l.idea_id] = (newLikes[l.idea_id] || 0) + 1;
        });
        // Объединяем с существующими лайками
        likes = { ...likes, ...newLikes };
        localStorage.setItem('ideahub_likes', JSON.stringify(likes));
      }
    }
  } catch (error) {
    console.error('Ошибка загрузки данных:', error);
  }
}

// ===== ОТРИСОВКА КАРТОЧЕК =====
function renderCards() {
  let filtered = ideas.filter(idea => {
    const matchCat = currentFilter === 'all' || idea.category === currentFilter;
    const matchSearch = idea.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      idea.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  if (currentSort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
  else if (currentSort === 'capital') filtered.sort((a, b) => a.capital - b.capital);

  grid.innerHTML = '';
  filtered.forEach((idea, idx) => {
    const isFav = favorites.includes(idea.id);
    const likeCount = likes[idea.id] || 0;
    const card = document.createElement('div');
    card.className = 'glass-card';
    card.dataset.id = idea.id;
    card.style.animationDelay = `${idx * 30}ms`;
    card.innerHTML = `
      <div class="flex justify-between items-start mb-2">
        <h3 class="text-lg font-semibold tracking-tight">${idea.name}</h3>
        <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${idea.id}">${isFav ? '❤️' : '🤍'}</button>
      </div>
      <div class="flex flex-wrap gap-1 mb-3">
        <span class="card-tag">${idea.category}</span>
        <span class="card-tag">💰 $${idea.capital.toLocaleString()}</span>
        <span class="card-tag">⚡ ${idea.complexity}</span>
        <span class="card-tag">📈 ${idea.potential}</span>
      </div>
      <div class="flex items-center justify-between mt-2">
        <div class="flex items-center gap-2">
          <span class="rating-badge"><span class="rating-star">★</span> ${idea.rating.toFixed(1)}</span>
          <button class="like-btn" data-id="${idea.id}">👍 ${likeCount}</button>
        </div>
        <span class="text-xs text-gray-500">${idea.desc.slice(0, 25)}…</span>
      </div>
    `;
    grid.appendChild(card);
  });

  attachCardEvents();
}

function attachCardEvents() {
  document.querySelectorAll('.glass-card').forEach(card => {
    card.removeEventListener('click', handleCardClick);
    card.addEventListener('click', handleCardClick);
  });

  document.querySelectorAll('.fav-btn').forEach(btn => {
    btn.removeEventListener('click', handleFavClick);
    btn.addEventListener('click', handleFavClick);
  });

  document.querySelectorAll('.like-btn').forEach(btn => {
    btn.removeEventListener('click', handleLikeClick);
    btn.addEventListener('click', handleLikeClick);
  });
}

function handleCardClick(e) {
  if (e.target.closest('.fav-btn') || e.target.closest('.like-btn')) return;
  const id = parseInt(this.dataset.id);
  const idea = ideas.find(i => i.id === id);
  if (idea) openModal(idea, this);
}

async function handleFavClick(e) {
  e.stopPropagation();
  const id = parseInt(this.dataset.id);
  await toggleFavSupabase(id);
}

async function handleLikeClick(e) {
  e.stopPropagation();
  const id = parseInt(this.dataset.id);
  await toggleLikeSupabase(id);
}

// ===== МОДАЛ С АНИМАЦИЕЙ =====
let isModalOpen = false;
let currentCardElement = null;

async function openModal(idea, cardElement) {
  if (isModalOpen) return;
  isModalOpen = true;
  currentCardElement = cardElement;

  // Загружаем комментарии
  await loadComments(idea.id);

  const isFav = favorites.includes(idea.id);
  const likeCount = likes[idea.id] || 0;

  modalContent.innerHTML = `
    <div class="space-y-4">
      <div class="flex justify-between items-start">
        <h2 class="text-3xl font-bold">${idea.name}</h2>
        <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${idea.id}">${isFav ? '❤️' : '🤍'}</button>
      </div>
      <div class="flex flex-wrap gap-2">
        <span class="card-tag">${idea.category}</span>
        <span class="card-tag">💰 $${idea.capital.toLocaleString()}</span>
        <span class="card-tag">⚡ ${idea.complexity}</span>
        <span class="card-tag">📈 ${idea.potential}</span>
        <span class="rating-badge">⭐ ${idea.rating.toFixed(1)}</span>
        <button class="like-btn" data-id="${idea.id}">👍 ${likeCount}</button>
      </div>
      <p class="text-gray-300 text-lg">${idea.desc}</p>
      <div><span class="text-gray-400">Почему перспективная:</span> ${idea.why}</div>
      <div><span class="text-gray-400">Плюсы:</span> ${idea.pros}</div>
      <div><span class="text-gray-400">Минусы:</span> ${idea.cons}</div>
      <div><span class="text-gray-400">Стартовый капитал:</span> $${idea.capital.toLocaleString()}</div>
      <div><span class="text-gray-400">Как начать:</span> ${idea.how}</div>
      <div><span class="text-gray-400">Риски:</span> ${idea.risks}</div>
      
      <!-- Комментарии -->
      <div class="comments-section">
        <h4 class="font-semibold mb-3">Комментарии (${currentIdeaComments.length})</h4>
        <div class="comments-list">
          ${currentIdeaComments.map(c => `
            <div class="comment-item">
              <div class="comment-author">${c.user_name}</div>
              <div class="comment-text">${c.text}</div>
              <div class="comment-time">${new Date(c.created_at).toLocaleString()}</div>
            </div>
          `).join('')}
        </div>
        <div class="comment-input-group">
          <input type="text" id="commentInput" placeholder="Напишите комментарий..." ${!currentUser ? 'disabled' : ''} />
          <button id="commentSubmitBtn" ${!currentUser ? 'disabled' : ''}>Отправить</button>
        </div>
      </div>
    </div>
  `;

  // События для кнопок внутри модала
  modalContent.querySelector('.fav-btn')?.addEventListener('click', async (e) => {
    e.stopPropagation();
    const id = parseInt(e.target.dataset.id);
    await toggleFavSupabase(id);
    openModal(ideas.find(i => i.id === id), currentCardElement);
  });

  modalContent.querySelector('.like-btn')?.addEventListener('click', async (e) => {
    e.stopPropagation();
    const id = parseInt(e.target.dataset.id);
    await toggleLikeSupabase(id);
    openModal(ideas.find(i => i.id === id), currentCardElement);
  });

  // Отправка комментария
  const commentInput = modalContent.querySelector('#commentInput');
  const commentBtn = modalContent.querySelector('#commentSubmitBtn');
  
  commentBtn?.addEventListener('click', async () => {
    const text = commentInput.value.trim();
    if (text) {
      await addComment(idea.id, text);
      commentInput.value = '';
      // Переоткрываем модал для обновления
      openModal(idea, currentCardElement);
    }
  });

  commentInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') commentBtn?.click();
  });

  // Анимация открытия
  const rect = cardElement?.getBoundingClientRect();
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  modalOverlay.classList.add('active');

  if (rect) {
    const scaleX = rect.width / 700;
    const scaleY = rect.height / (windowHeight * 0.9);
    const scale = Math.min(scaleX, scaleY, 0.8);
    const translateX = (rect.left + rect.width / 2) - windowWidth / 2;
    const translateY = (rect.top + rect.height / 2) - windowHeight / 2;

    modalWindow.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    modalWindow.style.opacity = '0';
    modalWindow.style.transition = 'none';
  }

  requestAnimationFrame(() => {
    modalWindow.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease';
    modalWindow.style.transform = 'scale(1) translate(0, 0)';
    modalWindow.style.opacity = '1';
  });
}

function closeModal() {
  if (!isModalOpen) return;

  const rect = currentCardElement?.getBoundingClientRect();
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  if (rect) {
    const scaleX = rect.width / 700;
    const scaleY = rect.height / (windowHeight * 0.9);
    const scale = Math.min(scaleX, scaleY, 0.8);
    const translateX = (rect.left + rect.width / 2) - windowWidth / 2;
    const translateY = (rect.top + rect.height / 2) - windowHeight / 2;

    modalWindow.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease';
    modalWindow.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    modalWindow.style.opacity = '0';
  } else {
    modalWindow.style.transition = 'opacity 0.3s ease';
    modalWindow.style.opacity = '0';
  }

  setTimeout(() => {
    modalOverlay.classList.remove('active');
    modalWindow.style.transform = '';
    modalWindow.style.opacity = '';
    modalWindow.style.transition = '';
    isModalOpen = false;
    currentCardElement = null;
  }, 400);
}

// ===== НАСТРОЙКИ =====
const settingsModal = document.getElementById('settingsModal');
const settingsBackdrop = document.getElementById('settingsBackdrop');
const settingsCloseBtn = document.getElementById('settingsCloseBtn');
const settingsBtn = document.getElementById('settingsBtn');

function openSettings() { settingsModal.classList.add('active'); }
function closeSettings() { settingsModal.classList.remove('active'); }

settingsBtn?.addEventListener('click', openSettings);
settingsBackdrop?.addEventListener('click', closeSettings);
settingsCloseBtn?.addEventListener('click', closeSettings);

// Переключение темы
document.querySelectorAll('.theme-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.dataset.theme;
    applyTheme(theme);
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ===== ТЕМА =====
function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('ideahub_theme', theme);
  document.body.classList.toggle('light-theme', theme === 'light');
}

// ===== АВТОРИЗАЦИЯ МОДАЛЫ =====
const loginModal = document.getElementById('loginModal');
const loginBackdrop = document.getElementById('loginBackdrop');
const loginCloseBtn = document.getElementById('loginCloseBtn');

const registerModal = document.getElementById('registerModal');
const registerBackdrop = document.getElementById('registerBackdrop');
const registerCloseBtn = document.getElementById('registerCloseBtn');

function openLogin() { loginModal.classList.add('active'); }
function closeLogin() { loginModal.classList.remove('active'); }
function openRegister() { registerModal.classList.add('active'); }
function closeRegister() { registerModal.classList.remove('active'); }

loginBtn?.addEventListener('click', openLogin);
loginBackdrop?.addEventListener('click', closeLogin);
loginCloseBtn?.addEventListener('click', closeLogin);

registerBtn?.addEventListener('click', openRegister);
registerBackdrop?.addEventListener('click', closeRegister);
registerCloseBtn?.addEventListener('click', closeRegister);

// Переключение между формами
document.getElementById('switchToRegister')?.addEventListener('click', () => {
  closeLogin();
  setTimeout(openRegister, 200);
});
document.getElementById('switchToLogin')?.addEventListener('click', () => {
  closeRegister();
  setTimeout(openLogin, 200);
});

// Обработка форм
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  await signIn(email, password);
});

document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  await signUp(email, password, name);
});

// ===== ЗАКРЫТИЕ МОДАЛА ИДЕИ =====
modalBackdrop?.addEventListener('click', closeModal);
modalCloseBtn?.addEventListener('click', closeModal);

// ===== ФИЛЬТРЫ, ПОИСК, СОРТИРОВКА =====
filterPills.forEach(pill => {
  pill.addEventListener('click', () => {
    filterPills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    currentFilter = pill.dataset.filter;
    renderCards();
  });
});

searchInput.addEventListener('input', (e) => {
  searchTerm = e.target.value;
  renderCards();
});

sortSelect.addEventListener('change', (e) => {
  currentSort = e.target.value;
  renderCards();
});

// ===== КНОПКА "Исследовать" =====
exploreBtn?.addEventListener('click', () => {
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
});

// ===== ВЫХОД =====
logoutBtn?.addEventListener('click', signOut);

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', async () => {
  applyTheme(currentTheme);
  
  // Проверяем авторизацию
  await updateUserUI();
  await loadUserData();
  
  renderCards();
  lucide.createIcons();

  // GSAP для hero
  gsap.from('.hero-title', { opacity: 0, y: 50, duration: 1, ease: 'power2.out' });
  gsap.from('.hero-subtitle', { opacity: 0, y: 30, duration: 1, delay: 0.2, ease: 'power2.out' });
  gsap.from('.hero-btn', { opacity: 0, scale: 0.8, duration: 0.8, delay: 0.4, ease: 'back.out(1.7)' });
});