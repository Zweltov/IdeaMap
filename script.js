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
let viewHistory = JSON.parse(localStorage.getItem('ideahub_history')) || [];
let achievements = JSON.parse(localStorage.getItem('ideahub_achievements')) || [];
let accounts = JSON.parse(localStorage.getItem('ideahub_accounts')) || [];

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
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const logoutBtn = document.getElementById('logoutBtn');
const userInfo = document.getElementById('userInfo');
const guestActions = document.getElementById('guestActions');
const userName = document.getElementById('userName');
const userAvatar = document.getElementById('userAvatar');
const userAvatarWrapper = document.getElementById('userAvatarWrapper');

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

// ===== АВТОРИЗАЦИЯ (LocalStorage) =====
function getUsers() {
  return JSON.parse(localStorage.getItem('ideahub_users')) || [];
}

function saveUsers(users) {
  localStorage.setItem('ideahub_users', JSON.stringify(users));
}

function getCurrentUser() {
  const saved = localStorage.getItem('ideahub_current_user');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return null;
    }
  }
  return null;
}

function setCurrentUser(user) {
  if (user) {
    localStorage.setItem('ideahub_current_user', JSON.stringify(user));
  } else {
    localStorage.removeItem('ideahub_current_user');
  }
  currentUser = user;
  updateUI();
}

function signUp(name, email, password) {
  const users = getUsers();
  
  if (users.find(u => u.email === email)) {
    showNotification('Пользователь с таким email уже существует', 'error');
    return false;
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    joined: new Date().toISOString(),
    bio: '',
    username: '@' + name.toLowerCase().replace(/\s/g, ''),
    country: '',
    city: '',
    links: '',
    settings: {
      theme: 'dark',
      animations: true,
      blur: true,
      compact: false,
      size: 'medium'
    }
  };
  
  users.push(newUser);
  saveUsers(users);
  
  // Добавляем в список аккаунтов
  if (!accounts.find(a => a.email === email)) {
    accounts.push({ id: newUser.id, name: newUser.name, email: newUser.email });
    localStorage.setItem('ideahub_accounts', JSON.stringify(accounts));
  }
  
  setCurrentUser({ id: newUser.id, name: newUser.name, email: newUser.email });
  showNotification(`Добро пожаловать, ${name}!`);
  return true;
}

function signIn(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    showNotification('Неверный email или пароль', 'error');
    return false;
  }

  setCurrentUser({ id: user.id, name: user.name, email: user.email });
  showNotification(`Добро пожаловать, ${user.name}!`);
  return true;
}

function signOut() {
  setCurrentUser(null);
  showNotification('Вы вышли из аккаунта');
  renderCards();
}

function updateUI() {
  if (currentUser) {
    userInfo.style.display = 'flex';
    guestActions.style.display = 'none';
    userName.textContent = currentUser.name;
    userAvatar.textContent = currentUser.name.charAt(0).toUpperCase();
  } else {
    userInfo.style.display = 'none';
    guestActions.style.display = 'flex';
  }
  
  // Обновляем профиль если на странице профиля
  if (window.location.pathname.includes('profile.html')) {
    updateProfilePage();
  }
}

// ===== ИСТОРИЯ ПРОСМОТРОВ =====
function addToHistory(ideaId) {
  const idea = ideas.find(i => i.id === ideaId);
  if (!idea) return;
  
  viewHistory = viewHistory.filter(item => item.id !== ideaId);
  viewHistory.unshift({
    id: ideaId,
    name: idea.name,
    timestamp: new Date().toISOString()
  });
  
  if (viewHistory.length > 50) viewHistory.pop();
  localStorage.setItem('ideahub_history', JSON.stringify(viewHistory));
}

function getHistory() {
  return viewHistory;
}

// ===== ДОСТИЖЕНИЯ =====
function checkAchievements() {
  const newAchievements = [];
  
  // Первые просмотры
  if (viewHistory.length >= 5 && !achievements.find(a => a.id === 'view5')) {
    newAchievements.push({ id: 'view5', icon: '👀', name: 'Любопытный', desc: 'Просмотрено 5 идей' });
  }
  if (viewHistory.length >= 20 && !achievements.find(a => a.id === 'view20')) {
    newAchievements.push({ id: 'view20', icon: '🔍', name: 'Исследователь', desc: 'Просмотрено 20 идей' });
  }
  if (viewHistory.length >= 50 && !achievements.find(a => a.id === 'view50')) {
    newAchievements.push({ id: 'view50', icon: '🧠', name: 'Эксперт', desc: 'Просмотрено 50 идей' });
  }
  
  // Лайки
  const totalLikes = Object.values(likes).reduce((sum, val) => sum + val, 0);
  if (totalLikes >= 1 && !achievements.find(a => a.id === 'like1')) {
    newAchievements.push({ id: 'like1', icon: '❤️', name: 'Первый лайк', desc: 'Поставлен первый лайк' });
  }
  if (totalLikes >= 10 && !achievements.find(a => a.id === 'like10')) {
    newAchievements.push({ id: 'like10', icon: '🔥', name: 'Любитель идей', desc: 'Поставлено 10 лайков' });
  }
  
  // Избранное
  if (favorites.length >= 1 && !achievements.find(a => a.id === 'fav1')) {
    newAchievements.push({ id: 'fav1', icon: '⭐', name: 'Первое избранное', desc: 'Добавлена первая идея в избранное' });
  }
  if (favorites.length >= 5 && !achievements.find(a => a.id === 'fav5')) {
    newAchievements.push({ id: 'fav5', icon: '🌟', name: 'Коллекционер', desc: 'Собрано 5 идей в избранном' });
  }
  
  // Категории
  const favCategories = favorites.map(id => ideas.find(i => i.id === id)?.category).filter(Boolean);
  const categoryCount = {};
  favCategories.forEach(cat => categoryCount[cat] = (categoryCount[cat] || 0) + 1);
  const topCategory = Object.keys(categoryCount).sort((a,b) => categoryCount[b] - categoryCount[a])[0];
  if (topCategory && !achievements.find(a => a.id === `cat_${topCategory}`)) {
    newAchievements.push({ 
      id: `cat_${topCategory}`, 
      icon: '🏷️', 
      name: `Любитель ${topCategory}`, 
      desc: `Больше всего идей из категории ${topCategory}` 
    });
  }
  
  if (newAchievements.length > 0) {
    achievements = [...achievements, ...newAchievements];
    localStorage.setItem('ideahub_achievements', JSON.stringify(achievements));
    newAchievements.forEach(a => showNotification(`🏆 Получено достижение: ${a.name}!`, 'success'));
  }
}

// ===== СТАТИСТИКА =====
function getStats() {
  const totalLikes = Object.values(likes).reduce((sum, val) => sum + val, 0);
  const totalFavs = favorites.length;
  const totalViews = viewHistory.length;
  
  // Подсчет комментариев
  const allComments = JSON.parse(localStorage.getItem('ideahub_comments')) || {};
  let totalComments = 0;
  Object.values(allComments).forEach(comments => {
    totalComments += comments.length;
  });
  
  return {
    likes: totalLikes,
    favorites: totalFavs,
    views: totalViews,
    comments: totalComments
  };
}

// ===== КОММЕНТАРИИ =====
function loadComments(ideaId) {
  const allComments = JSON.parse(localStorage.getItem('ideahub_comments')) || {};
  return allComments[ideaId] || [];
}

function saveComments(ideaId, comments) {
  const allComments = JSON.parse(localStorage.getItem('ideahub_comments')) || {};
  allComments[ideaId] = comments;
  localStorage.setItem('ideahub_comments', JSON.stringify(allComments));
}

function addComment(ideaId, text) {
  if (!currentUser) {
    showNotification('Войдите, чтобы оставить комментарий', 'error');
    return;
  }
  
  const comments = loadComments(ideaId);
  comments.push({
    id: Date.now(),
    user_name: currentUser.name,
    text: text,
    created_at: new Date().toISOString()
  });
  saveComments(ideaId, comments);
  showNotification('Комментарий добавлен');
  checkAchievements();
}

// ===== ИЗБРАННОЕ И ЛАЙКИ =====
function toggleFav(id) {
  if (!currentUser) {
    showNotification('Войдите, чтобы добавить в избранное', 'error');
    return;
  }
  
  const index = favorites.indexOf(id);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(id);
  }
  localStorage.setItem('ideahub_favs', JSON.stringify(favorites));
  renderCards();
  checkAchievements();
}

function toggleLike(id) {
  if (!currentUser) {
    showNotification('Войдите, чтобы оценить идею', 'error');
    return;
  }
  
  likes[id] = (likes[id] || 0) + 1;
  localStorage.setItem('ideahub_likes', JSON.stringify(likes));
  renderCards();
  checkAchievements();
}

// ===== ОТРИСОВКА КАРТОЧЕК =====
function renderCards() {
  if (!grid) {
    console.error('❌ cardsGrid не найден!');
    return;
  }

  let filtered = ideas.filter(idea => {
    const matchCat = currentFilter === 'all' || idea.category === currentFilter;
    const matchSearch = idea.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      idea.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  if (currentSort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
  else if (currentSort === 'capital') filtered.sort((a, b) => a.capital - b.capital);

  grid.innerHTML = '';
  
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="text-center text-gray-400 py-8">Идей не найдено 😕</div>`;
    return;
  }

  filtered.forEach((idea, idx) => {
    const isFav = currentUser && favorites.includes(idea.id);
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
  if (idea) {
    addToHistory(id);
    openModal(idea, this);
    checkAchievements();
  }
}

function handleFavClick(e) {
  e.stopPropagation();
  const id = parseInt(this.dataset.id);
  toggleFav(id);
}

function handleLikeClick(e) {
  e.stopPropagation();
  const id = parseInt(this.dataset.id);
  toggleLike(id);
}

// ===== МОДАЛ С АНИМАЦИЕЙ =====
let isModalOpen = false;
let currentCardElement = null;

function openModal(idea, cardElement) {
  if (isModalOpen) return;
  isModalOpen = true;
  currentCardElement = cardElement;

  const isFav = currentUser && favorites.includes(idea.id);
  const likeCount = likes[idea.id] || 0;
  const comments = loadComments(idea.id);

  modalContent.innerHTML = `
    <div class="space-y-4">
      <div class="flex justify-between items-start">
        <h2 class="text-2xl md:text-3xl font-bold">${idea.name}</h2>
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
      
      <div class="comments-section">
        <h4 class="font-semibold mb-3">Комментарии (${comments.length})</h4>
        <div class="comments-list">
          ${comments.map(c => `
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
  modalContent.querySelector('.fav-btn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    const id = parseInt(e.target.dataset.id);
    toggleFav(id);
    openModal(ideas.find(i => i.id === id), currentCardElement);
  });

  modalContent.querySelector('.like-btn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    const id = parseInt(e.target.dataset.id);
    toggleLike(id);
    openModal(ideas.find(i => i.id === id), currentCardElement);
  });

  // Отправка комментария
  const commentInput = modalContent.querySelector('#commentInput');
  const commentBtn = modalContent.querySelector('#commentSubmitBtn');
  
  commentBtn?.addEventListener('click', () => {
    const text = commentInput.value.trim();
    if (text) {
      addComment(idea.id, text);
      commentInput.value = '';
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
  document.body.classList.add('modal-open');

  if (rect) {
    const scaleX = Math.min(rect.width / 700, 0.8);
    const scaleY = Math.min(rect.height / (windowHeight * 0.9), 0.8);
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
    const scaleX = Math.min(rect.width / 700, 0.8);
    const scaleY = Math.min(rect.height / (windowHeight * 0.9), 0.8);
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
    document.body.classList.remove('modal-open');
    modalWindow.style.transform = '';
    modalWindow.style.opacity = '';
    modalWindow.style.transition = '';
    isModalOpen = false;
    currentCardElement = null;
  }, 400);
}

// ===== ПРОФИЛЬ (страница) =====
function updateProfilePage() {
  if (!document.querySelector('.profile-section')) return;
  
  const user = currentUser;
  if (!user) {
    window.location.href = 'index.html';
    return;
  }
  
  // Полные данные пользователя
  const users = getUsers();
  const userData = users.find(u => u.id === user.id);
  if (!userData) return;
  
  // Заполняем информацию
  document.getElementById('profileName').textContent = userData.name;
  document.getElementById('profileUsername').textContent = userData.username || '@username';
  document.getElementById('profileEmail').textContent = userData.email;
  document.getElementById('profileJoined').textContent = new Date(userData.joined).toLocaleDateString('ru-RU');
  document.getElementById('profileBio').textContent = userData.bio || 'Расскажите о себе...';
  document.getElementById('profileAvatar').textContent = userData.name.charAt(0).toUpperCase();
  
  // Локация
  const locationEl = document.getElementById('profileLocation');
  if (userData.country || userData.city) {
    locationEl.innerHTML = `<i data-lucide="map-pin" class="w-4 h-4"></i><span>${userData.city || ''}${userData.country ? ', ' + userData.country : ''}</span>`;
  }
  
  // Ссылки
  const linksEl = document.getElementById('profileLinks');
  if (userData.links) {
    const links = userData.links.split(',').map(l => l.trim());
    linksEl.innerHTML = links.map(link => {
      const url = link.startsWith('http') ? link : `https://${link}`;
      return `<a href="${url}" target="_blank">${link}</a>`;
    }).join('');
  }
  
  // Статистика
  const stats = getStats();
  document.getElementById('statLikes').textContent = stats.likes;
  document.getElementById('statFavorites').textContent = stats.favorites;
  document.getElementById('statViews').textContent = stats.views;
  document.getElementById('statComments').textContent = stats.comments;
  
  // Форма редактирования
  document.getElementById('editName').value = userData.name;
  document.getElementById('editUsername').value = userData.username || '';
  document.getElementById('editBio').value = userData.bio || '';
  document.getElementById('editCountry').value = userData.country || '';
  document.getElementById('editCity').value = userData.city || '';
  document.getElementById('editLinks').value = userData.links || '';
  
  // Настройки
  const settings = userData.settings || {};
  document.querySelector(`.theme-btn[data-theme="${settings.theme || 'dark'}"]`)?.classList.add('active');
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === (settings.theme || 'dark'));
  });
  
  document.getElementById('toggleAnimations').checked = settings.animations !== false;
  document.getElementById('toggleBlur').checked = settings.blur !== false;
  document.getElementById('toggleCompact').checked = settings.compact || false;
  
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.size === (settings.size || 'medium'));
  });
  
  // Избранное
  renderFavorites();
  
  // История
  renderHistory();
  
  // Достижения
  renderAchievements();
  
  // Аккаунты
  renderAccounts();
  
  // Инициализация иконок
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}

function renderFavorites() {
  const container = document.getElementById('favoritesGrid');
  if (!container) return;
  
  const favIdeas = ideas.filter(idea => favorites.includes(idea.id));
  
  if (favIdeas.length === 0) {
    container.innerHTML = '<div class="text-center text-gray-400 py-8">Нет избранных идей 😕</div>';
    return;
  }
  
  container.innerHTML = '';
  favIdeas.forEach(idea => {
    const card = document.createElement('div');
    card.className = 'glass-card';
    card.dataset.id = idea.id;
    card.innerHTML = `
      <div class="flex justify-between items-start mb-2">
        <h3 class="text-lg font-semibold tracking-tight">${idea.name}</h3>
        <span style="color:#ec4899;">❤️</span>
      </div>
      <div class="flex flex-wrap gap-1 mb-3">
        <span class="card-tag">${idea.category}</span>
        <span class="card-tag">💰 $${idea.capital.toLocaleString()}</span>
      </div>
      <p class="text-sm text-gray-400">${idea.desc}</p>
    `;
    card.addEventListener('click', () => {
      addToHistory(idea.id);
      window.location.href = 'index.html';
    });
    container.appendChild(card);
  });
}

function renderHistory() {
  const container = document.getElementById('historyList');
  if (!container) return;
  
  const history = getHistory();
  
  if (history.length === 0) {
    container.innerHTML = '<div class="text-center text-gray-400 py-8">История просмотров пуста</div>';
    return;
  }
  
  container.innerHTML = '';
  history.forEach(item => {
    const div = document.createElement('div');
    div.className = 'history-item';
    div.innerHTML = `
      <span class="history-item-name">${item.name}</span>
      <span class="history-item-time">${new Date(item.timestamp).toLocaleString('ru-RU')}</span>
    `;
    div.addEventListener('click', () => {
      const idea = ideas.find(i => i.id === item.id);
      if (idea) {
        window.location.href = 'index.html';
      }
    });
    container.appendChild(div);
  });
}

function renderAchievements() {
  const container = document.getElementById('achievementsGrid');
  if (!container) return;
  
  if (achievements.length === 0) {
    container.innerHTML = '<div class="text-center text-gray-400 py-8">Нет достижений 🏆</div>';
    return;
  }
  
  container.innerHTML = '';
  achievements.forEach(ach => {
    const div = document.createElement('div');
    div.className = 'achievement-item';
    div.innerHTML = `
      <div class="achievement-icon">${ach.icon}</div>
      <div class="achievement-name">${ach.name}</div>
      <div class="achievement-desc">${ach.desc}</div>
    `;
    container.appendChild(div);
  });
}

function renderAccounts() {
  const container = document.getElementById('accountsList');
  if (!container) return;
  
  const allAccounts = JSON.parse(localStorage.getItem('ideahub_accounts')) || [];
  
  if (allAccounts.length === 0) {
    container.innerHTML = '<div class="text-center text-gray-400 py-4">Нет сохранённых аккаунтов</div>';
    return;
  }
  
  container.innerHTML = '';
  allAccounts.forEach(acc => {
    const div = document.createElement('div');
    div.className = `account-item ${acc.email === currentUser?.email ? 'active' : ''}`;
    div.innerHTML = `
      <div class="account-item-info">
        <span class="account-item-name">${acc.name}</span>
        <span class="account-item-email">${acc.email}</span>
      </div>
      <div class="account-item-actions">
        ${acc.email !== currentUser?.email ? `
          <button class="account-btn switch" data-email="${acc.email}">Переключить</button>
        ` : `
          <span style="color:#8b5cf6; font-size:0.8rem;">Активен</span>
        `}
        <button class="account-btn delete" data-email="${acc.email}">Удалить</button>
      </div>
    `;
    container.appendChild(div);
  });
  
  // Обработчики для аккаунтов
  document.querySelectorAll('.account-btn.switch').forEach(btn => {
    btn.addEventListener('click', () => {
      const email = btn.dataset.email;
      const users = getUsers();
      const user = users.find(u => u.email === email);
      if (user) {
        setCurrentUser({ id: user.id, name: user.name, email: user.email });
        renderAccounts();
        showNotification(`Переключено на ${user.name}`);
      }
    });
  });
  
  document.querySelectorAll('.account-btn.delete').forEach(btn => {
    btn.addEventListener('click', () => {
      const email = btn.dataset.email;
      if (email === currentUser?.email) {
        showNotification('Нельзя удалить активный аккаунт', 'error');
        return;
      }
      if (confirm(`Удалить аккаунт ${email}?`)) {
        let users = getUsers();
        users = users.filter(u => u.email !== email);
        saveUsers(users);
        let accounts = JSON.parse(localStorage.getItem('ideahub_accounts')) || [];
        accounts = accounts.filter(a => a.email !== email);
        localStorage.setItem('ideahub_accounts', JSON.stringify(accounts));
        renderAccounts();
        showNotification('Аккаунт удалён');
      }
    });
  });
}

// ===== ТЕМА =====
function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('ideahub_theme', theme);
  document.body.classList.toggle('light-theme', theme === 'light');
  
  // Сохраняем в настройки пользователя
  if (currentUser) {
    const users = getUsers();
    const user = users.find(u => u.id === currentUser.id);
    if (user) {
      if (!user.settings) user.settings = {};
      user.settings.theme = theme;
      saveUsers(users);
    }
  }
}

// ===== НАСТРОЙКИ НА СТРАНИЦЕ ПРОФИЛЯ =====
function setupProfileSettings() {
  // Форма редактирования
  const form = document.getElementById('profileEditForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const users = getUsers();
      const user = users.find(u => u.id === currentUser?.id);
      if (user) {
        user.name = document.getElementById('editName').value.trim() || user.name;
        user.username = document.getElementById('editUsername').value.trim() || user.username;
        user.bio = document.getElementById('editBio').value.trim();
        user.country = document.getElementById('editCountry').value.trim();
        user.city = document.getElementById('editCity').value.trim();
        user.links = document.getElementById('editLinks').value.trim();
        saveUsers(users);
        setCurrentUser({ id: user.id, name: user.name, email: user.email });
        updateProfilePage();
        showNotification('Профиль обновлён!');
      }
    });
  }
  
  // Переключение темы
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme;
      applyTheme(theme);
      document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Сохраняем в настройки пользователя
      if (currentUser) {
        const users = getUsers();
        const user = users.find(u => u.id === currentUser.id);
        if (user) {
          if (!user.settings) user.settings = {};
          user.settings.theme = theme;
          saveUsers(users);
        }
      }
    });
  });
  
  // Toggle настройки
  document.getElementById('toggleAnimations')?.addEventListener('change', (e) => {
    if (currentUser) {
      const users = getUsers();
      const user = users.find(u => u.id === currentUser.id);
      if (user) {
        if (!user.settings) user.settings = {};
        user.settings.animations = e.target.checked;
        saveUsers(users);
      }
    }
  });
  
  document.getElementById('toggleBlur')?.addEventListener('change', (e) => {
    if (currentUser) {
      const users = getUsers();
      const user = users.find(u => u.id === currentUser.id);
      if (user) {
        if (!user.settings) user.settings = {};
        user.settings.blur = e.target.checked;
        saveUsers(users);
      }
    }
  });
  
  document.getElementById('toggleCompact')?.addEventListener('change', (e) => {
    if (currentUser) {
      const users = getUsers();
      const user = users.find(u => u.id === currentUser.id);
      if (user) {
        if (!user.settings) user.settings = {};
        user.settings.compact = e.target.checked;
        saveUsers(users);
      }
    }
  });
  
  // Размер интерфейса
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const size = btn.dataset.size;
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (currentUser) {
        const users = getUsers();
        const user = users.find(u => u.id === currentUser.id);
        if (user) {
          if (!user.settings) user.settings = {};
          user.settings.size = size;
          saveUsers(users);
        }
      }
    });
  });
  
  // Добавление аккаунта
  document.getElementById('addAccountBtn')?.addEventListener('click', () => {
    const email = prompt('Введите email нового аккаунта:');
    if (!email) return;
    const users = getUsers();
    const existing = users.find(u => u.email === email);
    if (existing) {
      showNotification('Аккаунт уже существует', 'error');
      return;
    }
    const name = prompt('Введите имя:');
    if (!name) return;
    const password = prompt('Введите пароль (минимум 6 символов):');
    if (!password || password.length < 6) {
      showNotification('Пароль должен быть минимум 6 символов', 'error');
      return;
    }
    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      joined: new Date().toISOString(),
      bio: '',
      username: '@' + name.toLowerCase().replace(/\s/g, ''),
      country: '',
      city: '',
      links: '',
      settings: { theme: 'dark', animations: true, blur: true, compact: false, size: 'medium' }
    };
    users.push(newUser);
    saveUsers(users);
    
    const accounts = JSON.parse(localStorage.getItem('ideahub_accounts')) || [];
    accounts.push({ id: newUser.id, name: newUser.name, email: newUser.email });
    localStorage.setItem('ideahub_accounts', JSON.stringify(accounts));
    
    renderAccounts();
    showNotification('Аккаунт создан!');
  });
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
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  
  if (signIn(email, password)) {
    closeLogin();
    renderCards();
  }
});

document.getElementById('registerForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('registerName').value.trim();
  const email = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('registerConfirmPassword').value;
  
  if (password !== confirmPassword) {
    showNotification('Пароли не совпадают', 'error');
    return;
  }
  
  if (password.length < 6) {
    showNotification('Пароль должен содержать минимум 6 символов', 'error');
    return;
  }
  
  if (signUp(name, email, password)) {
    closeRegister();
    renderCards();
  }
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
  const catalog = document.getElementById('catalog');
  if (catalog) {
    catalog.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    
    exploreBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      exploreBtn.style.transform = 'scale(1)';
    }, 150);
  }
});

// ===== ВЫХОД =====
logoutBtn?.addEventListener('click', signOut);

// ===== НАВБАР ПРИ СКРОЛЛЕ =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// ===== ПЕРЕХОД В ПРОФИЛЬ =====
userAvatarWrapper?.addEventListener('click', () => {
  if (currentUser) {
    window.location.href = 'profile.html';
  }
});

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', () => {
  // Загружаем тему
  applyTheme(currentTheme);
  
  // Загружаем пользователя
  currentUser = getCurrentUser();
  updateUI();
  
  // Рендерим карточки
  renderCards();
  
  // Если на странице профиля
  if (window.location.pathname.includes('profile.html')) {
    if (!currentUser) {
      window.location.href = 'index.html';
      return;
    }
    updateProfilePage();
    setupProfileSettings();
  }
  
  // Инициализация иконок Lucide
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }

  // GSAP для hero
  if (typeof gsap !== 'undefined' && !window.location.pathname.includes('profile.html')) {
    gsap.from('.hero-title', { opacity: 0, y: 50, duration: 1, ease: 'power2.out' });
    gsap.from('.hero-subtitle', { opacity: 0, y: 30, duration: 1, delay: 0.2, ease: 'power2.out' });
    gsap.from('.hero-btn', { opacity: 0, scale: 0.8, duration: 0.8, delay: 0.4, ease: 'back.out(1.7)' });
  }

  console.log('✅ IdeaHub загружен!');
  console.log(`📊 Всего идей: ${ideas.length}`);
  console.log(`👤 Пользователь: ${currentUser ? currentUser.name : 'Гость'}`);
  console.log(`🏆 Достижений: ${achievements.length}`);
});
