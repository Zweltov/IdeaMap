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
let searchTerm = '';
let currentUser = null;
let currentIdeaComments = [];
let isModalOpen = false;
let currentCardElement = null;
let isRegisterMode = false;
let articles = [];

// ===== КРАСИВЫЕ УВЕДОМЛЕНИЯ (TOASTS) =====
function showNotification(message, type = 'success', duration = 3000) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  // Добавляем иконку в зависимости от типа
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

  // Плавное появление
  setTimeout(() => toast.classList.add('show'), 10);

  // Удаление по таймеру
  let timeout = setTimeout(() => closeToast(toast), duration);

  // Закрытие по крестику
  const closeBtn = toast.querySelector('.toast-close');
  closeBtn.onclick = () => {
      clearTimeout(timeout);
      closeToast(toast);
  };
}

function closeToast(toast) {
  toast.classList.remove('show');
  setTimeout(() => toast.remove(), 400); // ждем конец css транзиции
}

// Перевод ошибок Supabase
function translateError(msg) {
  const translations = {
    "Invalid login credentials": "Неверный логин или пароль",
    "Email not confirmed": "Подтвердите электронную почту",
    "User already registered": "Пользователь с таким email уже существует",
    "Password should be at least 6 characters": "Пароль должен быть не менее 6 символов"
  };
  return translations[msg] || msg;
}

// ===== ТРЕКИНГ ПРОСМОТРОВ =====
function recordView(type) {
  if (!currentUser) return;
  const key = `ideahub_views_${currentUser.id}`;
  let views = JSON.parse(localStorage.getItem(key)) || { ideas: 0, articles: 0 };
  views[type] = (views[type] || 0) + 1;
  localStorage.setItem(key, JSON.stringify(views));
}

// =======================================================================
// ВКЛАДКИ ВЕРХНЕЙ ПАНЕЛИ
// =======================================================================
const navTabs = document.querySelectorAll('.nav-tab');
const navIndicator = document.getElementById('navIndicator');
const tabContents = document.querySelectorAll('.tab-content');

function moveIndicator(tabEl) {
  if (!tabEl || !navIndicator) return;
  navIndicator.style.width = `${tabEl.offsetWidth}px`;
  navIndicator.style.transform = `translateX(${tabEl.offsetLeft}px)`;
}

function switchTab(tabName) {
  navTabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tabName));
  tabContents.forEach(c => {
    c.style.display = c.id === `${tabName}-tab` ? '' : 'none';
  });
  const activeTab = Array.from(navTabs).find(t => t.dataset.tab === tabName);
  moveIndicator(activeTab);

  if (tabName === 'articles') renderArticles();
  if (tabName === 'ideas') renderCards();
}

navTabs.forEach(tab => {
  tab.addEventListener('click', () => switchTab(tab.dataset.tab));
});

window.addEventListener('resize', () => {
  const active = document.querySelector('.nav-tab.active');
  if (active) moveIndicator(active);
});

// =======================================================================
// АВТОРИЗАЦИЯ И UI ПОЛЬЗОВАТЕЛЯ
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
const authEmailInput = document.getElementById('authEmail');
const authPasswordInput = document.getElementById('authPassword');
const submitAuthBtn = document.getElementById('submitAuthBtn');
const toggleAuthText = document.getElementById('toggleAuthText');
const toggleAuthLink = document.getElementById('toggleAuthLink');

function openAuthModal() {
  authErrorMsg.style.display = 'none'; // прячем ошибки при открытии
  authModal.style.display = 'flex';
}
function closeAuthModal() {
  authModal.style.display = 'none';
  authForm?.reset();
  authErrorMsg.style.display = 'none';
}

function setAuthMode(registerMode) {
  isRegisterMode = registerMode;
  authErrorMsg.style.display = 'none';
  if (registerMode) {
    modalTitle.textContent = 'Регистрация';
    modalSub.textContent = 'Создайте аккаунт, чтобы сохранять идеи и оставлять комментарии';
    nameFieldGroup.style.display = 'block';
    submitAuthBtn.textContent = 'Создать аккаунт';
    toggleAuthText.textContent = 'Уже есть аккаунт?';
    toggleAuthLink.textContent = 'Войти';
  } else {
    modalTitle.textContent = 'Вход в систему';
    modalSub.textContent = 'Введите данные для доступа к IdeaHub';
    nameFieldGroup.style.display = 'none';
    submitAuthBtn.textContent = 'Войти';
    toggleAuthText.textContent = 'Ещё нет аккаунта?';
    toggleAuthLink.textContent = 'Создать';
  }
}

function updateAuthButton() {
  if (currentUser) {
    authBtn.style.display = 'none';
    navAvatarBtn.style.display = 'block';
    const name = currentUser.user_metadata?.name || currentUser.email?.split('@')[0] || 'User';
    const avatarUrl = currentUser.user_metadata?.avatar || `https://ui-avatars.com/api/?name=${name}&background=00ffcc&color=0b0d10&bold=true`;
    navAvatarBtn.src = avatarUrl;
  } else {
    authBtn.style.display = 'block';
    navAvatarBtn.style.display = 'none';
  }
}

authBtn?.addEventListener('click', () => {
  setAuthMode(false);
  openAuthModal();
});

closeAuthBtn?.addEventListener('click', closeAuthModal);
authModal?.addEventListener('click', (e) => {
  if (e.target === authModal) closeAuthModal();
});
toggleAuthLink?.addEventListener('click', (e) => {
  e.preventDefault();
  setAuthMode(!isRegisterMode);
});

authForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  authErrorMsg.style.display = 'none'; // сброс ошибки перед запросом
  const email = authEmailInput.value;
  const password = authPasswordInput.value;

  if (isRegisterMode) {
    const name = authNameInput.value;
    const result = await signUp(email, password, name);
    if (result) closeAuthModal();
  } else {
    const result = await signIn(email, password);
    if (result) closeAuthModal();
  }
});

async function signUp(email, password, name) {
  try {
    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: { data: { name } }
    });
    if (error) throw error;
    showNotification('Аккаунт создан! Проверьте почту для подтверждения.');
    return data;
  } catch (error) {
    authErrorMsg.textContent = translateError(error.message);
    authErrorMsg.style.display = 'block';
    return null;
  }
}

async function signIn(email, password) {
  try {
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) throw error;
    showNotification('Добро пожаловать!');
    await updateUserUI();
    renderCards();
    return data;
  } catch (error) {
    authErrorMsg.textContent = translateError(error.message);
    authErrorMsg.style.display = 'block';
    return null;
  }
}

async function signOut() {
  try {
    const { error } = await supabaseClient.auth.signOut();
    if (error) throw error;
    currentUser = null;
    await updateUserUI();
    renderCards();
    showNotification('Вы вышли из аккаунта');
  } catch (error) {
    showNotification(translateError(error.message), 'error');
  }
}

async function updateUserUI() {
  const { data: { user } } = await supabaseClient.auth.getUser();
  currentUser = user;
  updateAuthButton();
}

// =======================================================================
// ПРОФИЛЬ (ОКНО И CROP АВАТАРКИ)
// =======================================================================
const userProfileModal = document.getElementById('userProfileModal');
const profileLogoutBtn = document.getElementById('profileLogoutBtn');
const accSwitchBtn = document.getElementById('accSwitchBtn');
const accSwitchMenu = document.getElementById('accSwitchMenu');
const accSwitchIcon = document.getElementById('accSwitchIcon');

async function loadProfileStats() {
  if (!currentUser) return;
  
  const created = new Date(currentUser.created_at);
  const diffTime = Math.abs(Date.now() - created);
  const diffDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  document.getElementById('statAge').textContent = `${diffDays} дн.`;

  const viewsKey = `ideahub_views_${currentUser.id}`;
  const views = JSON.parse(localStorage.getItem(viewsKey)) || { ideas: 0, articles: 0 };
  document.getElementById('statIdeas').textContent = views.ideas;
  document.getElementById('statArticles').textContent = views.articles;

  try {
    const { count: upvotesCount } = await supabaseClient
      .from('likes')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', currentUser.id);
    
    const { count: commentsCount } = await supabaseClient
      .from('comments')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', currentUser.id);

    document.getElementById('statUpvotes').textContent = upvotesCount || 0;
    document.getElementById('statComments').textContent = commentsCount || 0;
  } catch (err) {
    console.error("Ошибка загрузки статистики БД:", err);
  }
}

navAvatarBtn?.addEventListener('click', () => {
  const name = currentUser.user_metadata?.name || currentUser.email?.split('@')[0] || 'Пользователь';
  const avatarUrl = currentUser.user_metadata?.avatar || `https://ui-avatars.com/api/?name=${name}&background=00ffcc&color=0b0d10&bold=true`;
  
  document.getElementById('profileModalName').textContent = name;
  document.getElementById('profileModalEmail').textContent = currentUser.email;
  document.getElementById('profileModalAvatar').src = avatarUrl;

  // Показываем окно сразу (без задержки)
  userProfileModal.classList.add('active');
  if (window.lucide) lucide.createIcons();

  // Асинхронно грузим стату
  loadProfileStats();
});

document.getElementById('userProfileClose')?.addEventListener('click', () => {
  userProfileModal.classList.remove('active');
  accSwitchMenu?.classList.remove('expanded');
  accSwitchIcon.style.transform = 'rotate(0deg)';
});
document.getElementById('userProfileBackdrop')?.addEventListener('click', () => {
  userProfileModal.classList.remove('active');
  accSwitchMenu?.classList.remove('expanded');
  accSwitchIcon.style.transform = 'rotate(0deg)';
});

// Inline раскрытие мультиаккаунтов
accSwitchBtn?.addEventListener('click', () => {
  const isExpanded = accSwitchMenu.classList.contains('expanded');
  if (isExpanded) {
    accSwitchMenu.classList.remove('expanded');
    accSwitchIcon.style.transform = 'rotate(0deg)';
  } else {
    accSwitchMenu.classList.add('expanded');
    accSwitchIcon.style.transform = 'rotate(180deg)';
  }
});

profileLogoutBtn?.addEventListener('click', () => {
  userProfileModal.classList.remove('active');
  signOut();
});

// -- Логика обрезки фото --
const cropModal = document.getElementById('cropModal');
const avatarUpload = document.getElementById('avatarUpload');
const cropCanvas = document.getElementById('cropCanvas');
const ctx = cropCanvas?.getContext('2d');
const applyCropBtn = document.getElementById('applyCropBtn');
const cropZoom = document.getElementById('cropZoom');
let currentUploadImage = null;

// Переменные для перетаскивания (смещения фото)
let cropOffsetX = 0;
let cropOffsetY = 0;
let isDraggingCrop = false;
let startDragX = 0;
let startDragY = 0;

document.getElementById('changeAvatarBtn')?.addEventListener('click', () => {
  avatarUpload.click();
});

avatarUpload?.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      currentUploadImage = new Image();
      currentUploadImage.onload = () => {
        cropZoom.value = 1; 
        cropOffsetX = 0; // Сброс смещения
        cropOffsetY = 0;
        cropModal.classList.add('active');
        drawCrop();
      };
      currentUploadImage.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Обработчики таскания (drag)
function handleDragStart(x, y) {
  isDraggingCrop = true;
  startDragX = x - cropOffsetX;
  startDragY = y - cropOffsetY;
}
function handleDragMove(x, y) {
  if (!isDraggingCrop) return;
  cropOffsetX = x - startDragX;
  cropOffsetY = y - startDragY;
  drawCrop();
}
function handleDragEnd() {
  isDraggingCrop = false;
}

// Мышь
cropCanvas?.addEventListener('mousedown', (e) => handleDragStart(e.clientX, e.clientY));
cropCanvas?.addEventListener('mousemove', (e) => handleDragMove(e.clientX, e.clientY));
window.addEventListener('mouseup', handleDragEnd);

// Тачи (телефоны)
cropCanvas?.addEventListener('touchstart', (e) => handleDragStart(e.touches[0].clientX, e.touches[0].clientY));
cropCanvas?.addEventListener('touchmove', (e) => {
  e.preventDefault(); // запрещаем скролл страницы при таскании фото
  handleDragMove(e.touches[0].clientX, e.touches[0].clientY);
});
window.addEventListener('touchend', handleDragEnd);


function drawCrop() {
  if (!currentUploadImage || !ctx) return;
  const zoom = parseFloat(cropZoom.value);
  const size = 300; 
  cropCanvas.width = size;
  cropCanvas.height = size;
  
  const scaledWidth = currentUploadImage.width * zoom;
  const scaledHeight = currentUploadImage.height * zoom;
  
  // Учитываем смещение cropOffsetX/Y
  const dx = (size - scaledWidth) / 2 + cropOffsetX;
  const dy = (size - scaledHeight) / 2 + cropOffsetY;

  ctx.clearRect(0,0, size, size);
  ctx.drawImage(currentUploadImage, 0, 0, currentUploadImage.width, currentUploadImage.height, dx, dy, scaledWidth, scaledHeight);
}

cropZoom?.addEventListener('input', drawCrop);

document.getElementById('cancelCropBtn')?.addEventListener('click', () => {
  cropModal.classList.remove('active');
  avatarUpload.value = '';
});

applyCropBtn?.addEventListener('click', async () => {
  if (!currentUser) return;
  
  const base64Avatar = cropCanvas.toDataURL('image/jpeg', 0.8);
  applyCropBtn.textContent = 'Сохранение...';
  
  try {
    const { data, error } = await supabaseClient.auth.updateUser({
      data: { avatar: base64Avatar }
    });
    if (error) throw error;
    
    showNotification("Аватар успешно обновлён!");
    currentUser = data.user;
    updateAuthButton();
    document.getElementById('profileModalAvatar').src = base64Avatar;
    cropModal.classList.remove('active');
  } catch (err) {
    showNotification("Ошибка обновления аватара", "error");
  } finally {
    applyCropBtn.textContent = 'Применить';
    avatarUpload.value = '';
  }
});


// =======================================================================
// КОММЕНТАРИИ
// =======================================================================
async function loadComments(ideaId) {
  try {
    const { data, error } = await supabaseClient
      .from('comments')
      .select('*')
      .eq('idea_id', ideaId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    currentIdeaComments = data || [];
    return currentIdeaComments;
  } catch (error) {
    console.error('Ошибка загрузки комментариев:', error);
    return [];
  }
}

async function addComment(ideaId, text) {
  if (!currentUser) {
    showNotification('Войдите, чтобы оставить комментарий', 'error');
    return null;
  }
  try {
    const { data, error } = await supabaseClient
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
    return data;
  } catch (error) {
    showNotification(translateError(error.message), 'error');
    return null;
  }
}

// =======================================================================
// АПВОУТЫ И ИЗБРАННОЕ (Supabase)
// =======================================================================
async function toggleLikeSupabase(ideaId) {
  if (!currentUser) {
    showNotification('Войдите, чтобы оценить идею', 'error');
    return false;
  }
  try {
    const { data: existing } = await supabaseClient
      .from('likes')
      .select('*')
      .eq('idea_id', ideaId)
      .eq('user_id', currentUser.id)
      .single();

    if (existing) {
      await supabaseClient.from('likes').delete().eq('idea_id', ideaId).eq('user_id', currentUser.id);
      likes[ideaId] = (likes[ideaId] || 1) - 1;
      if (likes[ideaId] <= 0) delete likes[ideaId];
    } else {
      await supabaseClient.from('likes').insert({ idea_id: ideaId, user_id: currentUser.id });
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

async function toggleFavSupabase(ideaId) {
  if (!currentUser) {
    showNotification('Войдите, чтобы добавить в избранное', 'error');
    return false;
  }
  try {
    const { data: existing } = await supabaseClient
      .from('favorites')
      .select('*')
      .eq('idea_id', ideaId)
      .eq('user_id', currentUser.id)
      .single();

    if (existing) {
      await supabaseClient.from('favorites').delete().eq('idea_id', ideaId).eq('user_id', currentUser.id);
      favorites = favorites.filter(id => id !== ideaId);
    } else {
      await supabaseClient.from('favorites').insert({ idea_id: ideaId, user_id: currentUser.id });
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

async function loadUserData() {
  try {
    if (!currentUser) return;
    const { data: favData } = await supabaseClient
      .from('favorites').select('idea_id').eq('user_id', currentUser.id);
    if (favData) {
      favorites = favData.map(f => f.idea_id);
      localStorage.setItem('ideahub_favs', JSON.stringify(favorites));
    }

    const { data: likeData } = await supabaseClient
      .from('likes').select('idea_id').eq('user_id', currentUser.id);
    if (likeData) {
      const newLikes = {};
      likeData.forEach(l => { newLikes[l.idea_id] = (newLikes[l.idea_id] || 0) + 1; });
      likes = { ...likes, ...newLikes };
      localStorage.setItem('ideahub_likes', JSON.stringify(likes));
    }
  } catch (error) {
    console.error('Ошибка загрузки данных:', error);
  }
}

// =======================================================================
// КАТАЛОГ ИДЕЙ: ПОИСК, ФИЛЬТРЫ, КАРТОЧКИ
// =======================================================================
const cardsGrid = document.getElementById('cardsGrid');
const ideasSearchInput = document.getElementById('ideasSearch');
const searchClearBtn = document.getElementById('searchClear');
const filterToggleBtn = document.getElementById('filterToggleBtn');
const filterPanel = document.getElementById('filterPanel');
const categoryFilters = document.getElementById('categoryFilters');
let filterPanelOpen = false;

function renderIdeaCard(idea) {
  const isFav = favorites.includes(idea.id);
  const likeCount = likes[idea.id] || 0;
  return `
    <div class="glass-card" data-id="${idea.id}">
      <span class="card-badge">${idea.category}</span>
      <button class="card-favorite ${isFav ? 'active' : ''}" data-fav="${idea.id}" aria-label="В избранное">
        <i data-lucide="arrow-up"></i>
      </button>
      <h3 class="card-title">${idea.name}</h3>
      <p class="card-desc">${idea.desc}</p>
      <div class="card-meta">
        <span class="meta-item"><i data-lucide="wallet"></i> от ${idea.capital.toLocaleString('ru-RU')} ₽</span>
        <span class="meta-item"><i data-lucide="star"></i> ${idea.rating.toFixed(1)}</span>
        <span class="meta-item"><i data-lucide="arrow-up"></i> ${likeCount}</span>
      </div>
    </div>`;
}

function renderCards() {
  if (!cardsGrid) return;
  const filtered = ideas.filter(idea => {
    const matchesCategory = currentCategory === 'all' || idea.category === currentCategory;
    const matchesSearch = idea.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      idea.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  cardsGrid.innerHTML = filtered.length
    ? filtered.map(renderIdeaCard).join('')
    : '<p style="opacity:0.6;">Ничего не найдено</p>';

  if (window.lucide) lucide.createIcons();

  cardsGrid.querySelectorAll('.card-favorite').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavSupabase(parseInt(btn.dataset.fav, 10));
    });
  });
  cardsGrid.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('click', () => {
      const idea = ideas.find(i => i.id === parseInt(card.dataset.id, 10));
      if (idea) openIdeaModal(idea, card);
    });
  });
}

ideasSearchInput?.addEventListener('input', (e) => {
  searchTerm = e.target.value;
  if (searchClearBtn) searchClearBtn.style.display = searchTerm ? 'flex' : 'none';
  renderCards();
});

searchClearBtn?.addEventListener('click', () => {
  searchTerm = '';
  if (ideasSearchInput) ideasSearchInput.value = '';
  searchClearBtn.style.display = 'none';
  renderCards();
});

filterToggleBtn?.addEventListener('click', () => {
  filterPanelOpen = !filterPanelOpen;
  if (!filterPanel) return;
  if (filterPanelOpen) {
    filterPanel.style.display = 'block';
    requestAnimationFrame(() => {
      filterPanel.style.height = 'auto';
      filterPanel.style.opacity = '1';
    });
  } else {
    filterPanel.style.opacity = '0';
    filterPanel.style.height = '0';
    setTimeout(() => { filterPanel.style.display = 'none'; }, 300);
  }
});

categoryFilters?.querySelectorAll('.filter-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    categoryFilters.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    currentCategory = pill.dataset.category;
    renderCards();
  });
});

// =======================================================================
// МОДАЛЬНОЕ ОКНО ДЕТАЛЕЙ ИДЕИ (#detailsModal)
// =======================================================================
const detailsModal = document.getElementById('detailsModal');
const detailsBackdrop = document.getElementById('detailsBackdrop');
const detailsCloseBtn = document.getElementById('detailsCloseBtn');
const modalDynamicContent = document.getElementById('modalDynamicContent');

function openIdeaModal(idea, cardEl) {
  recordView('ideas'); 
  
  currentCardElement = cardEl;
  const isFav = favorites.includes(idea.id);

  modalDynamicContent.innerHTML = `
    <span class="modal-badge">${idea.category}</span>
    <h2>${idea.name}</h2>
    <div class="modal-grid-info">
      <div><strong>Капитал:</strong> от ${idea.capital.toLocaleString('ru-RU')} ₽</div>
      <div><strong>Сложность:</strong> ${idea.complexity}</div>
      <div><strong>Потенциал:</strong> ${idea.potential}</div>
      <div><strong>Рейтинг:</strong> ${idea.rating.toFixed(1)} ★</div>
    </div>
    <div class="modal-blocks">
      <h3><i data-lucide="file-text"></i> Описание</h3><p>${idea.desc}</p>
      <h3><i data-lucide="lightbulb"></i> Почему это работает</h3><p>${idea.why}</p>
      <h3><i data-lucide="thumbs-up"></i> Плюсы</h3><p>${idea.pros}</p>
      <h3><i data-lucide="thumbs-down"></i> Минусы</h3><p>${idea.cons}</p>
      <h3><i data-lucide="rocket"></i> Как начать</h3><p>${idea.how}</p>
      <h3><i data-lucide="alert-triangle"></i> Риски</h3><p>${idea.risks}</p>
    </div>
    <button class="btn-glow" id="favToggleBtn" style="margin-top:1rem;">${isFav ? 'В избранном' : 'Добавить в избранное'}</button>
    <div class="comments-section" id="commentsSection">Загрузка комментариев...</div>
  `;

  if (window.lucide) lucide.createIcons();

  document.getElementById('favToggleBtn')?.addEventListener('click', async () => {
    await toggleFavSupabase(idea.id);
    openIdeaModal(idea, currentCardElement);
  });

  detailsModal.classList.add('active');
  isModalOpen = true;
  loadCommentsUI(idea.id);
}

async function loadCommentsUI(ideaId) {
  const commentsSection = document.getElementById('commentsSection');
  if (!commentsSection) return;
  const comments = await loadComments(ideaId);

  commentsSection.innerHTML = `
    <h3>Комментарии (${comments.length})</h3>
    ${comments.length ? comments.map(c => `
      <div class="comment-item">
        <div class="comment-author">${c.user_name}</div>
        <div class="comment-text">${c.text}</div>
        <div class="comment-time">${new Date(c.created_at).toLocaleString('ru-RU')}</div>
      </div>`).join('') : '<p style="opacity:0.6;">Пока нет комментариев</p>'}
    <div class="comment-input-group">
      <input type="text" id="newCommentInput" placeholder="${currentUser ? 'Написать комментарий...' : 'Войдите, чтобы комментировать'}" ${currentUser ? '' : 'disabled'} />
      <button id="submitCommentBtn" ${currentUser ? '' : 'disabled'}>Отправить</button>
    </div>
  `;

  const input = document.getElementById('newCommentInput');
  const submitBtn = document.getElementById('submitCommentBtn');

  submitBtn?.addEventListener('click', async () => {
    const text = input.value.trim();
    if (text) {
      await addComment(ideaId, text);
      input.value = '';
      loadCommentsUI(ideaId);
    }
  });
  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submitBtn?.click();
  });
}

function closeDetailsModal() {
  detailsModal.classList.remove('active');
  isModalOpen = false;
  currentCardElement = null;
}

detailsBackdrop?.addEventListener('click', closeDetailsModal);
detailsCloseBtn?.addEventListener('click', closeDetailsModal);

// =======================================================================
// ВКЛАДКА "СТАТЬИ"
// =======================================================================
let articlesLoaded = false;

async function loadArticlesData() {
  if (articlesLoaded) return;
  try {
    const res = await fetch('articles.json');
    articles = await res.json();
  } catch (error) {
    console.error('Не удалось загрузить articles.json:', error);
    articles = [];
  }
  articlesLoaded = true;
}

function renderArticleCard(article) {
  return `
    <div class="glass-card" data-article-id="${article.id}">
      <span class="card-badge">${article.category}</span>
      <h3 class="card-title">${article.title}</h3>
      <p class="card-desc">${article.description}</p>
      <div class="card-meta">
        <span class="meta-item"><i data-lucide="user"></i> ${article.author}</span>
        <span class="meta-item"><i data-lucide="clock"></i> ${article.readTime} мин</span>
      </div>
    </div>`;
}

async function renderArticles() {
  const articlesGrid = document.getElementById('articlesGrid');
  if (!articlesGrid) return;

  await loadArticlesData();

  articlesGrid.innerHTML = articles.length
    ? articles.map(renderArticleCard).join('')
    : '<p style="opacity:0.6;">Статьи не найдены</p>';

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
  
  modalDynamicContent.innerHTML = `
    <span class="modal-badge">${article.category}</span>
    <h2>${article.title}</h2>
    <p style="opacity:0.6; margin: 0.5rem 0 1.5rem;">${article.author} · ${new Date(article.date).toLocaleDateString('ru-RU')} · ${article.readTime} мин чтения</p>
    <div class="modal-blocks">${article.content}</div>
  `;
  detailsModal.classList.add('active');
  isModalOpen = true;
}

// =======================================================================
// ИНИЦИАЛИЗАЦИЯ
// =======================================================================
document.addEventListener('DOMContentLoaded', async () => {
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