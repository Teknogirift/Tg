// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// ── NAV AKTİF DURUM ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--accent)' : '';
  });
});

// ── LOGO YÜKLEYİCİ (önizleme için) ──
const logoInput = document.getElementById('logo-file-input');
if (logoInput) {
  logoInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(ev) {
      const src = ev.target.result;
      const clubLogo = document.getElementById('club-logo');
      const navLogo = document.getElementById('nav-logo-img');
      if (clubLogo) clubLogo.src = src;
      if (navLogo) navLogo.src = src;
      const uploader = document.getElementById('logo-uploader');
      if (uploader) uploader.style.borderColor = 'rgba(0,229,255,0.6)';
    };
    reader.readAsDataURL(file);
  });
}
