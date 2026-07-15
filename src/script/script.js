// ===== КОНФИГУРАЦИЯ SUPABASE =====
const SUPABASE_URL = 'https://hhwndrynnozllrqtcdct.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhod25kcnlubm96bGxycXRjZGN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5MTkyOTIsImV4cCI6MjA5OTQ5NTI5Mn0.Gq2PNYIiZzKIaUNOY1AfF-8yVnAjPCf2HRGMX11Av14';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ===== ДАННЫЕ ИДЕЙ =====
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
let currentCategory = 'all';
let currentSidebarTab = 'all';
let searchTerm = '';
let currentUser = null;
let currentIdeaComments = [];
let isModalOpen = false;
let currentCardElement = null;
let isRegisterMode = false;
let articles = [];
let customThemeMode = 'dark';

// ===== ХРАНИЛИЩЕ АККАУНТОВ =====
function getStoredAccounts() {
  return JSON.parse(localStorage.getItem('ideahub_accounts')) || [];
}
function saveStoredAccounts(accs) {
  localStorage.setItem('ideahub_accounts', JSON.stringify(accs));
}
function addStoredAccount(user) {
  const accs = getStoredAccounts();
  if (!accs.find(a => a.id === user.id)) {
    accs.push({
      id: user.id, email: user.email,
      name: user.user_metadata?.name || user.email?.split('@')[0] || 'Пользователь',
      avatar: user.user_metadata?.avatar || ''
    });
    saveStoredAccounts(accs);
  }
}
function removeStoredAccount(userId) {
  saveStoredAccounts(getStoredAccounts().filter(a => a.id !== userId));
}

// ===== ТЕМЫ ОФОРМЛЕНИЯ =====
const presetThemes = [
  { id: 'default', name: 'Тёмная (по умолчанию)', bg: '#0b0d10', accent: '#00ffcc', interface: '#14181e', isDark: true },
  { id: 'midnight', name: 'Полночь', bg: '#0a0a1a', accent: '#6366f1', interface: '#12121f', isDark: true },
  { id: 'forest', name: 'Лес', bg: '#0a1410', accent: '#22c55e', interface: '#0f1f18', isDark: true },
  { id: 'sunset', name: 'Закат', bg: '#1a0a0f', accent: '#f97316', interface: '#1f1015', isDark: true },
  { id: 'ocean', name: 'Океан', bg: '#0a1015', accent: '#0ea5e9', interface: '#0f1820', isDark: true },
  { id: 'rose', name: 'Роза', bg: '#150a10', accent: '#f43f5e', interface: '#1c0f15', isDark: true },
  { id: 'light', name: 'Светлая', bg: '#f5f5f7', accent: '#00a896', interface: '#ffffff', isDark: false },
  { id: 'light-blue', name: 'Светлая голубая', bg: '#f0f5ff', accent: '#2563eb', interface: '#ffffff', isDark: false },
  { id: 'light-warm', name: 'Светлая тёплая', bg: '#fff8f0', accent: '#ea580c', interface: '#ffffff', isDark: false },
];

function getCustomThemes() {
  return JSON.parse(localStorage.getItem('ideahub_custom_themes')) || [];
}
function saveCustomThemes(themes) {
  localStorage.setItem('ideahub_custom_themes', JSON.stringify(themes));
}

function getCurrentTheme() {
  const id = localStorage.getItem('ideahub_active_theme') || 'default';
  const all = [...presetThemes, ...getCustomThemes()];
  return all.find(t => t.id === id) || presetThemes[0];
}

function applyTheme(theme) {
  const root = document.documentElement;
  root.style.setProperty('--bg-color', theme.bg);
  root.style.setProperty('--accent-color', theme.accent);
  root.style.setProperty('--interface-color', theme.interface);
  root.style.setProperty('--modal-bg', theme.isDark
    ? `${theme.interface}d9`
    : `${theme.interface}f0`);
  root.style.setProperty('--card-bg', theme.isDark
    ? 'rgba(255,255,255,0.03)'
    : 'rgba(0,0,0,0.04)');
  root.style.setProperty('--card-border', theme.isDark
    ? 'rgba(255,255,255,0.05)'
    : 'rgba(0,0,0,0.08)');
  root.style.setProperty('--nav-bg', theme.isDark
    ? 'rgba(255,255,255,0.03)'
    : 'rgba(0,0,0,0.04)');
  root.style.setProperty('--nav-border', theme.isDark
    ? 'rgba(255,255,255,0.08)'
    : 'rgba(0,0,0,0.1)');
  root.style.setProperty('--nav-text', theme.isDark
    ? 'rgba(255,255,255,0.6)'
    : 'rgba(0,0,0,0.5)');
  root.style.setProperty('--text-color', theme.isDark ? '#f0f2f5' : '#1a1a2e');

  // Орбы фона — цвета на основе акцента и фона темы
  root.style.setProperty('--orb1-color', theme.isDark ? shiftColor(theme.accent, -40) : shiftColor(theme.accent, 20));
  root.style.setProperty('--orb2-color', theme.accent);
  root.style.setProperty('--orb3-color', theme.isDark ? shiftColor(theme.interface, 30) : shiftColor(theme.accent, -20));
  root.style.setProperty('--orb1-opacity', theme.isDark ? '0.22' : '0.15');
  root.style.setProperty('--orb2-opacity', theme.isDark ? '0.22' : '0.12');
  root.style.setProperty('--orb3-opacity', theme.isDark ? '0.20' : '0.10');

  // Light theme body class
  document.body.classList.toggle('theme-light', !theme.isDark);

  // Set accent-rgb for theme mode toggle capsule
  root.style.setProperty('--accent-rgb', hexToRgb(theme.accent));

  localStorage.setItem('ideahub_active_theme', theme.id);
}

function shiftColor(hex, amount) {
  let r = parseInt(hex.slice(1,3), 16) + amount;
  let g = parseInt(hex.slice(3,5), 16) + amount;
  let b = parseInt(hex.slice(5,7), 16) + amount;
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return '#' + [r,g,b].map(v => v.toString(16).padStart(2,'0')).join('');
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return `${r},${g},${b}`;
}

function renderThemes() {
  const grid = document.getElementById('themeGrid');
  if (!grid) return;
  const currentId = localStorage.getItem('ideahub_active_theme') || 'default';
  const custom = getCustomThemes();
  const all = [...presetThemes, ...custom];

  grid.innerHTML = all.map(t => {
    const isActive = t.id === currentId;
    const isCustom = custom.find(c => c.id === t.id);
    const textColor = t.isDark ? '#f0f2f5' : '#1a1a2e';
    const subText = t.isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
    return `
      <div class="theme-card ${isActive ? 'active' : ''}" data-theme-id="${t.id}">
        ${isCustom ? `<button class="theme-delete-btn" data-delete-theme="${t.id}"><i data-lucide="x" style="width:12px;height:12px;"></i></button>` : ''}
        <div class="theme-check"><i data-lucide="check" style="width:14px;height:14px;"></i></div>
        <div class="theme-preview" style="background:${t.bg}; color:${textColor};">
          <div class="theme-preview-accent-dot" style="background:${t.accent};"></div>
          <div class="theme-preview-bg" style="background:${t.interface};">
            <div class="theme-preview-mini-nav" style="background:${t.accent}; opacity:0.3;"></div>
            <div class="theme-preview-mini-card" style="background:${textColor}; opacity:0.15;"></div>
            <div class="theme-preview-mini-card" style="background:${textColor}; opacity:0.1; width:50%;"></div>
          </div>
          <div class="theme-name" style="color:${textColor};">${t.name}</div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();

  grid.querySelectorAll('.theme-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.theme-delete-btn')) return;
      const id = card.dataset.themeId;
      const theme = all.find(t => t.id === id);
      if (theme) {
        applyTheme(theme);
        renderThemes();
        showNotification(`Тема "${theme.name}" применена`);
      }
    });
  });

  grid.querySelectorAll('.theme-delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.deleteTheme;
      saveCustomThemes(getCustomThemes().filter(t => t.id !== id));
      if (localStorage.getItem('ideahub_active_theme') === id) {
        applyTheme(presetThemes[0]);
      }
      renderThemes();
      showNotification('Тема удалена');
    });
  });
}

// ===== УВЕДОМЛЕНИЯ =====
function showNotification(message, type = 'success', duration = 3000) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  let iconName = type === 'error' ? 'alert-circle' : 'check-circle';
  let iconColor = type === 'error' ? '#ff4d4d' : 'var(--accent-color)';
  toast.innerHTML = `
    <i data-lucide="${iconName}" style="color: ${iconColor};"></i>
    <div class="toast-content">${message}</div>
    <button class="toast-close"><i data-lucide="x" style="width:18px;height:18px;"></i></button>
    <div class="toast-progress" style="animation-duration: ${duration}ms;"></div>
  `;
  container.appendChild(toast);
  if(window.lucide) lucide.createIcons({root: toast});
  setTimeout(() => toast.classList.add('show'), 10);
  let timeout = setTimeout(() => closeToast(toast), duration);
  toast.querySelector('.toast-close').onclick = () => { clearTimeout(timeout); closeToast(toast); };
}
function closeToast(toast) { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }

function translateError(msg) {
  const t = {
    "Invalid login credentials": "Неверное имя пользователя или пароль",
    "Email not confirmed": "Подтвердите электронную почту",
    "User already registered": "Пользователь с таким именем уже существует",
    "Password should be at least 6 characters": "Пароль должен быть не менее 6 символов"
  };
  return t[msg] || msg;
}

function recordView(type) {
  if (!currentUser) return;
  updateProfileStatistic(type === 'ideas' ? 'view_idea' : 'view_article');
}

// =======================================================================
// ВКЛАДКИ ВЕРХНЕЙ ПАНЕЛИ
// =======================================================================
const navTabs = document.querySelectorAll('.nav-tab');
const navIndicator = document.getElementById('navIndicator');
const tabContents = document.querySelectorAll('.tab-content');
let lastIndicatorX = 0;

function moveIndicator(tabEl) {
  if (!tabEl || !navIndicator) return;
  const isInitial = navIndicator.style.width === '0px' || !navIndicator.style.width;
  if (!isInitial) {
    const targetX = tabEl.offsetLeft;
    const direction = targetX > lastIndicatorX ? 1 : -1;
    navIndicator.classList.add('is-moving');
    navIndicator.dataset.dir = direction > 0 ? '1' : '-1';
    navIndicator.style.width = `${tabEl.offsetWidth + 4}px`;
    navIndicator.style.transform = `translateX(${tabEl.offsetLeft - 2}px)`;
    clearTimeout(navIndicator.moveTimeout);
    navIndicator.moveTimeout = setTimeout(() => {
      navIndicator.style.width = `${tabEl.offsetWidth}px`;
      navIndicator.style.transform = `translateX(${tabEl.offsetLeft}px)`;
      navIndicator.classList.remove('is-moving');
      lastIndicatorX = tabEl.offsetLeft;
    }, 180);
  } else {
    navIndicator.style.width = `${tabEl.offsetWidth}px`;
    navIndicator.style.transform = `translateX(${tabEl.offsetLeft}px)`;
    lastIndicatorX = tabEl.offsetLeft;
  }
}

function switchTab(tabName) {
  navTabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tabName));
  tabContents.forEach(c => { c.style.display = c.id === `${tabName}-tab` ? '' : 'none'; });
  const activeTab = Array.from(navTabs).find(t => t.dataset.tab === tabName);
  moveIndicator(activeTab);
  document.body.className = document.body.className.replace(/\bbg-\w+/g, '').trim();
  document.body.classList.add(`bg-${tabName}`);
  if (tabName === 'articles') renderArticles();
  if (tabName === 'ideas') { renderCards(); moveSidebarIndicator(); }
}

navTabs.forEach(tab => tab.addEventListener('click', () => switchTab(tab.dataset.tab)));

window.addEventListener('resize', () => {
  const active = document.querySelector('.nav-tab.active');
  if (active) moveIndicator(active);
  moveSidebarIndicator();
  moveSettingsIndicator();
  moveThemeModeIndicator();
});

// =======================================================================
// ВЕРТИКАЛЬНЫЙ САЙДБАР (ВКЛАДКА "ИДЕИ")
// =======================================================================
const sidebarTabs = document.querySelectorAll('.sidebar-tab');
const sidebarIndicator = document.getElementById('sidebarIndicator');
let lastSidebarY = 0;

function moveSidebarIndicator(tabEl) {
  if (!tabEl) {
    tabEl = document.querySelector('.sidebar-tab.active');
  }
  if (!tabEl || !sidebarIndicator) return;
  const isInitial = sidebarIndicator.style.height === '0px' || !sidebarIndicator.style.height;
  if (!isInitial) {
    const targetY = tabEl.offsetTop;
    const direction = targetY > lastSidebarY ? 1 : -1;
    sidebarIndicator.classList.add('is-moving');
    sidebarIndicator.dataset.dir = direction > 0 ? '1' : '-1';
    sidebarIndicator.style.height = `${tabEl.offsetHeight + 4}px`;
    sidebarIndicator.style.transform = `translateY(${tabEl.offsetTop - 2}px)`;
    clearTimeout(sidebarIndicator.moveTimeout);
    sidebarIndicator.moveTimeout = setTimeout(() => {
      sidebarIndicator.style.height = `${tabEl.offsetHeight}px`;
      sidebarIndicator.style.transform = `translateY(${tabEl.offsetTop}px)`;
      sidebarIndicator.classList.remove('is-moving');
      lastSidebarY = tabEl.offsetTop;
    }, 180);
  } else {
    sidebarIndicator.style.height = `${tabEl.offsetHeight}px`;
    sidebarIndicator.style.transform = `translateY(${tabEl.offsetTop}px)`;
    lastSidebarY = tabEl.offsetTop;
  }
}

function switchSidebarTab(tabName) {
  sidebarTabs.forEach(t => t.classList.toggle('active', t.dataset.sideTab === tabName));
  currentSidebarTab = tabName;
  const active = Array.from(sidebarTabs).find(t => t.dataset.sideTab === tabName);
  moveSidebarIndicator(active);
  renderCards();
}

sidebarTabs.forEach(tab => tab.addEventListener('click', () => switchSidebarTab(tab.dataset.sideTab)));

// =======================================================================
// АВТОРИЗАЦИЯ (вход по имени пользователя)
// =======================================================================
const authModal = document.getElementById('authModal');
const authBtn = document.getElementById('authBtn');
const navAvatarBtn = document.getElementById('navAvatarBtn');
const closeAuthBtn = document.getElementById('closeAuth');
const authForm = document.getElementById('authForm');
const authErrorMsg = document.getElementById('authErrorMsg');
const modalTitle = document.getElementById('modalTitle');
const modalSub = document.getElementById('modalSub');
const nameFieldGroup = document.getElementById('nameFieldGroup');
const authNameInput = document.getElementById('authName');
const authUsernameInput = document.getElementById('authUsername');
const authPasswordInput = document.getElementById('authPassword');
const submitAuthBtn = document.getElementById('submitAuthBtn');
const toggleAuthText = document.getElementById('toggleAuthText');
const toggleAuthLink = document.getElementById('toggleAuthLink');

function openAuthModal() { authErrorMsg.style.display = 'none'; authModal.classList.add('active'); }
function closeAuthModal() {
  authModal.classList.remove('active');
  setTimeout(() => { authForm?.reset(); authErrorMsg.style.display = 'none'; }, 300);
}
function setAuthMode(registerMode) {
  isRegisterMode = registerMode;
  authErrorMsg.style.display = 'none';
  if (registerMode) {
    modalTitle.textContent = 'Регистрация';
    modalSub.textContent = 'Создайте аккаунт, чтобы сохранять идеи и оставлять комментарии';
    nameFieldGroup.style.display = 'block';
    submitAuthBtn.querySelector('.btn-submit-text').textContent = 'Создать аккаунт';
    toggleAuthText.textContent = 'Уже есть аккаунт?';
    toggleAuthLink.textContent = 'Войти';
  } else {
    modalTitle.textContent = 'Вход в систему';
    modalSub.textContent = 'Введите имя пользователя и пароль для доступа к IdeaHub';
    nameFieldGroup.style.display = 'none';
    submitAuthBtn.querySelector('.btn-submit-text').textContent = 'Войти';
    toggleAuthText.textContent = 'Ещё нет аккаунта?';
    toggleAuthLink.textContent = 'Создать';
  }
}

function getUserDisplayName(user) {
  return user.user_metadata?.name || user.email?.split('@')[0] || 'Пользователь';
}
function getUserAvatar(user) {
  const name = getUserDisplayName(user);
  return user.user_metadata?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=00ffcc&color=0b0d10&bold=true`;
}

function updateAuthButton() {
  if (currentUser) {
    authBtn.style.display = 'none';
    navAvatarBtn.style.display = 'block';
    navAvatarBtn.src = getUserAvatar(currentUser);
  } else {
    authBtn.style.display = 'block';
    navAvatarBtn.style.display = 'none';
  }
}

authBtn?.addEventListener('click', () => { setAuthMode(false); openAuthModal(); });
closeAuthBtn?.addEventListener('click', closeAuthModal);
authModal?.addEventListener('click', (e) => { if (e.target === authModal) closeAuthModal(); });
toggleAuthLink?.addEventListener('click', (e) => { e.preventDefault(); setAuthMode(!isRegisterMode); });

authForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  authErrorMsg.style.display = 'none';
  const username = authUsernameInput.value.trim();
  const password = authPasswordInput.value;
  if (!username || username.length < 2) {
    showNotification('Введите имя пользователя (минимум 2 символа)', 'error'); authUsernameInput.focus(); return;
  }
  if (!password || password.length < 6) {
    showNotification('Пароль должен быть не менее 6 символов', 'error'); authPasswordInput.focus(); return;
  }
  submitAuthBtn.classList.add('loading');
  submitAuthBtn.disabled = true;
  try {
    if (isRegisterMode) {
      const displayName = authNameInput.value.trim() || username;
      const result = await signUpWithUsername(username, password, displayName);
      if (result) closeAuthModal();
    } else {
      const result = await signInWithUsername(username, password);
      if (result) closeAuthModal();
    }
  } finally {
    submitAuthBtn.classList.remove('loading');
    submitAuthBtn.disabled = false;
  }
});

// Look up email from username via profiles table
async function getEmailByUsername(username) {
  try {
    const { data, error } = await supabaseClient.from('profiles').select('email').eq('username', username).single();
    if (error || !data) return null;
    return data.email;
  } catch { return null; }
}

// Generate synthetic email from username
function usernameToEmail(username) {
  const clean = username.toLowerCase().replace(/[^a-z0-9_]/g, '_');
  return `${clean}@ideahub.local`;
}

async function signUpWithUsername(username, password, displayName) {
  const email = usernameToEmail(username);
  try {
    // Check if username already exists
    const { data: existing } = await supabaseClient.from('profiles').select('id').eq('username', username).maybeSingle();
    if (existing) {
      showNotification('Пользователь с таким именем уже существует', 'error');
      return null;
    }
    const { data, error } = await supabaseClient.auth.signUp({
      email, password,
      options: { data: { name: displayName, username } }
    });
    if (error) throw error;
    // Insert profile
    if (data.user) {
      await supabaseClient.from('profiles').insert({
        id: data.user.id, username, email
      });
    }
    showNotification('Аккаунт создан! Добро пожаловать!');
    return data;
  } catch (error) { showNotification(translateError(error.message), 'error'); return null; }
}

async function signInWithUsername(username, password) {
  const email = usernameToEmail(username);
  try {
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) throw error;
    showNotification('Добро пожаловать!');
    await updateUserUI(); renderCards();
    if (data.session?.refresh_token && currentUser) {
      localStorage.setItem(`ideahub_refresh_${currentUser.id}`, data.session.refresh_token);
    }
    return data;
  } catch (error) { showNotification(translateError(error.message), 'error'); return null; }
}

async function signOut() {
  try {
    const { error } = await supabaseClient.auth.signOut();
    if (error) throw error;
    currentUser = null; await updateUserUI(); renderCards();
    showNotification('Вы вышли из аккаунта');
  } catch (error) { showNotification(translateError(error.message), 'error'); }
}

async function updateUserUI() {
  const { data: { user } } = await supabaseClient.auth.getUser();
  currentUser = user;
  updateAuthButton();
  if (user) addStoredAccount(user);
}

// =======================================================================
// ПРОФИЛЬ
// =======================================================================
const userProfileModal = document.getElementById('userProfileModal');
const profileLogoutBtn = document.getElementById('profileLogoutBtn');
const accSwitchBtn = document.getElementById('accSwitchBtn');
const accSwitchMenu = document.getElementById('accSwitchMenu');
const accSwitchIcon = document.getElementById('accSwitchIcon');
const accDropdownList = document.getElementById('accDropdownList');
const addAccountBtn = document.getElementById('addAccountBtn');
const openSettingsBtn = document.getElementById('openSettingsBtn');

async function loadProfileStats() {
  if (!currentUser) return;
  const created = new Date(currentUser.created_at);
  const diffDays = Math.max(1, Math.ceil(Math.abs(Date.now() - created) / (1000 * 60 * 60 * 24)));
  document.getElementById('statAge').textContent = `${diffDays} дн.`;
  // Load from profiles_statistic table
  const stats = await getProfileStatistic(currentUser.id);
  if (stats) {
    document.getElementById('statUpvotes').textContent = stats.stat_up || 0;
    document.getElementById('statComments').textContent = parseInt(stats.stat_comments || '0', 10);
    document.getElementById('statIdeas').textContent = stats.stat_views_ideas || 0;
    document.getElementById('statArticles').textContent = stats.stat_views_articles || 0;
  } else {
    document.getElementById('statUpvotes').textContent = '0';
    document.getElementById('statComments').textContent = '0';
    document.getElementById('statIdeas').textContent = '0';
    document.getElementById('statArticles').textContent = '0';
  }
}

function renderAccountsDropdown() {
  if (!accDropdownList) return;
  const accs = getStoredAccounts();
  if (!currentUser) { accDropdownList.innerHTML = '<div class="acc-dropdown-empty">Войдите в аккаунт</div>'; return; }
  const otherAccs = accs.filter(a => a.id !== currentUser.id);
  let html = '';
  const curName = getUserDisplayName(currentUser);
  const curAvatar = getUserAvatar(currentUser);
  html += `<button class="acc-dropdown-item active-account" data-acc-id="${currentUser.id}"><img src="${curAvatar}" alt=""><div class="acc-item-info"><span class="acc-item-name">${curName}</span><span class="acc-item-email">${currentUser.email}</span></div><i data-lucide="check" style="width:18px;height:18px;color:var(--accent-color);flex-shrink:0;"></i></button>`;
  otherAccs.forEach(a => {
    const avatar = a.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(a.name)}&background=00ffcc&color=0b0d10&bold=true`;
    html += `<button class="acc-dropdown-item" data-acc-id="${a.id}"><img src="${avatar}" alt=""><div class="acc-item-info"><span class="acc-item-name">${a.name}</span><span class="acc-item-email">${a.email}</span></div><button class="acc-remove-btn" data-remove-id="${a.id}" title="Убрать"><i data-lucide="x"></i></button></button>`;
  });
  accDropdownList.innerHTML = html;
  if (window.lucide) lucide.createIcons();
  accDropdownList.querySelectorAll('.acc-dropdown-item').forEach(item => {
    item.addEventListener('click', async (e) => {
      if (e.target.closest('.acc-remove-btn')) return;
      const accId = item.dataset.accId;
      if (accId === currentUser.id) return;
      const acc = accs.find(a => a.id === accId);
      if (!acc) return;
      await quickSwitchAccount(acc);
    });
  });
  accDropdownList.querySelectorAll('.acc-remove-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      removeStoredAccount(btn.dataset.removeId);
      renderAccountsDropdown();
      showNotification('Аккаунт убран из списка');
    });
  });
}

function openAccDropdown() { renderAccountsDropdown(); accSwitchMenu.classList.add('open'); if (accSwitchIcon) accSwitchIcon.style.transform = 'rotate(180deg)'; }
function closeAccDropdown() { accSwitchMenu?.classList.remove('open'); if (accSwitchIcon) accSwitchIcon.style.transform = 'rotate(0deg)'; }

async function quickSwitchAccount(acc) {
  const tokenKey = `ideahub_refresh_${acc.id}`;
  const refreshToken = localStorage.getItem(tokenKey);
  if (refreshToken) {
    try {
      const { data, error } = await supabaseClient.auth.setSession({ refresh_token: refreshToken });
      if (!error && data.user) {
        currentUser = data.user;
        addStoredAccount(currentUser);
        await updateUserUI();
        await loadUserData();
        renderCards();
        showNotification(`Переключились на ${acc.name}`);
        userProfileModal.classList.remove('active');
        closeAccDropdown();
        return;
      }
    } catch (e) { /* fall through to login */ }
  }
  showNotification(`Войдите в аккаунт ${acc.email}`, 'error');
  userProfileModal.classList.remove('active'); closeAccDropdown();
  setAuthMode(false); openAuthModal();
}

navAvatarBtn?.addEventListener('click', () => {
  if (!currentUser) return;
  const name = getUserDisplayName(currentUser);
  const avatarUrl = getUserAvatar(currentUser);
  document.getElementById('profileModalName').textContent = name;
  document.getElementById('profileModalEmail').textContent = currentUser.email;
  document.getElementById('profileModalAvatar').src = avatarUrl;
  userProfileModal.classList.add('active'); closeAccDropdown();
  if (window.lucide) lucide.createIcons();
  loadProfileStats();
  // Load username into settings
  const usernameInput = document.getElementById('settingsUsernameInput');
  if (usernameInput) {
    usernameInput.value = currentUser.user_metadata?.username || currentUser.email?.split('@')[0] || '';
  }
});

document.getElementById('userProfileClose')?.addEventListener('click', () => { userProfileModal.classList.remove('active'); closeAccDropdown(); });
document.getElementById('userProfileBackdrop')?.addEventListener('click', () => { userProfileModal.classList.remove('active'); closeAccDropdown(); });

accSwitchBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  if (accSwitchMenu.classList.contains('open')) closeAccDropdown(); else openAccDropdown();
});

document.addEventListener('click', (e) => {
  if (!accSwitchMenu?.classList.contains('open')) return;
  if (!e.target.closest('.account-switch-wrapper')) closeAccDropdown();
});

addAccountBtn?.addEventListener('click', () => {
  userProfileModal.classList.remove('active'); closeAccDropdown();
  setAuthMode(false); openAuthModal();
});

profileLogoutBtn?.addEventListener('click', () => {
  userProfileModal.classList.remove('active'); closeAccDropdown(); signOut();
});

// =======================================================================
// ОКНО НАСТРОЕК
// =======================================================================
const settingsModal = document.getElementById('settingsModal');
const settingsCloseBtn = document.getElementById('settingsCloseBtn');
const settingsBackdrop = document.getElementById('settingsBackdrop');
const settingsTabs = document.querySelectorAll('[data-settings-tab]');
const settingsIndicator = document.getElementById('settingsIndicator');
let lastSettingsX = 0;

function moveSettingsIndicator(tabEl) {
  if (!tabEl || !settingsIndicator) return;
  const isInitial = settingsIndicator.style.width === '0px' || !settingsIndicator.style.width;
  if (!isInitial) {
    const targetX = tabEl.offsetLeft;
    const direction = targetX > lastSettingsX ? 1 : -1;
    settingsIndicator.classList.add('is-moving');
    settingsIndicator.dataset.dir = direction > 0 ? '1' : '-1';
    settingsIndicator.style.width = `${tabEl.offsetWidth + 4}px`;
    settingsIndicator.style.transform = `translateX(${tabEl.offsetLeft - 2}px)`;
    clearTimeout(settingsIndicator.moveTimeout);
    settingsIndicator.moveTimeout = setTimeout(() => {
      settingsIndicator.style.width = `${tabEl.offsetWidth}px`;
      settingsIndicator.style.transform = `translateX(${tabEl.offsetLeft}px)`;
      settingsIndicator.classList.remove('is-moving');
      lastSettingsX = tabEl.offsetLeft;
    }, 180);
  } else {
    settingsIndicator.style.width = `${tabEl.offsetWidth}px`;
    settingsIndicator.style.transform = `translateX(${tabEl.offsetLeft}px)`;
    lastSettingsX = tabEl.offsetLeft;
  }
}

function switchSettingsTab(tabName) {
  settingsTabs.forEach(t => t.classList.toggle('active', t.dataset.settingsTab === tabName));
  document.querySelectorAll('.settings-panel').forEach(p => {
    p.style.display = p.id === `settings-${tabName}` ? 'block' : 'none';
  });
  const active = Array.from(settingsTabs).find(t => t.dataset.settingsTab === tabName);
  moveSettingsIndicator(active);
  if (tabName === 'personalization') { renderThemes(); moveThemeModeIndicator(); }
}

settingsTabs.forEach(tab => tab.addEventListener('click', () => switchSettingsTab(tab.dataset.settingsTab)));

openSettingsBtn?.addEventListener('click', () => {
  userProfileModal.classList.remove('active');
  settingsModal.classList.add('active');
  switchSettingsTab('general');
  if (window.lucide) lucide.createIcons();
  if (currentUser) {
    const name = currentUser.user_metadata?.name || '';
    document.getElementById('settingsNameInput').value = name;
    document.getElementById('settingsEmailInput').value = currentUser.email || '';
    const usernameInput = document.getElementById('settingsUsernameInput');
    if (usernameInput) usernameInput.value = currentUser.user_metadata?.username || currentUser.email?.split('@')[0] || '';
  }
});

settingsCloseBtn?.addEventListener('click', () => settingsModal.classList.remove('active'));
settingsBackdrop?.addEventListener('click', () => settingsModal.classList.remove('active'));

// Save name
document.getElementById('settingsNameInput')?.addEventListener('change', async (e) => {
  if (!currentUser) return;
  try {
    const { data, error } = await supabaseClient.auth.updateUser({ data: { name: e.target.value } });
    if (error) throw error;
    currentUser = data.user;
    updateAuthButton();
    addStoredAccount(currentUser);
    showNotification('Имя обновлено');
  } catch (err) { showNotification('Ошибка обновления имени', 'error'); }
});

// Save username
document.getElementById('settingsUsernameInput')?.addEventListener('change', async (e) => {
  if (!currentUser) return;
  const newUsername = e.target.value.trim();
  if (!newUsername) return;
  try {
    // Check if username is taken by someone else
    const { data: existing } = await supabaseClient.from('profiles').select('id').eq('username', newUsername).neq('id', currentUser.id).maybeSingle();
    if (existing) {
      showNotification('Это имя пользователя уже занято', 'error');
      e.target.value = currentUser.user_metadata?.username || '';
      return;
    }
    // Update profile
    await supabaseClient.from('profiles').update({ username: newUsername }).eq('id', currentUser.id);
    // Update user metadata
    const { data, error } = await supabaseClient.auth.updateUser({ data: { username: newUsername } });
    if (error) throw error;
    currentUser = data.user;
    showNotification('Имя пользователя обновлено');
  } catch (err) { showNotification('Ошибка обновления имени пользователя', 'error'); }
});

// Clear cache
document.getElementById('clearCacheBtn')?.addEventListener('click', () => {
  Object.keys(localStorage).forEach(k => {
    if (k.startsWith('ideahub_views_')) localStorage.removeItem(k);
  });
  showNotification('Кэш очищен');
});

// Custom theme builder — sync color pickers with text inputs
function syncColorPicker(pickerId, textId) {
  const picker = document.getElementById(pickerId);
  const text = document.getElementById(textId);
  if (!picker || !text) return;
  picker.addEventListener('input', () => text.value = picker.value);
  text.addEventListener('input', () => {
    if (/^#[0-9a-fA-F]{6}$/.test(text.value)) picker.value = text.value;
  });
}
syncColorPicker('customBgColor', 'customBgText');
syncColorPicker('customAccentColor', 'customAccentText');
syncColorPicker('customInterfaceColor', 'customInterfaceText');

// Theme mode toggle (light/dark slider)
const themeModeTabs = document.querySelectorAll('.theme-mode-tab');
const themeModeIndicator = document.getElementById('themeModeIndicator');
let lastThemeModeX = 0;

function moveThemeModeIndicator(tabEl) {
  if (!tabEl || !themeModeIndicator) return;
  const isInitial = themeModeIndicator.style.width === '0px' || !themeModeIndicator.style.width;
  if (!isInitial) {
    const targetX = tabEl.offsetLeft;
    const direction = targetX > lastThemeModeX ? 1 : -1;
    themeModeIndicator.style.width = `${tabEl.offsetWidth + 4}px`;
    themeModeIndicator.style.transform = `translateX(${tabEl.offsetLeft - 2}px)`;
    clearTimeout(themeModeIndicator.moveTimeout);
    themeModeIndicator.moveTimeout = setTimeout(() => {
      themeModeIndicator.style.width = `${tabEl.offsetWidth}px`;
      themeModeIndicator.style.transform = `translateX(${tabEl.offsetLeft}px)`;
      lastThemeModeX = tabEl.offsetLeft;
    }, 180);
  } else {
    themeModeIndicator.style.width = `${tabEl.offsetWidth}px`;
    themeModeIndicator.style.transform = `translateX(${tabEl.offsetLeft}px)`;
    lastThemeModeX = tabEl.offsetLeft;
  }
}

function switchThemeMode(mode) {
  customThemeMode = mode;
  themeModeTabs.forEach(t => t.classList.toggle('active', t.dataset.themeMode === mode));
  const active = Array.from(themeModeTabs).find(t => t.dataset.themeMode === mode);
  moveThemeModeIndicator(active);
  // Update labels
  const darkLabel = document.getElementById('themeModeLabelDark');
  const lightLabel = document.getElementById('themeModeLabelLight');
  if (darkLabel) darkLabel.classList.toggle('active', mode === 'dark');
  if (lightLabel) lightLabel.classList.toggle('active', mode === 'light');
  // Suggest default colors for light mode
  if (mode === 'light') {
    document.getElementById('customBgColor').value = '#f5f5f7';
    document.getElementById('customBgText').value = '#f5f5f7';
    document.getElementById('customInterfaceColor').value = '#ffffff';
    document.getElementById('customInterfaceText').value = '#ffffff';
  } else {
    document.getElementById('customBgColor').value = '#0b0d10';
    document.getElementById('customBgText').value = '#0b0d10';
    document.getElementById('customInterfaceColor').value = '#14181e';
    document.getElementById('customInterfaceText').value = '#14181e';
  }
}

themeModeTabs.forEach(tab => tab.addEventListener('click', () => switchThemeMode(tab.dataset.themeMode)));

document.getElementById('saveCustomThemeBtn')?.addEventListener('click', () => {
  const bg = document.getElementById('customBgText').value;
  const accent = document.getElementById('customAccentText').value;
  const interfaceC = document.getElementById('customInterfaceText').value;
  const name = document.getElementById('customThemeName').value.trim() || 'Своя тема';
  if (!/^#[0-9a-fA-F]{6}$/.test(bg) || !/^#[0-9a-fA-F]{6}$/.test(accent) || !/^#[0-9a-fA-F]{6}$/.test(interfaceC)) {
    showNotification('Неверный формат цвета', 'error'); return;
  }
  const isDark = customThemeMode === 'dark';
  const id = 'custom_' + Date.now();
  const theme = { id, name, bg, accent, interface: interfaceC, isDark };
  const custom = getCustomThemes();
  custom.push(theme);
  saveCustomThemes(custom);
  applyTheme(theme);
  renderThemes();
  showNotification(`Тема "${name}" сохранена и применена`);
  document.getElementById('customThemeName').value = '';
});

function isLightColor(hex) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return (r * 0.299 + g * 0.587 + b * 0.114) > 128;
}

// =======================================================================
// CROP АВАТАРКИ
// =======================================================================
const cropModal = document.getElementById('cropModal');
const avatarUpload = document.getElementById('avatarUpload');
const cropCanvas = document.getElementById('cropCanvas');
const ctx = cropCanvas?.getContext('2d');
const applyCropBtn = document.getElementById('applyCropBtn');
const cropZoom = document.getElementById('cropZoom');
let currentUploadImage = null;
let cropOffsetX = 0, cropOffsetY = 0, isDraggingCrop = false, startDragX = 0, startDragY = 0;

document.getElementById('changeAvatarBtn')?.addEventListener('click', () => avatarUpload.click());

avatarUpload?.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      currentUploadImage = new Image();
      currentUploadImage.onload = () => {
        cropZoom.value = 1; cropOffsetX = 0; cropOffsetY = 0;
        cropModal.classList.add('active'); drawCrop();
      };
      currentUploadImage.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

function handleDragStart(x, y) { isDraggingCrop = true; startDragX = x - cropOffsetX; startDragY = y - cropOffsetY; }
function handleDragMove(x, y) { if (!isDraggingCrop) return; cropOffsetX = x - startDragX; cropOffsetY = y - startDragY; drawCrop(); }
function handleDragEnd() { isDraggingCrop = false; }

cropCanvas?.addEventListener('mousedown', (e) => handleDragStart(e.clientX, e.clientY));
cropCanvas?.addEventListener('mousemove', (e) => handleDragMove(e.clientX, e.clientY));
window.addEventListener('mouseup', handleDragEnd);
cropCanvas?.addEventListener('touchstart', (e) => handleDragStart(e.touches[0].clientX, e.touches[0].clientY));
cropCanvas?.addEventListener('touchmove', (e) => { e.preventDefault(); handleDragMove(e.touches[0].clientX, e.touches[0].clientY); });
window.addEventListener('touchend', handleDragEnd);

function drawCrop() {
  if (!currentUploadImage || !ctx) return;
  const zoom = parseFloat(cropZoom.value);
  const size = 300;
  cropCanvas.width = size; cropCanvas.height = size;
  const sw = currentUploadImage.width * zoom, sh = currentUploadImage.height * zoom;
  ctx.clearRect(0,0,size,size);
  ctx.drawImage(currentUploadImage, 0, 0, currentUploadImage.width, currentUploadImage.height, (size-sw)/2+cropOffsetX, (size-sh)/2+cropOffsetY, sw, sh);
}

cropZoom?.addEventListener('input', drawCrop);
document.getElementById('cancelCropBtn')?.addEventListener('click', () => { cropModal.classList.remove('active'); avatarUpload.value = ''; });

applyCropBtn?.addEventListener('click', async () => {
  if (!currentUser) return;
  const base64Avatar = cropCanvas.toDataURL('image/jpeg', 0.8);
  applyCropBtn.textContent = 'Сохранение...';
  try {
    const { data, error } = await supabaseClient.auth.updateUser({ data: { avatar: base64Avatar } });
    if (error) throw error;
    showNotification("Аватар успешно обновлён!");
    currentUser = data.user; updateAuthButton();
    addStoredAccount(currentUser);
    const accs = getStoredAccounts();
    const idx = accs.findIndex(a => a.id === currentUser.id);
    if (idx >= 0) { accs[idx].avatar = base64Avatar; saveStoredAccounts(accs); }
    document.getElementById('profileModalAvatar').src = base64Avatar;
    cropModal.classList.remove('active');
  } catch (err) { showNotification("Ошибка обновления аватара", "error"); }
  finally { applyCropBtn.textContent = 'Применить'; avatarUpload.value = ''; }
});

// =======================================================================
// КОММЕНТАРИИ
// =======================================================================
async function loadComments(ideaId) {
  try {
    const { data, error } = await supabaseClient.from('comments').select('*').eq('idea_id', ideaId).order('created_at', { ascending: false });
    if (error) throw error;
    currentIdeaComments = data || [];
    return currentIdeaComments;
  } catch (error) { console.error('Ошибка загрузки комментариев:', error); return []; }
}

async function addComment(ideaId, text) {
  if (!currentUser) { showNotification('Войдите, чтобы оставить комментарий', 'error'); return null; }
  try {
    const { data, error } = await supabaseClient.from('comments').insert({
      idea_id: ideaId, user_id: currentUser.id,
      user_name: getUserDisplayName(currentUser),
      text: text
    }).select();
    if (error) throw error;
    await updateProfileStatistic('comment');
    return data;
  } catch (error) { showNotification(translateError(error.message), 'error'); return null; }
}

function getCommentAvatar(userName) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=00ffcc&color=0b0d10&bold=true`;
}

// =======================================================================
// ЛАЙКИ И ИЗБРАННОЕ
// =======================================================================
async function toggleLikeSupabase(ideaId) {
  if (!currentUser) { showNotification('Войдите, чтобы оценить идею', 'error'); return false; }
  try {
    const { data: existing } = await supabaseClient.from('likes').select('*').eq('idea_id', ideaId).eq('user_id', currentUser.id).maybeSingle();
    if (existing) {
      await supabaseClient.from('likes').delete().eq('idea_id', ideaId).eq('user_id', currentUser.id);
      likes[ideaId] = (likes[ideaId] || 1) - 1;
      if (likes[ideaId] <= 0) delete likes[ideaId];
    } else {
      await supabaseClient.from('likes').insert({ idea_id: ideaId, user_id: currentUser.id });
      likes[ideaId] = (likes[ideaId] || 0) + 1;
    }
    localStorage.setItem('ideahub_likes', JSON.stringify(likes));
    await updateProfileStatistic('up');
    renderCards();
    if (isModalOpen) {
      const upvoteBtn = document.getElementById('modalUpvoteBtn');
      if (upvoteBtn) {
        const isLiked = await isIdeaLikedByUser(ideaId);
        upvoteBtn.classList.toggle('active', isLiked);
      }
    }
    return true;
  } catch (error) { console.error('Ошибка с лайком:', error); showNotification('Ошибка при оценке', 'error'); return false; }
}

async function toggleFavSupabase(ideaId) {
  if (!currentUser) { showNotification('Войдите, чтобы добавить в избранное', 'error'); return false; }
  try {
    const { data: existing } = await supabaseClient.from('favorites').select('*').eq('idea_id', ideaId).eq('user_id', currentUser.id).maybeSingle();
    if (existing) {
      await supabaseClient.from('favorites').delete().eq('idea_id', ideaId).eq('user_id', currentUser.id);
      favorites = favorites.filter(id => id !== ideaId);
    } else {
      await supabaseClient.from('favorites').insert({ idea_id: ideaId, user_id: currentUser.id });
      if (!favorites.includes(ideaId)) favorites.push(ideaId);
    }
    localStorage.setItem('ideahub_favs', JSON.stringify(favorites));
    renderCards();
    if (isModalOpen) {
      const favBtn = document.getElementById('favToggleBtn');
      if (favBtn) {
        const isFav = favorites.includes(ideaId);
        favBtn.textContent = isFav ? 'В избранном' : 'Добавить в избранное';
      }
    }
    return true;
  } catch (error) { console.error('Ошибка с избранным:', error); showNotification('Ошибка при сохранении', 'error'); return false; }
}

async function isIdeaLikedByUser(ideaId) {
  if (!currentUser) return false;
  const { data } = await supabaseClient.from('likes').select('id').eq('idea_id', ideaId).eq('user_id', currentUser.id).maybeSingle();
  return !!data;
}

async function isIdeaFavoritedByUser(ideaId) {
  if (!currentUser) return false;
  const { data } = await supabaseClient.from('favorites').select('id').eq('idea_id', ideaId).eq('user_id', currentUser.id).maybeSingle();
  return !!data;
}

// ===== profiles_statistic =====
async function getProfileStatistic(userId) {
  if (!userId) return null;
  try {
    const { data, error } = await supabaseClient.from('profiles_statistic').select('*').eq('user_id', userId).maybeSingle();
    if (error) throw error;
    return data;
  } catch (e) { console.error('Ошибка получения статистики:', e); return null; }
}

async function updateProfileStatistic(field) {
  if (!currentUser) return;
  try {
    const existing = await getProfileStatistic(currentUser.id);
    if (!existing) {
      // Create row
      const initial = { user_id: currentUser.id };
      if (field === 'up') initial.stat_up = 1;
      if (field === 'comment') initial.stat_comments = '1';
      if (field === 'view_idea') initial.stat_views_ideas = 1;
      if (field === 'view_article') initial.stat_views_articles = 1;
      await supabaseClient.from('profiles_statistic').insert(initial);
    } else {
      const update = {};
      if (field === 'up') update.stat_up = (existing.stat_up || 0) + 1;
      if (field === 'comment') {
        const cur = parseInt(existing.stat_comments || '0', 10);
        update.stat_comments = String(cur + 1);
      }
      if (field === 'view_idea') update.stat_views_ideas = (existing.stat_views_ideas || 0) + 1;
      if (field === 'view_article') update.stat_views_articles = (existing.stat_views_articles || 0) + 1;
      await supabaseClient.from('profiles_statistic').update(update).eq('user_id', currentUser.id);
    }
  } catch (e) { console.error('Ошибка обновления статистики:', e); }
}

async function loadUserData() {
  try {
    if (!currentUser) return;
    const { data: favData } = await supabaseClient.from('favorites').select('idea_id').eq('user_id', currentUser.id);
    if (favData) { favorites = favData.map(f => f.idea_id); localStorage.setItem('ideahub_favs', JSON.stringify(favorites)); }
    const { data: likeData } = await supabaseClient.from('likes').select('idea_id').eq('user_id', currentUser.id);
    if (likeData) {
      const newLikes = {};
      likeData.forEach(l => { newLikes[l.idea_id] = (newLikes[l.idea_id] || 0) + 1; });
      likes = { ...likes, ...newLikes };
      localStorage.setItem('ideahub_likes', JSON.stringify(likes));
    }
  } catch (error) { console.error('Ошибка загрузки данных:', error); }
}

// =======================================================================
// КАТАЛОГ ИДЕЙ
// =======================================================================
const cardsGrid = document.getElementById('cardsGrid');
const ideasSearchInput = document.getElementById('ideasSearch');
const searchClearBtn = document.getElementById('searchClear');
const filterToggleBtn = document.getElementById('filterToggleBtn');
const filterPanel = document.getElementById('filterPanel');
const categoryFilters = document.getElementById('categoryFilters');
let filterPanelOpen = false;

function renderIdeaCard(idea, rank) {
  const isFav = favorites.includes(idea.id);
  const likeCount = likes[idea.id] || 0;
  const rankBadge = rank ? `<div class="card-rank rank-${rank}">${rank}</div>` : '';
  return `
    <div class="glass-card" data-id="${idea.id}">
      ${rankBadge}
      <span class="card-badge">${idea.category}</span>
      <button class="card-favorite ${isFav ? 'active' : ''}" data-fav="${idea.id}" aria-label="В избранное"><i data-lucide="arrow-up"></i></button>
      <h3 class="card-title">${idea.name}</h3>
      <p class="card-desc">${idea.desc}</p>
      <div class="card-meta">
        <span class="meta-item"><i data-lucide="wallet"></i> от ${idea.capital.toLocaleString('ru-RU')} ₽</span>
        <span class="meta-item"><i data-lucide="star"></i> ${idea.rating.toFixed(1)}</span>
        <span class="meta-item"><i data-lucide="arrow-up"></i> ${likeCount}</span>
      </div>
    </div>`;
}

function renderTopListItem(idea, rank) {
  const isFav = favorites.includes(idea.id);
  const likeCount = likes[idea.id] || 0;
  const rankClass = rank <= 3 ? `rank-${rank}` : '';
  return `
    <div class="top-list-item" data-id="${idea.id}">
      <div class="top-list-rank ${rankClass}">${rank}</div>
      <div class="top-list-body">
        <h3>${idea.name}</h3>
        <p>${idea.desc}</p>
      </div>
      <div class="top-list-meta">
        <span class="meta-item"><i data-lucide="star"></i> ${idea.rating.toFixed(1)}</span>
        <span class="meta-item"><i data-lucide="wallet"></i> ${idea.capital.toLocaleString('ru-RU')} ₽</span>
      </div>
      <button class="top-list-fav ${isFav ? 'active' : ''}" data-fav="${idea.id}" aria-label="В избранное"><i data-lucide="arrow-up"></i></button>
    </div>`;
}

function renderCards() {
  if (!cardsGrid) return;
  let filtered = ideas.filter(idea => {
    const matchesCategory = currentCategory === 'all' || idea.category === currentCategory;
    const matchesSearch = idea.name.toLowerCase().includes(searchTerm.toLowerCase()) || idea.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  if (currentSidebarTab === 'top') {
    filtered = filtered.slice().sort((a, b) => b.rating - a.rating);
    cardsGrid.classList.add('top-mode');
    cardsGrid.innerHTML = filtered.length
      ? filtered.map((idea, i) => renderTopListItem(idea, i + 1)).join('')
      : '<p style="opacity:0.6;">Ничего не найдено</p>';
  } else {
    cardsGrid.classList.remove('top-mode');
    cardsGrid.innerHTML = filtered.length
      ? filtered.map((idea) => renderIdeaCard(idea, null)).join('')
      : '<p style="opacity:0.6;">Ничего не найдено</p>';
  }
  if (window.lucide) lucide.createIcons();
  cardsGrid.querySelectorAll('[data-fav]').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); toggleFavSupabase(parseInt(btn.dataset.fav, 10)); });
  });
  cardsGrid.querySelectorAll('[data-id]').forEach(card => {
    card.addEventListener('click', () => {
      const idea = ideas.find(i => i.id === parseInt(card.dataset.id, 10));
      if (idea) openIdeaModal(idea, card);
    });
  });
  updateFilterCounts();
}

let searchDebounceTimer = null;
const searchBox = document.querySelector('.search-box');

ideasSearchInput?.addEventListener('input', (e) => {
  const val = e.target.value;
  if (searchClearBtn) searchClearBtn.style.display = val ? 'flex' : 'none';
  if (searchBox) searchBox.classList.add('is-loading');
  clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => {
    searchTerm = val;
    renderCards();
    if (searchBox) searchBox.classList.remove('is-loading');
  }, 700);
});

searchClearBtn?.addEventListener('click', () => {
  searchTerm = ''; if (ideasSearchInput) ideasSearchInput.value = '';
  searchClearBtn.style.display = 'none';
  if (searchBox) searchBox.classList.remove('is-loading');
  clearTimeout(searchDebounceTimer);
  renderCards();
});

filterToggleBtn?.addEventListener('click', () => {
  filterPanelOpen = !filterPanelOpen;
  if (!filterPanel) return;
  if (filterPanelOpen) {
    filterPanel.style.display = 'block';
    filterPanel.classList.remove('is-closed');
    // Force reflow then animate open
    void filterPanel.offsetHeight;
    requestAnimationFrame(() => {
      filterPanel.classList.add('is-open');
      filterPanel.style.height = 'auto';
      filterPanel.style.opacity = '1';
    });
  } else {
    filterPanel.classList.remove('is-open');
    filterPanel.classList.add('is-closed');
    filterPanel.style.height = '0';
    filterPanel.style.opacity = '0';
    setTimeout(() => { filterPanel.style.display = 'none'; }, 400);
  }
});

categoryFilters?.querySelectorAll('.filter-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    categoryFilters.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active'); currentCategory = pill.dataset.category; renderCards();
  });
});

function updateFilterCounts() {
  const pills = categoryFilters?.querySelectorAll('.filter-pill');
  if (!pills) return;
  pills.forEach(pill => {
    const cat = pill.dataset.category;
    const count = ideas.filter(idea => cat === 'all' || idea.category === cat).length;
    let countEl = pill.querySelector('.filter-pill-count');
    if (!countEl) {
      countEl = document.createElement('span');
      countEl.className = 'filter-pill-count';
      pill.appendChild(countEl);
    }
    countEl.textContent = count;
  });
}

// =======================================================================
// МОДАЛЬНОЕ ОКНО ДЕТАЛЕЙ
// =======================================================================
const detailsModal = document.getElementById('detailsModal');
const detailsBackdrop = document.getElementById('detailsBackdrop');
const detailsCloseBtn = document.getElementById('detailsCloseBtn');
const modalDynamicContent = document.getElementById('modalDynamicContent');

function openIdeaModal(idea, cardEl) {
  recordView('ideas');
  currentCardElement = cardEl;
  const isFav = favorites.includes(idea.id);
  const likeCount = likes[idea.id] || 0;
  modalDynamicContent.innerHTML = `
    <span class="modal-badge">${idea.category}</span>
    <h2>${idea.name}</h2>
    <div class="modal-grid-info">
      <div><strong>Капитал</strong> от ${idea.capital.toLocaleString('ru-RU')} ₽</div>
      <div><strong>Сложность</strong> ${idea.complexity}</div>
      <div><strong>Потенциал</strong> ${idea.potential}</div>
      <div><strong>Рейтинг</strong> ${idea.rating.toFixed(1)} ★</div>
    </div>
    <div class="modal-blocks">
      <h3><i data-lucide="file-text"></i> Описание</h3><p>${idea.desc}</p>
      <h3><i data-lucide="lightbulb"></i> Почему это работает</h3><p>${idea.why}</p>
    </div>
    <div class="modal-glass-plates">
      <div class="modal-glass-plate">
        <h3><i data-lucide="thumbs-up"></i> Плюсы</h3>
        <p>${idea.pros}</p>
      </div>
      <div class="modal-glass-plate">
        <h3><i data-lucide="thumbs-down"></i> Минусы</h3>
        <p>${idea.cons}</p>
      </div>
      <div class="modal-glass-plate">
        <h3><i data-lucide="rocket"></i> Как начать</h3>
        <p>${idea.how}</p>
      </div>
      <div class="modal-glass-plate">
        <h3><i data-lucide="alert-triangle"></i> Риски</h3>
        <p>${idea.risks}</p>
      </div>
    </div>
    <div style="display:flex; gap:0.8rem; margin-top:1rem; flex-wrap:wrap;">
      <button class="btn-glow" id="favToggleBtn">${isFav ? 'В избранном' : 'Добавить в избранное'}</button>
      <button class="btn-upvote-modal" id="modalUpvoteBtn" data-idea-id="${idea.id}">
        <i data-lucide="arrow-up"></i>
        <span class="upvote-count">${likeCount}</span>
      </button>
    </div>
    <div class="comments-section" id="commentsSection">Загрузка комментариев...</div>
  `;
  if (window.lucide) lucide.createIcons();
  document.getElementById('favToggleBtn')?.addEventListener('click', async () => {
    await toggleFavSupabase(idea.id);
  });
  document.getElementById('modalUpvoteBtn')?.addEventListener('click', async () => {
    await toggleLikeSupabase(idea.id);
    const btn = document.getElementById('modalUpvoteBtn');
    if (btn) {
      const count = likes[idea.id] || 0;
      btn.querySelector('.upvote-count').textContent = count;
    }
  });
  // Set initial upvote state
  if (currentUser) {
    isIdeaLikedByUser(idea.id).then(isLiked => {
      const btn = document.getElementById('modalUpvoteBtn');
      if (btn) btn.classList.toggle('active', isLiked);
    });
  }
  detailsModal.classList.add('active'); isModalOpen = true;
  loadCommentsUI(idea.id);
}

async function loadCommentsUI(ideaId) {
  const commentsSection = document.getElementById('commentsSection');
  if (!commentsSection) return;
  const comments = await loadComments(ideaId);
  commentsSection.innerHTML = `
    <div class="comments-header">
      <i data-lucide="message-circle"></i>
      Комментарии (${comments.length})
    </div>
    <div class="comments-list" id="commentsList">
      ${comments.length ? comments.map(c => `
        <div class="comment-item">
          <img class="comment-avatar" src="${getCommentAvatar(c.user_name)}" alt="${c.user_name}">
          <div class="comment-body">
            <div class="comment-author">${c.user_name}</div>
            <div class="comment-text">${escapeHtml(c.text)}</div>
            <div class="comment-time">${new Date(c.created_at).toLocaleString('ru-RU')}</div>
          </div>
        </div>
      `).join('') : '<div class="comments-empty">Пока нет комментариев. Будьте первым!</div>'}
    </div>
    <div class="comment-input-bar">
      <input type="text" id="newCommentInput" placeholder="${currentUser ? 'Написать комментарий...' : 'Войдите, чтобы комментировать'}" ${currentUser ? '' : 'disabled'} />
      <button class="comment-send-btn" id="submitCommentBtn" ${currentUser ? '' : 'disabled'} aria-label="Отправить">
        <i data-lucide="send"></i>
      </button>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
  const input = document.getElementById('newCommentInput');
  const submitBtn = document.getElementById('submitCommentBtn');
  submitBtn?.addEventListener('click', async () => {
    const text = input.value.trim();
    if (text) {
      await submitCommentWithAnimation(ideaId, text, input);
    }
  });
  input?.addEventListener('keydown', (e) => { if (e.key === 'Enter') submitBtn?.click(); });
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

async function submitCommentWithAnimation(ideaId, text, inputEl) {
  const submitBtn = document.getElementById('submitCommentBtn');
  if (!submitBtn) return;
  submitBtn.disabled = true;
  inputEl.disabled = true;

  // Get input position
  const inputRect = inputEl.getBoundingClientRect();
  const commentsList = document.getElementById('commentsList');

  // Create ghost element for flying animation
  const ghost = document.createElement('div');
  ghost.className = 'comment-ghost';
  ghost.textContent = text.length > 50 ? text.slice(0, 50) + '...' : text;
  ghost.style.left = `${inputRect.left}px`;
  ghost.style.top = `${inputRect.top}px`;
  ghost.style.width = `${inputRect.width}px`;
  document.body.appendChild(ghost);

  // Clear input
  inputEl.value = '';

  // Animate ghost to comments list
  requestAnimationFrame(() => {
    const targetRect = commentsList.getBoundingClientRect();
    ghost.style.left = `${targetRect.left + 20}px`;
    ghost.style.top = `${targetRect.top}px`;
    ghost.style.width = `${targetRect.width - 40}px`;
  });

  // Insert comment into DB
  const result = await addComment(ideaId, text);

  // After animation, reload comments
  setTimeout(async () => {
    ghost.style.opacity = '0';
    setTimeout(() => ghost.remove(), 300);
    await loadCommentsUI(ideaId);
    // Mark the first (newest) comment with enter animation
    const newComment = document.querySelector('#commentsList .comment-item');
    if (newComment) {
      newComment.classList.add('comment-enter');
    }
  }, 600);

  submitBtn.disabled = false;
  inputEl.disabled = false;
}

function closeDetailsModal() { detailsModal.classList.remove('active'); isModalOpen = false; currentCardElement = null; }
detailsBackdrop?.addEventListener('click', closeDetailsModal);
detailsCloseBtn?.addEventListener('click', closeDetailsModal);

// =======================================================================
// СТАТЬИ
// =======================================================================
let articlesLoaded = false;

async function loadArticlesData() {
  if (articlesLoaded) return;
  try { const res = await fetch('/articles.json'); articles = await res.json(); }
  catch (error) { console.error('Не удалось загрузить articles.json:', error); articles = []; }
  articlesLoaded = true;
}

function renderArticleCard(article) {
  return `<div class="glass-card" data-article-id="${article.id}"><span class="card-badge">${article.category}</span><h3 class="card-title">${article.title}</h3><p class="card-desc">${article.description}</p><div class="card-meta"><span class="meta-item"><i data-lucide="user"></i> ${article.author}</span><span class="meta-item"><i data-lucide="clock"></i> ${article.readTime} мин</span></div></div>`;
}

async function renderArticles() {
  const articlesGrid = document.getElementById('articlesGrid');
  if (!articlesGrid) return;
  await loadArticlesData();
  articlesGrid.innerHTML = articles.length ? articles.map(renderArticleCard).join('') : '<p style="opacity:0.6;">Статьи не найдены</p>';
  if (window.lucide) lucide.createIcons();
  articlesGrid.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('click', () => {
      const article = articles.find(a => a.id === parseInt(card.dataset.articleId, 10));
      if (article) openArticleModal(article);
    });
  });
}

function openArticleModal(article) {
  recordView('articles');
  modalDynamicContent.innerHTML = `<span class="modal-badge">${article.category}</span><h2>${article.title}</h2><p style="opacity:0.6; margin: 0.5rem 0 1.5rem;">${article.author} · ${new Date(article.date).toLocaleDateString('ru-RU')} · ${article.readTime} мин чтения</p><div class="modal-blocks">${article.content}</div>`;
  detailsModal.classList.add('active'); isModalOpen = true;
}

// =======================================================================
// ПЛАВЮЩАЯ ПАНЕЛЬ ИЗБРАННОГО / АПВОУТОВ
// =======================================================================
const savedPanelTrigger = document.getElementById('savedPanelTrigger');
const savedPanelOverlay = document.getElementById('savedPanelOverlay');
const savedPanelBackdrop = document.getElementById('savedPanelBackdrop');
const savedPanelClose = document.getElementById('savedPanelClose');
const savedPanelTabs = document.querySelectorAll('.saved-panel-tab');
const savedPanelIndicator = document.getElementById('savedPanelIndicator');
const savedPanelContent = document.getElementById('savedPanelContent');
let savedPanelTab = 'favorites';
let lastSavedPanelX = 0;

function moveSavedPanelIndicator(tabEl) {
  if (!tabEl || !savedPanelIndicator) return;
  const isInitial = savedPanelIndicator.style.width === '0px' || !savedPanelIndicator.style.width;
  if (!isInitial) {
    const targetX = tabEl.offsetLeft;
    const direction = targetX > lastSavedPanelX ? 1 : -1;
    savedPanelIndicator.classList.add('is-moving');
    savedPanelIndicator.dataset.dir = direction > 0 ? '1' : '-1';
    savedPanelIndicator.style.width = `${tabEl.offsetWidth + 4}px`;
    savedPanelIndicator.style.transform = `translateX(${tabEl.offsetLeft - 2}px)`;
    clearTimeout(savedPanelIndicator.moveTimeout);
    savedPanelIndicator.moveTimeout = setTimeout(() => {
      savedPanelIndicator.style.width = `${tabEl.offsetWidth}px`;
      savedPanelIndicator.style.transform = `translateX(${tabEl.offsetLeft}px)`;
      savedPanelIndicator.classList.remove('is-moving');
      lastSavedPanelX = tabEl.offsetLeft;
    }, 180);
  } else {
    savedPanelIndicator.style.width = `${tabEl.offsetWidth}px`;
    savedPanelIndicator.style.transform = `translateX(${tabEl.offsetLeft}px)`;
    lastSavedPanelX = tabEl.offsetLeft;
  }
}

function switchSavedPanelTab(tabName) {
  savedPanelTab = tabName;
  savedPanelTabs.forEach(t => t.classList.toggle('active', t.dataset.savedTab === tabName));
  const active = Array.from(savedPanelTabs).find(t => t.dataset.savedTab === tabName);
  moveSavedPanelIndicator(active);
  renderSavedPanel();
}

async function renderSavedPanel() {
  if (!savedPanelContent) return;
  let ideaIds = [];
  let title = '';
  let emptyIcon = '';
  let emptyText = '';
  if (savedPanelTab === 'favorites') {
    ideaIds = favorites;
    title = 'Избранное';
    emptyIcon = 'bookmark';
    emptyText = 'Нет идей в избранном';
  } else {
    // Get liked idea IDs from likes table
    if (currentUser) {
      try {
        const { data } = await supabaseClient.from('likes').select('idea_id').eq('user_id', currentUser.id);
        ideaIds = (data || []).map(l => l.idea_id);
      } catch { ideaIds = Object.keys(likes).map(Number); }
    } else {
      ideaIds = Object.keys(likes).map(Number);
    }
    title = 'Апвоуты';
    emptyIcon = 'arrow-up';
    emptyText = 'Вы ещё не оценили ни одной идеи';
  }

  const items = ideaIds.map(id => ideas.find(i => i.id === id)).filter(Boolean);
  if (!items.length) {
    savedPanelContent.innerHTML = `<div class="saved-panel-empty"><i data-lucide="${emptyIcon}"></i><p>${emptyText}</p></div>`;
  } else {
    savedPanelContent.innerHTML = items.map(idea => `
      <div class="saved-item" data-id="${idea.id}">
        <div class="saved-item-body">
          <h4>${idea.name}</h4>
          <p>${idea.desc}</p>
        </div>
        <span class="saved-item-badge">${idea.category}</span>
      </div>
    `).join('');
  }
  if (window.lucide) lucide.createIcons();
  savedPanelContent.querySelectorAll('.saved-item').forEach(item => {
    item.addEventListener('click', () => {
      const idea = ideas.find(i => i.id === parseInt(item.dataset.id, 10));
      if (idea) {
        closeSavedPanel();
        openIdeaModal(idea, null);
      }
    });
  });
}

function openSavedPanel() {
  savedPanelOverlay.classList.add('active');
  renderSavedPanel();
  setTimeout(() => {
    const active = document.querySelector('.saved-panel-tab.active');
    if (active) moveSavedPanelIndicator(active);
  }, 50);
}
function closeSavedPanel() { savedPanelOverlay.classList.remove('active'); }

savedPanelTrigger?.addEventListener('click', openSavedPanel);
savedPanelBackdrop?.addEventListener('click', closeSavedPanel);
savedPanelClose?.addEventListener('click', closeSavedPanel);
savedPanelTabs.forEach(tab => tab.addEventListener('click', () => switchSavedPanelTab(tab.dataset.savedTab)));

// =======================================================================
// ПОДБОРКА — Selection page filters and search
// =======================================================================
const selectionFilters = { budget: 0, complexity: 'all', risk: 'all', rating: 0, upvotes: 0 };

document.querySelectorAll('.selection-capsule').forEach(capsule => {
  const filterKey = capsule.dataset.filter;
  capsule.querySelectorAll('.selection-option').forEach(opt => {
    opt.addEventListener('click', () => {
      capsule.querySelectorAll('.selection-option').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      const val = opt.dataset.value;
      selectionFilters[filterKey] = filterKey === 'budget' || filterKey === 'rating' || filterKey === 'upvotes' ? parseFloat(val) : val;
    });
  });
});

async function loadIdeasFromDB() {
  const { data, error } = await supabaseClient.from('ideas').select('*').order('id', { ascending: true });
  if (error) { console.warn('Could not load ideas from DB, using local data'); return ideas; }
  if (data && data.length) {
    const mapped = data.map(d => ({
      id: d.id, name: d.name, category: d.category, capital: d.capital,
      complexity: d.complexity, potential: d.potential, rating: parseFloat(d.rating),
      risk_level: d.risk_level || 'Средний', upvotes: d.upvotes || 0,
      desc: d.description, why: d.why, pros: d.pros, cons: d.cons,
      how: d.how_to_start, risks: d.risks
    }));
    mapped.forEach(dbIdea => {
      const local = ideas.find(i => i.id === dbIdea.id);
      if (local) Object.assign(local, dbIdea);
    });
    return mapped;
  }
  return ideas;
}

const selectionSearchBtn = document.getElementById('selectionSearchBtn');
const selectionResults = document.getElementById('selectionResults');

selectionSearchBtn?.addEventListener('click', async () => {
  const btn = selectionSearchBtn;
  btn.classList.add('loading');
  btn.disabled = true;
  try {
    const allIdeas = await loadIdeasFromDB();
    const results = allIdeas.filter(idea => {
      if (selectionFilters.budget > 0 && idea.capital > selectionFilters.budget) return false;
      if (selectionFilters.complexity !== 'all' && idea.complexity !== selectionFilters.complexity) return false;
      if (selectionFilters.risk !== 'all' && (idea.risk_level || 'Средний') !== selectionFilters.risk) return false;
      if (selectionFilters.rating > 0 && idea.rating < selectionFilters.rating) return false;
      if (selectionFilters.upvotes > 0 && (idea.upvotes || 0) < selectionFilters.upvotes) return false;
      return true;
    });
    renderSelectionResults(results);
  } finally {
    btn.classList.remove('loading');
    btn.disabled = false;
  }
});

function renderSelectionResults(results) {
  if (!selectionResults) return;
  if (!results.length) {
    selectionResults.innerHTML = '<div class="selection-empty">Ничего не найдено. Попробуйте изменить параметры.</div>';
    return;
  }
  selectionResults.innerHTML = results.map(idea => renderIdeaCard(idea, null)).join('');
  if (window.lucide) lucide.createIcons();
  selectionResults.querySelectorAll('[data-fav]').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); toggleFavSupabase(parseInt(btn.dataset.fav, 10)); });
  });
  selectionResults.querySelectorAll('[data-id]').forEach(card => {
    card.addEventListener('click', () => {
      const idea = ideas.find(i => i.id === parseInt(card.dataset.id, 10));
      if (idea) openIdeaModal(idea, card);
    });
  });
}

// =======================================================================
// ИНИЦИАЛИЗАЦИЯ
// =======================================================================
document.addEventListener('DOMContentLoaded', async () => {
  applyTheme(getCurrentTheme());
  await updateUserUI();
  await loadUserData();
  renderCards();
  const active = document.querySelector('.nav-tab.active') || navTabs[0];
  if (active) moveIndicator(active);
  if (window.lucide) lucide.createIcons();
  if (window.gsap) {
    gsap.from('.hero-title', { opacity: 0, y: 50, duration: 1, ease: 'power2.out' });
    gsap.from('.hero-subtitle', { opacity: 0, y: 30, duration: 1, delay: 0.2, ease: 'power2.out' });
  }
});
