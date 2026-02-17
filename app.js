// ============================================
// LOGIKA GLOBAL
// ============================================

// Data teks default (bisa diganti nanti)
const defaultText = {
  full_name: 'Tisna Dwi Cahyono, S.Pd',
  position: 'Guru Kelas 5',
  school: 'SD Negeri Kunjang 2 Kec. Kunjang Kab. Kediri',
  email: 'tisnadwi@gmail.com',
  welcome_text: 'Selamat datang di Arsip Digital Guru!',
  footer_quote: 'Tulislah yang kamu baca, Bacalah yang kamu tulis.'
};

// Fungsi navigasi antar section
window.showSection = function(sectionId) {
  document.querySelectorAll('section, footer').forEach(el => {
    el.classList.add('section-hidden');
    el.classList.remove('section-visible');
  });
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.remove('section-hidden');
    target.classList.add('section-visible');
  }
  const footerSections = ['profil', 'perangkat', 'buku', 'materi', 'video', 'latihan', 'game', 'galeri', 'kontak', 'capaian-pembelajaran', 'tujuan-pembelajaran', 'modul-ajar'];
  if (footerSections.includes(sectionId)) {
    document.getElementById('footer').classList.remove('section-hidden');
    document.getElementById('footer').classList.add('section-visible');
  }
  closeMobileMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ========== DARK MODE ==========
function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = saved === 'dark' || (!saved && prefersDark);
  document.documentElement.classList.toggle('dark', isDark);
  updateThemeIcons(isDark);
}
function updateThemeIcons(isDark) {
  const sun = document.getElementById('sun-icon');
  const moon = document.getElementById('moon-icon');
  if (sun && moon) {
    sun.classList.toggle('hidden', !isDark);
    moon.classList.toggle('hidden', isDark);
  }
}
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcons(isDark);
}

// ========== MOBILE MENU ==========
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  if (menu && menuIcon && closeIcon) {
    menu.classList.toggle('open');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  }
}
function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  if (menu && menuIcon && closeIcon) {
    menu.classList.remove('open');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }
}

// ========== UPDATE KONTEN STATIS ==========
function updateContent() {
  const hero = document.getElementById('hero-welcome');
  if (hero) hero.textContent = defaultText.welcome_text;
  const footerQuote = document.getElementById('footer-quote');
  if (footerQuote) footerQuote.textContent = `"${defaultText.footer_quote}"`;
  const fullName = document.getElementById('full-name');
  if (fullName) fullName.textContent = defaultText.full_name;
  const position = document.getElementById('position');
  if (position) position.textContent = defaultText.position;
  const school = document.getElementById('school');
  if (school) school.textContent = defaultText.school;
  const contactEmail = document.getElementById('contact-email');
  if (contactEmail) contactEmail.textContent = defaultText.email;
  const contactSchool = document.getElementById('contact-school');
  if (contactSchool) contactSchool.textContent = defaultText.school;
  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();
}

// ========== ANIMASI SCROLL ==========
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-fade-in-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
  });
}

// ========== INISIALISASI ==========
function init() {
  initTheme();
  updateContent();
  animateOnScroll();

  // Event listeners
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  document.getElementById('menu-toggle')?.addEventListener('click', toggleMobileMenu);
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      document.documentElement.classList.toggle('dark', e.matches);
      updateThemeIcons(e.matches);
    }
  });

  // Render menu utama buku
  renderBukuMenu('buku-menu-container');

  // Render detail untuk setiap mapel
  renderBukuDetail('pp', 'buku-pp-container');
  renderBukuDetail('bindo', 'buku-bindo-container');
  renderBukuDetail('mat', 'buku-mat-container');
  renderBukuDetail('ipas', 'buku-ipas-container');
  renderBukuDetail('sr', 'buku-sr-container');
  renderBukuDetail('bing', 'buku-bing-container');
  renderBukuDetail('bjawa', 'buku-bjawa-container');
  renderBukuDetail('kka', 'buku-kka-container');

  // Render lainnya (CP, TP, Modul)
  renderSubjects('cp-container', 'Capaian Pembelajaran', 'cp');
  renderSubjects('tp-container', 'Tujuan Pembelajaran', 'tp');
  renderSubjects('modul-container', 'Modul Ajar', 'modul');
}

document.addEventListener('DOMContentLoaded', init);