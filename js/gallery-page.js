/* ============================================================
   Canton Dragon — shared renderer for gallery-*.html pages.
   Reads GALLERY_CATEGORIES[document.body.dataset.galleryCategory],
   renders the photo grid, and wires up the lightbox + scroll reveal.
   Vanilla JS, no dependencies.
   ============================================================ */
(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function renderGrid() {
    const grid = document.getElementById('galleryGrid');
    const category = document.body.dataset.galleryCategory;
    const photos = typeof GALLERY_CATEGORIES !== 'undefined' && GALLERY_CATEGORIES[category];
    if (!grid || !photos) return;

    const spans = ['row-span-2', '', '', 'row-span-2', '', 'row-span-2', '', ''];
    grid.classList.add('auto-rows-[170px]', 'sm:auto-rows-[210px]');
    grid.innerHTML = photos.map((g, i) => `
      <button class="gallery-item reveal-img ${spans[i % spans.length]}" style="--d:${(i % 4) * 0.06}s" data-src="${g.img}" aria-label="View larger: ${g.alt}">
        <img src="${g.img}" alt="${g.alt}" loading="lazy" />
      </button>`).join('');
  }

  function setupLightbox() {
    const grid = document.getElementById('galleryGrid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('lightboxClose');
    if (!grid || !lightbox) return;

    let lastFocused = null;

    function open(src, alt) {
      lastFocused = document.activeElement;
      lightboxImg.src = src;
      lightboxImg.alt = alt;
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }
    function close() {
      if (lightbox.classList.contains('hidden')) return;
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
      lightboxImg.src = '';
      document.body.style.overflow = '';
      if (lastFocused) lastFocused.focus();
    }

    grid.addEventListener('click', e => {
      const btn = e.target.closest('.gallery-item');
      if (!btn) return;
      open(btn.dataset.src, btn.querySelector('img').alt);
    });
    closeBtn.addEventListener('click', close);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  function observeReveals() {
    const targets = document.querySelectorAll('.reveal-up, .reveal-img, .reveal-clip');
    if (prefersReduced || !('IntersectionObserver' in window)) {
      targets.forEach(t => t.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(t => io.observe(t));

    const clipEls = document.querySelectorAll('.reveal-clip');
    if (clipEls.length) {
      const checkClips = () => {
        let pending = false;
        clipEls.forEach(el => {
          if (el.classList.contains('in')) return;
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
            el.classList.add('in');
          } else { pending = true; }
        });
        if (!pending) window.removeEventListener('scroll', checkClips);
      };
      window.addEventListener('scroll', checkClips, { passive: true });
      checkClips();
    }
  }

  renderGrid();
  setupLightbox();
  observeReveals();
})();
