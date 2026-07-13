// ===== ДАННЫЕ ИДEЙ =====
const ideas = [
  { id: 1, name: "AI-помощник для бизнеса", category: "IT", capital: 25000, complexity: "Средняя", potential: "Высокий", rating: 4.8, desc: "Чат-боты и аналитика для малого бизнеса.", why: "Автоматизация продаж.", pros: "Быстрая окупаемость.", cons: "Конкуренция.", how: "Соберите MVP за 3 мес.", risks: "Технические сбои." },
  { id: 2, name: "Доставка здоровой еды", category: "Еда", capital: 18000, complexity: "Средняя", potential: "Средний", rating: 4.2, desc: "Готовые рационы для офисов.", why: "Рост ЗОЖ.", pros: "Постоянные клиенты.", cons: "Логистика.", how: "Начните с кухни.", risks: "Срок годности." },
  { id: 3, name: "Клининг 2.0", category: "Услуги", capital: 8000, complexity: "Низкая", potential: "Высокий", rating: 4.5, desc: "Уборка с эко-средствами.", why: "Спрос на чистоту.", pros: "Низкий порог.", cons: "Много ручного труда.", how: "Закупите инвентарь.", risks: "Травмы." },
  { id: 4, name: "Коворкинг для фрилансеров", category: "Недвижимость", capital: 85000, complexity: "Высокая", potential: "Средний", rating: 4.0, desc: "Тихое место с быстрым интернетом и кофе.", why: "Удаленная работа.", pros: "Пассивный доход.", cons: "Аренда.", how: "Найдите помещение.", risks: "Пустующие места." },
  { id: 5, name: "Онлайн-школа кодинга", category: "IT", capital: 12000, complexity: "Средняя", potential: "Высокий", rating: 4.7, desc: "Курсы для детей от 10 лет.", why: "Популярность IT.", pros: "Без границ продажи.", cons: "Сложно удержать внимание.", how: "Запишите тестовый урок.", risks: "Смена трендов." },
  { id: 6, name: "Эко-упаковка из грибов", category: "Производство", capital: 45000, complexity: "Высокая", potential: "Высокий", rating: 4.6, desc: "Биоразлагаемая замена пластику.", why: "Забота об экологии.", pros: "Уникальный продукт.", cons: "Долгое производство.", how: "Купите мицелий.", risks: "Сырьевой кризис." },
  { id: 7, name: "Кофейня самообслуживания", category: "Еда", capital: 5000, complexity: "Низкая", potential: "Средний", rating: 4.3, desc: "Автоматы в бизнес-центрах.", why: "Любовь к кофе.", pros: "Без сотрудников.", cons: "Вандализм.", how: "Купите стойку кофе.", risks: "Плохая локация." },
  { id: 8, name: "Агентство кибербезопасности", category: "IT", capital: 30000, complexity: "Высокая", potential: "Высокий", rating: 4.9, desc: "Аудит защиты сайтов и серверов.", why: "Частые хакерские атаки.", pros: "Высокий чек.", cons: "Нужны топ-профи.", how: "Проведите бесплатный аудит.", risks: "Пропуск уязвимости." },
  { id: 9, name: "Дропшиппинг гаджетов", category: "Онлайн-бизнес", capital: 3000, complexity: "Низкая", potential: "Средний", rating: 4.1, desc: "Продажи трендовых товаров без склада.", why: "Легкий старт.", pros: "Минимум вложений.", cons: "Долгая доставка.", how: "Создайте одностраничник.", risks: "Брак товара." },
  { id: 10, name: "Студия 3D-печати деталей", category: "Производство", capital: 15000, complexity: "Средняя", potential: "Средний", rating: 4.4, desc: "Печать редких автозапчастей и сувениров.", why: "Импортозамещение.", pros: "Широкая ниша.", cons: "Дорогой пластик.", how: "Купите 3D-принтер.", risks: "Поломка принтера." },
  { id: 11, name: "Фитнес-приложение с AI", category: "IT", capital: 40000, complexity: "Высокая", potential: "Высокий", rating: 4.6, desc: "Генерация тренировок по камере телефона.", why: "Домашний фитнес.", pros: "Масштабируемость.", cons: "Дорогой маркетинг.", how: "Разработайте прототип.", risks: "Отказ от подписок." },
  { id: 12, name: "Агентство по продвижению в соцсетях", category: "Онлайн-бизнес", capital: 5000, complexity: "Низкая", potential: "Высокий", rating: 4.4, desc: "SMM для локального малого бизнеса.", why: "Рост соцсетей.", pros: "Низкий старт.", cons: "Высокая конкуренция.", how: "Создайте портфолио для первого клиента.", risks: "Изменения алгоритмов умных лент." }
];

let articles = [];
let savedIdeas = JSON.parse(localStorage.getItem('savedIdeas')) || [];

document.addEventListener('DOMContentLoaded', () => {
  initSPA();
  renderIdeas(ideas);
  fetchArticles();
  initModals();
  initFilters();
  updateSavedCount();
  if (typeof lucide !== 'undefined') lucide.createIcons();
});

// ===== ЛОГИКА БЕСШОВНОГО SPA (УБРАНЫ РЕДИРЕКТЫ) =====
function initSPA() {
  const tabs = document.querySelectorAll('.nav-tab');
  const indicator = document.getElementById('navIndicator');

  function updateIndicator(activeTabEl) {
    if (!activeTabEl) return;
    const rect = activeTabEl.getBoundingClientRect();
    const parentRect = activeTabEl.parentElement.getBoundingClientRect();
    const left = rect.left - parentRect.left;
    
    gsap.to(indicator, {
      x: left,
      width: rect.width,
      duration: 0.4,
      ease: "power3.out"
    });
  }

  // Первичная посадка индикатора
  setTimeout(() => {
    const currentActive = document.querySelector('.nav-tab.active');
    updateIndicator(currentActive);
  }, 100);

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const clickedTab = e.currentTarget;
      tabs.forEach(t => t.classList.remove('active'));
      clickedTab.classList.add('active');
      updateIndicator(clickedTab);

      const targetTabId = clickedTab.getAttribute('data-tab');
      switchTab(targetTabId);
    });
  });

  window.addEventListener('resize', () => {
    updateIndicator(document.querySelector('.nav-tab.active'));
  });
}

function switchTab(tabId) {
  const allTabsContent = document.querySelectorAll('.tab-content');
  const targetContent = document.getElementById(`${tabId}-tab`);

  allTabsContent.forEach(content => {
    if (content.classList.contains('active-tab')) {
      gsap.to(content, {
        opacity: 0, y: 15, duration: 0.2, onComplete: () => {
          content.style.display = 'none';
          content.classList.remove('active-tab');
          
          // Включаем целевой таб
          targetContent.style.display = 'block';
          gsap.fromTo(targetContent, { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.3 });
          targetContent.classList.add('active-tab');
        }
      });
    }
  });
}

// ===== РЕНДЕРИНГ БИЗНЕС-ИДEЙ =====
function renderIdeas(data) {
  const grid = document.getElementById('cardsGrid');
  grid.innerHTML = '';

  if(data.length === 0) {
    grid.innerHTML = `<p class="no-results">Ничего не найдено</p>`;
    return;
  }

  data.forEach(idea => {
    const isSaved = savedIdeas.includes(idea.id);
    const card = document.createElement('div');
    card.className = 'glass-card card-animate';
    card.innerHTML = `
      <div class="card-badge">${idea.category}</div>
      <button class="card-favorite ${isSaved ? 'active' : ''}" data-id="${idea.id}">
        <i data-lucide="bookmark"></i>
      </button>
      <h3 class="card-title">${idea.name}</h3>
      <p class="card-desc">${idea.desc}</p>
      <div class="card-meta">
        <div class="meta-item"><i data-lucide="wallet"></i> <span>${idea.capital.toLocaleString()} ₽</span></div>
        <div class="meta-item"><i data-lucide="bar-chart-2"></i> <span>${idea.complexity}</span></div>
      </div>
    `;

    // Клик на карточку открывает модалку
    card.addEventListener('click', (e) => {
      if (e.target.closest('.card-favorite')) return; // Игнорируем клик по закладке
      openDetailsModal('idea', idea);
    });

    // Обработка закладки
    card.querySelector('.card-favorite').addEventListener('click', (e) => {
      toggleSaveIdea(idea.id, e.currentTarget);
    });

    grid.appendChild(card);
  });
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ===== ПОЛУЧЕНИЕ И РЕНДЕРИНГ СТАТЕЙ ИЗ JSON =====
async function fetchArticles() {
  try {
    const response = await fetch('articles.json');
    articles = await response.json();
    renderArticles(articles);
  } catch (error) {
    console.error("Ошибка загрузки статей:", error);
    document.getElementById('articlesGrid').innerHTML = '<p>Не удалось загрузить статьи.</p>';
  }
}

function renderArticles(data) {
  const grid = document.getElementById('articlesGrid');
  grid.innerHTML = '';

  data.forEach(article => {
    const card = document.createElement('div');
    card.className = 'glass-card card-animate';
    card.innerHTML = `
      <div class="card-badge">${article.category}</div>
      <h3 class="card-title">${article.title}</h3>
      <p class="card-desc">${article.description}</p>
      <div class="card-meta">
        <div class="meta-item"><i data-lucide="clock"></i> <span>${article.readTime} мин</span></div>
        <div class="meta-item"><i data-lucide="eye"></i> <span>${article.views}</span></div>
      </div>
    `;
    card.addEventListener('click', () => openDetailsModal('article', article));
    grid.appendChild(card);
  });
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ===== ДИНАМИЧЕСКИЕ МОДАЛЬНЫЕ ОКНА =====
function initModals() {
  const detailsModal = document.getElementById('detailsModal');
  const loginModal = document.getElementById('loginModal');

  document.getElementById('loginBtn').addEventListener('click', () => {
    loginModal.classList.add('active');
  });

  document.getElementById('loginCloseBtn').addEventListener('click', () => loginModal.classList.remove('active'));
  document.getElementById('detailsCloseBtn').addEventListener('click', () => detailsModal.classList.remove('active'));
  document.getElementById('detailsBackdrop').addEventListener('click', () => detailsModal.classList.remove('active'));
  document.getElementById('loginBackdrop').addEventListener('click', () => loginModal.classList.remove('active'));
}

function openDetailsModal(type, data) {
  const modal = document.getElementById('detailsModal');
  const container = document.getElementById('modalDynamicContent');
  container.innerHTML = '';

  if (type === 'idea') {
    container.innerHTML = `
      <span class="modal-badge">${data.category}</span>
      <h2 class="modal-title">${data.name}</h2>
      <p class="modal-main-desc">${data.desc}</p>
      <div class="modal-grid-info">
        <div><strong>Капитал:</strong> ${data.capital.toLocaleString()} ₽</div>
        <div><strong>Сложность:</strong> ${data.complexity}</div>
        <div><strong>Потенциал:</strong> ${data.potential}</div>
        <div><strong>Рейтинг:</strong> ⭐ ${data.rating}</div>
      </div>
      <div class="modal-blocks">
        <h3><i data-lucide="trending-up"></i> Почему сейчас?</h3><p>${data.why}</p>
        <h3><i data-lucide="check-circle"></i> Плюсы</h3><p>${data.pros}</p>
        <h3><i data-lucide="alert-triangle"></i> Минусы</h3><p>${data.cons}</p>
        <h3><i data-lucide="play"></i> С чего начать</h3><p>${data.how}</p>
        <h3><i data-lucide="shield-alert"></i> Риски</h3><p>${data.risks}</p>
      </div>
    `;
  } else if (type === 'article') {
    container.innerHTML = `
      <span class="modal-badge">${data.category}</span>
      <h2 class="modal-title">${data.title}</h2>
      <div class="article-meta-info">Автор: ${data.author} | Дата: ${data.date}</div>
      <hr style="border-color:rgba(255,255,255,0.1); margin:1rem 0;">
      <div class="article-rich-content">${data.content}</div>
    `;
  }

  modal.classList.add('active');
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ===== ИЗБРАННОЕ И ТЕМЫ =====
function toggleSaveIdea(id, btn) {
  if (savedIdeas.includes(id)) {
    savedIdeas = savedIdeas.filter(item => item !== id);
    btn.classList.remove('active');
  } else {
    savedIdeas.push(id);
    btn.classList.add('active');
  }
  localStorage.setItem('savedIdeas', JSON.stringify(savedIdeas));
  updateSavedCount();
}

function updateSavedCount() {
  document.getElementById('savedCount').textContent = savedIdeas.length;
}

// ===== ПОИСК И ФИЛЬТРЫ =====
function initFilters() {
  const searchInput = document.getElementById('ideasSearch');
  const clearBtn = document.getElementById('searchClear');
  const filterToggle = document.getElementById('filterToggleBtn');
  const filterPanel = document.getElementById('filterPanel');

  searchInput.addEventListener('input', function() {
    clearBtn.style.display = this.value ? 'flex' : 'none';
    filterAndRender();
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.style.display = 'none';
    filterAndRender();
  });

  filterToggle.addEventListener('click', () => {
    const isHidden = filterPanel.style.display === 'none';
    if (isHidden) {
      filterPanel.style.display = 'block';
      gsap.fromTo(filterPanel, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.3 });
    } else {
      gsap.to(filterPanel, { height: 0, opacity: 0, duration: 0.3, onComplete: () => filterPanel.style.display = 'none' });
    }
  });

  document.querySelectorAll('#categoryFilters .filter-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      document.querySelectorAll('#categoryFilters .filter-pill').forEach(p => p.classList.remove('active'));
      e.currentTarget.classList.add('active');
      filterAndRender();
    });
  });
}

function filterAndRender() {
  const query = document.getElementById('ideasSearch').value.toLowerCase();
  const activeCategory = document.querySelector('#categoryFilters .filter-pill.active').getAttribute('data-category');

  const filtered = ideas.filter(idea => {
    const matchesSearch = idea.name.toLowerCase().includes(query) || idea.desc.toLowerCase().includes(query);
    const matchesCategory = activeCategory === 'all' || idea.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  renderIdeas(filtered);
}

// Переключатель ночной темы
document.getElementById('themeToggleBtn').addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  const isLight = document.body.classList.contains('light-theme');
  document.getElementById('themeToggleBtn').innerHTML = isLight ? `<i data-lucide="sun"></i>` : `<i data-lucide="moon"></i>`;
  if (typeof lucide !== 'undefined') lucide.createIcons();
});