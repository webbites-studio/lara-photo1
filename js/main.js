/* ==========================================================================
   LARA NIKOLAU — site behavior
   Navigation, scroll reveals, portfolio filter + lightbox, forms
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initReveals();
  initFooterYear();
  initGallery();
  initLightboxTriggers();
  initContactForm();
  initServiceInquiryLinks();
});

/* ------------------------------- header ---------------------------------- */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const threshold = 60;
  const update = () => {
    header.classList.toggle('is-solid', window.scrollY > threshold);
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
}

/* ----------------------------- mobile menu -------------------------------- */
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (!toggle || !menu) return;
  const close = () => {
    toggle.classList.remove('is-open');
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
  };
  toggle.addEventListener('click', () => {
    const willOpen = !menu.classList.contains('is-open');
    toggle.classList.toggle('is-open', willOpen);
    menu.classList.toggle('is-open', willOpen);
    document.body.style.overflow = willOpen ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
}

/* -------------------------- scroll reveal animations ----------------------- */
function initReveals() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;
  if (!('IntersectionObserver' in window)) {
    targets.forEach((t) => t.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );
  targets.forEach((t) => observer.observe(t));
}

function initFooterYear() {
  const el = document.querySelector('[data-year]');
  if (el) el.textContent = new Date().getFullYear();
}

/* --------------------------------- gallery --------------------------------- */
const LAYOUT_PATTERN = ['g-tall', 'g-wide', 'g-full', 'g-third', 'g-third', 'g-third', 'g-half', 'g-half'];

function buildGalleryItem(item, index, layoutClass) {
  const fig = document.createElement('figure');
  fig.className = `gallery-item ${layoutClass}`;
  fig.dataset.category = item.category;
  fig.dataset.index = String(index);
  fig.innerHTML = `
    <img src="${item.img}" alt="${item.title} — ${item.category} photography" loading="lazy">
    <span class="expand" aria-hidden="true">&#8599;</span>
    <figcaption>
      <span class="eyebrow">${item.category}</span>
      <span class="title serif">${item.title}</span>
    </figcaption>
  `;
  return fig;
}

function initGallery() {
  const grid = document.querySelector('[data-gallery]');
  if (!grid || typeof PORTFOLIO === 'undefined') return;

  const filterButtons = document.querySelectorAll('[data-filter]');
  let currentFilter = 'all';
  let currentList = [];

  function render(filter) {
    grid.innerHTML = '';
    const items = filter === 'all' ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter);
    currentList = items;
    items.forEach((item, i) => {
      const layoutClass = LAYOUT_PATTERN[i % LAYOUT_PATTERN.length];
      const fig = buildGalleryItem(item, i, layoutClass);
      fig.classList.add('reveal', 'reveal-img');
      grid.appendChild(fig);
    });
    initReveals();
    attachLightboxToGrid();
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      currentFilter = btn.dataset.filter;
      render(currentFilter);
    });
  });

  const params = new URLSearchParams(window.location.search);
  const initial = params.get('category');
  if (initial && CATEGORIES.some((c) => c.slug === initial)) {
    currentFilter = initial;
    const btn = document.querySelector(`[data-filter="${initial}"]`);
    if (btn) {
      filterButtons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    }
  }
  render(currentFilter);

  function attachLightboxToGrid() {
    grid.querySelectorAll('.gallery-item').forEach((el) => {
      el.addEventListener('click', () => {
        openLightbox(currentList, Number(el.dataset.index));
      });
    });
  }
}

/* --------------------------------- lightbox --------------------------------- */
let lightboxEl = null;
let lightboxItems = [];
let lightboxIndex = 0;

function ensureLightbox() {
  if (lightboxEl) return lightboxEl;
  const el = document.createElement('div');
  el.className = 'lightbox';
  el.innerHTML = `
    <button class="lightbox-close" aria-label="Close">Close &#215;</button>
    <button class="lightbox-prev" aria-label="Previous">&#8249;</button>
    <button class="lightbox-next" aria-label="Next">&#8250;</button>
    <figure class="lightbox-figure">
      <img src="" alt="">
      <figcaption class="lightbox-caption"></figcaption>
    </figure>
    <div class="lightbox-count"></div>
  `;
  document.body.appendChild(el);
  el.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  el.addEventListener('click', (e) => { if (e.target === el) closeLightbox(); });
  el.querySelector('.lightbox-prev').addEventListener('click', () => step(-1));
  el.querySelector('.lightbox-next').addEventListener('click', () => step(1));
  document.addEventListener('keydown', (e) => {
    if (!el.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });
  lightboxEl = el;
  return el;
}

function renderLightbox() {
  const el = ensureLightbox();
  const item = lightboxItems[lightboxIndex];
  if (!item) return;
  const imgEl = el.querySelector('img');
  imgEl.style.opacity = 0;
  imgEl.src = item.img;
  imgEl.alt = `${item.title} — ${item.category}`;
  imgEl.onload = () => { imgEl.style.transition = 'opacity 0.4s ease'; imgEl.style.opacity = 1; };
  el.querySelector('.lightbox-caption').innerHTML = `<strong>${item.title}</strong><span>${item.category}</span>`;
  el.querySelector('.lightbox-count').textContent = `${lightboxIndex + 1} / ${lightboxItems.length}`;
}

function openLightbox(items, index) {
  lightboxItems = items;
  lightboxIndex = index;
  const el = ensureLightbox();
  renderLightbox();
  el.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightboxEl) return;
  lightboxEl.classList.remove('is-open');
  document.body.style.overflow = '';
}

function step(dir) {
  if (!lightboxItems.length) return;
  lightboxIndex = (lightboxIndex + dir + lightboxItems.length) % lightboxItems.length;
  renderLightbox();
}

/* For static (non-filtered) lightbox triggers, e.g. project galleries */
function initLightboxTriggers() {
  const groups = document.querySelectorAll('[data-lightbox-group]');
  groups.forEach((group) => {
    const items = Array.from(group.querySelectorAll('[data-lightbox-item]')).map((el) => ({
      img: el.dataset.lightboxItem,
      title: el.dataset.title || '',
      category: el.dataset.category || '',
    }));
    group.querySelectorAll('[data-lightbox-item]').forEach((el, i) => {
      el.addEventListener('click', () => openLightbox(items, i));
    });
  });
}

/* -------------------------------- contact form ------------------------------ */
function initContactForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;
  const success = document.querySelector('.form-success');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    form.reset();
    if (success) success.classList.add('is-visible');
    form.style.display = 'none';
  });

  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const select = form.querySelector('#photography-type');
  if (type && select) {
    const opt = Array.from(select.options).find((o) => o.value === type);
    if (opt) select.value = type;
  }
}

function initServiceInquiryLinks() {
  document.querySelectorAll('[data-inquire]').forEach((a) => {
    a.href = `contact.html?type=${encodeURIComponent(a.dataset.inquire)}`;
  });
}
