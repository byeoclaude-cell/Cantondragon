/* ============================================================
   Canton Dragon — interactions
   Nav, mobile menu, scroll reveals, parallax, menu rendering,
   gallery + lightbox. Vanilla JS, no dependencies.
   ============================================================ */
(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------- Current year ---------- */
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Navbar scrolled state ---------- */
  const navbar = $('#navbar');
  const onScroll = () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const menuBtn   = $('#menuBtn');
  const overlay   = $('#mobileMenu');
  const panel     = $('#mobilePanel');

  function openMenu() {
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => panel.classList.remove('translate-x-full'));
    menuBtn.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    panel.classList.add('translate-x-full');
    document.body.style.overflow = '';
    menuBtn.setAttribute('aria-expanded', 'false');
    setTimeout(() => overlay.classList.add('hidden'), 450);
  }
  menuBtn.addEventListener('click', openMenu);
  $$('[data-close]', overlay).forEach(el => el.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  /* ---------- Hero smooth-scroll reveal (GPU transforms only) ---------- */
  const heroTrack = $('#heroTrack');
  const heroImg   = $('#heroImg');
  const matteT = $('#matteT'), matteB = $('#matteB'), matteL = $('#matteL'), matteR = $('#matteR');
  const heroBtns  = $('#heroTrack .hero-btns');
  const heroCue   = $('#heroTrack a[href="#about"]');
  const heroDash  = $('#heroTrack .hero-dash');
  const easeOut = (x) => 1 - Math.pow(1 - x, 3);
  const clamp01 = (x) => Math.min(Math.max(x, 0), 1);

  // Split each hero text element into per-word spans (preserves nested markup like
  // the gold "Wok" span and <br>). Returns the word spans in document order.
  const splitWords = (el) => {
    const out = [];
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(node => {
      if (!node.textContent.trim()) return;
      const frag = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach(part => {
        if (part === '') return;
        if (!part.trim()) { frag.appendChild(document.createTextNode(part)); return; }
        const span = document.createElement('span');
        span.className = 'hero-word';
        span.textContent = part;
        frag.appendChild(span);
        out.push(span);
      });
      node.parentNode.replaceChild(frag, node);
    });
    return out;
  };

  let heroWords = [];
  $$('#heroTrack .hero-text').forEach(el => {
    heroWords = heroWords.concat(splitWords(el));
    el.classList.add('ready');
  });

  if (heroTrack && heroImg && matteT && matteB && matteL && matteR) {
    if (prefersReduced) {
      // No choreography: full-bleed media, frame removed, track collapsed, video paused, text shown.
      heroTrack.style.height = '100svh';
      heroImg.style.transform = 'none';
      if (typeof heroImg.pause === 'function') { heroImg.removeAttribute('autoplay'); heroImg.pause(); }
      [matteT, matteB, matteL, matteR].forEach(m => { m.style.display = 'none'; });
      heroWords.forEach(w => { w.style.opacity = '1'; w.style.transform = 'none'; });
      if (heroDash) heroDash.style.opacity = '1';
      if (heroBtns) { heroBtns.style.opacity = '1'; heroBtns.style.transform = 'none'; }
    } else {
      // Reveal completes over ~90% of a viewport; track adds a pinned viewport.
      const setHeight = () => { heroTrack.style.height = Math.round(window.innerHeight * 1.9) + 'px'; };

      // Word wave: a soft "head" sweeps across the text. FEATHER spans several words
      // so many are mid-fade at once — a continuous gradient rather than blocks popping.
      const FEATHER = 0.26;
      const TEXT_END = 0.85;   // words fully revealed by this hero progress
      const N = heroWords.length;

      let ticking = false;
      const update = () => {
        ticking = false;
        const reveal = window.innerHeight * 0.9;
        const p = clamp01(window.scrollY / reveal);
        // Image zoom 1.7 -> 1.0
        heroImg.style.transform = `scale(${(1.7 - 0.7 * p).toFixed(4)})`;
        // Frame panels slide fully out of view as p -> 1 (each is 25% of the side)
        const off = (100 * p).toFixed(2);
        matteT.style.transform = `translateY(-${off}%)`;
        matteB.style.transform = `translateY(${off}%)`;
        matteL.style.transform = `translateX(-${off}%)`;
        matteR.style.transform = `translateX(${off}%)`;

        // Reveal "head" travels from -FEATHER to 1 across the text-reveal window.
        const tp = clamp01(p / TEXT_END);
        const head = tp * (1 + FEATHER) - FEATHER;
        if (heroDash) heroDash.style.opacity = clamp01((head + FEATHER) / FEATHER).toFixed(3);
        for (let i = 0; i < N; i++) {
          const t = N > 1 ? i / (N - 1) : 0;
          const o = clamp01((head - (t - FEATHER)) / FEATHER);
          const w = heroWords[i];
          w.style.opacity = o.toFixed(3);
          w.style.transform = `translateY(${((1 - o) * 8).toFixed(1)}px)`;
        }
        // Buttons ease in once the copy is mostly revealed.
        if (heroBtns) {
          const b = easeOut(clamp01((p - 0.6) / 0.3));
          heroBtns.style.opacity = b.toFixed(3);
          heroBtns.style.transform = `translateY(${((1 - b) * 18).toFixed(1)}px)`;
        }
        // Fade the scroll cue out as the reveal gets underway.
        if (heroCue) heroCue.style.opacity = Math.max(0, 1 - p * 2.5).toFixed(3);
      };

      setHeight();
      update();
      window.addEventListener('scroll', () => {
        if (!ticking) { ticking = true; requestAnimationFrame(update); }
      }, { passive: true });
      window.addEventListener('resize', () => { setHeight(); update(); });
    }
  }

  /* ---------- Scroll reveal ---------- */
  function observeReveals() {
    const targets = $$('.reveal-up, .reveal-img, .reveal-clip');
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

    // Chrome calculates IntersectionObserver against the clipped visual area,
    // so clip-path: inset(0 0 100% 0) makes the element appear as zero
    // intersection. Use a scroll-based fallback for .reveal-clip elements.
    const clipEls = $$('.reveal-clip');
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

  /* ---------- Signatures ---------- */
  function renderSignatures() {
    const grid = $('#signatureGrid');
    if (!grid || typeof SIGNATURES === 'undefined') return;
    grid.innerHTML = SIGNATURES.map((d, i) => `
      <article class="sig-card reveal-up" style="--d:${i * 0.07}s">
        <img src="${d.img}" alt="${d.name}" loading="lazy" />
        <div class="sig-card__overlay">
          <div class="flex items-baseline justify-between gap-2">
            <h3 class="font-display text-xl text-ivory leading-tight">${d.name}</h3>
            <span class="font-display text-lg text-gold-400 flex-none">$${d.price}</span>
          </div>
          <p class="mt-1.5 text-sm leading-relaxed text-ivory/70">${d.note}</p>
        </div>
      </article>`).join('');
  }

  /* ---------- Menu tabs + panels ---------- */
  function renderMenu() {
    const tabsEl   = $('#menuTabs');
    const panelsEl = $('#menuPanels');
    if (!tabsEl || !panelsEl || typeof MENU === 'undefined') return;

    tabsEl.innerHTML = MENU.map((cat, i) => `
      <button class="menu-tab ${i === 0 ? 'active' : ''}" role="tab"
              aria-selected="${i === 0}" data-target="${cat.id}">${cat.label}</button>
    `).join('');

    panelsEl.innerHTML = MENU.map((cat, i) => `
      <div class="menu-panel ${i === 0 ? '' : 'hidden'}" id="panel-${cat.id}" role="tabpanel">
        ${cat.note ? `<p class="mx-auto mb-8 max-w-2xl text-center font-serif text-lg italic text-ink-muted">${cat.note}</p>` : ''}
        <div class="mx-auto grid max-w-5xl gap-x-14 gap-y-0 md:grid-cols-2">
          ${cat.items.map(it => `
            <div class="menu-item">
              <div class="menu-item__lead">
                <div class="min-w-0">
                  <span class="menu-item__name">${it.name}</span>
                  ${it.spice ? '<span class="spice-tag ml-2">Spicy</span>' : ''}
                  ${it.desc ? `<p class="menu-item__desc">${it.desc}</p>` : ''}
                </div>
              </div>
              <span class="menu-item__dots" aria-hidden="true"></span>
              <span class="menu-item__price">$${it.price}</span>
            </div>`).join('')}
        </div>
      </div>`).join('');

    // Sliding pill indicator that glides under the active tab
    const indicator = document.createElement('span');
    indicator.className = 'menu-tab-indicator';
    tabsEl.appendChild(indicator);
    const moveIndicator = (tab) => {
      if (!tab) return;
      indicator.style.width = tab.offsetWidth + 'px';
      indicator.style.transform = `translateX(${tab.offsetLeft - tabsEl.scrollLeft}px)`;
    };
    const activeTab = () => $('.menu-tab.active', tabsEl);
    const seat = () => moveIndicator(activeTab());
    requestAnimationFrame(seat);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(seat);
    // Seat reliably once the tab strip first enters the viewport (widths are settled by then)
    if ('IntersectionObserver' in window) {
      const seatIO = new IntersectionObserver((ents, obs) => {
        ents.forEach(e => { if (e.isIntersecting) { seat(); obs.disconnect(); } });
      }, { threshold: 0.1 });
      seatIO.observe(tabsEl);
    }
    tabsEl.addEventListener('scroll', seat, { passive: true });
    window.addEventListener('resize', seat);

    // Tab switching
    $$('.menu-tab', tabsEl).forEach(tab => {
      tab.addEventListener('click', () => {
        const id = tab.dataset.target;
        $$('.menu-tab', tabsEl).forEach(t => {
          const active = t === tab;
          t.classList.toggle('active', active);
          t.setAttribute('aria-selected', active);
        });
        moveIndicator(tab);
        $$('.menu-panel', panelsEl).forEach(p => p.classList.add('hidden'));
        const panel = $('#panel-' + id);
        if (panel) {
          panel.classList.remove('hidden');
          // subtle fade-in on switch
          if (!prefersReduced) {
            panel.style.opacity = 0;
            panel.style.transform = 'translateY(8px)';
            requestAnimationFrame(() => {
              panel.style.transition = 'opacity .4s var(--ease), transform .4s var(--ease)';
              panel.style.opacity = 1;
              panel.style.transform = 'none';
            });
          }
        }
        // keep active tab in view on mobile, then re-seat the indicator
        tab.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'nearest', inline: 'center' });
        setTimeout(() => moveIndicator(tab), prefersReduced ? 0 : 350);
      });
    });
  }

  /* ---------- Gallery + lightbox ---------- */
  function renderGallery() {
    const grid = $('#galleryGrid');
    if (!grid || typeof GALLERY === 'undefined') return;
    // varied row spans for an editorial masonry feel
    const spans = ['row-span-2', '', '', 'row-span-2', '', 'row-span-2', '', ''];
    grid.classList.add('auto-rows-[170px]', 'sm:auto-rows-[210px]');
    grid.innerHTML = GALLERY.map((g, i) => `
      <button class="gallery-item reveal-img ${spans[i % spans.length]}" style="--d:${(i % 4) * 0.06}s" data-src="${g.img}" aria-label="View larger: ${g.alt}">
        <img src="${g.img}" alt="${g.alt}" loading="lazy" />
        <span class="gallery-caption" aria-hidden="true">${g.alt.split(' — ')[0]}</span>
      </button>`).join('');

    const lightbox = $('#lightbox');
    const lightboxImg = $('#lightboxImg');
    const closeBtn = $('#lightboxClose');

    function open(src, alt) {
      lightboxImg.src = src;
      lightboxImg.alt = alt;
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
      lightboxImg.src = '';
      document.body.style.overflow = '';
    }
    $$('.gallery-item', grid).forEach(btn => {
      btn.addEventListener('click', () => open(btn.dataset.src, btn.querySelector('img').alt));
    });
    closeBtn.addEventListener('click', close);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  /* ---------- Smooth-scroll for same-page anchors (offset for navbar) ---------- */
  function setupAnchors() {
    $$('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        if (id === '#' || id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' });
      });
    });
  }

  /* ---------- Magnetic buttons (fine-pointer devices only) ---------- */
  function setupMagnetic() {
    if (prefersReduced) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const targets = $$('.btn-gold, .btn-outline, .btn-dark, .btn-ghost');
    const STRENGTH = 0.28, MAX = 7;
    targets.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        let x = (e.clientX - (r.left + r.width / 2)) * STRENGTH;
        let y = (e.clientY - (r.top + r.height / 2)) * STRENGTH;
        x = Math.max(-MAX, Math.min(MAX, x));
        y = Math.max(-MAX, Math.min(MAX, y));
        el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------- Count-up stats (animate once, when scrolled into view) ---------- */
  function setupCounters() {
    const nums = $$('.stat-num[data-count]');
    if (!nums.length) return;
    const render = (el, val) => {
      const dec = parseInt(el.dataset.decimals || '0', 10);
      el.textContent = (el.dataset.prefix || '') + val.toFixed(dec) + (el.dataset.suffix || '');
    };
    if (prefersReduced || !('IntersectionObserver' in window)) {
      nums.forEach(el => render(el, parseFloat(el.dataset.count)));
      return;
    }
    const run = (el) => {
      const target = parseFloat(el.dataset.count);
      const dur = 1400, start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        render(el, target * eased);
        if (p < 1) requestAnimationFrame(tick);
        else {
          render(el, target);
          if (!prefersReduced) {
            el.style.transition = 'transform .15s var(--ease-out), text-shadow .15s ease';
            el.style.transform = 'scale(1.06)';
            el.style.textShadow = '0 0 24px rgba(200,162,75,.65)';
            setTimeout(() => {
              el.style.transition = 'transform .45s var(--ease-out), text-shadow .45s ease';
              el.style.transform = '';
              el.style.textShadow = '';
            }, 150);
          }
        }
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(en => { if (en.isIntersecting) { run(en.target); obs.unobserve(en.target); } });
    }, { threshold: 0.6 });
    nums.forEach(el => { render(el, 0); io.observe(el); });
  }

  /* ---------- Interactive map ---------- */
  function initMap() {
    const el = document.getElementById('visitMap');
    if (!el || typeof L === 'undefined') return;

    const lat = 33.5952, lng = -111.8560;
    const map = L.map(el, {
      center: [lat, lng],
      zoom: 15,
      scrollWheelZoom: false,
      zoomControl: true
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" target="_blank">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    const icon = L.divIcon({
      className: '',
      html: '<div style="width:16px;height:16px;background:#C8A24B;border-radius:50%;border:2.5px solid #FBF7F0;box-shadow:0 0 0 5px rgba(200,162,75,.28),0 4px 16px rgba(0,0,0,.7)"></div>',
      iconSize: [16, 16],
      iconAnchor: [8, 8],
      popupAnchor: [0, -14]
    });

    L.marker([lat, lng], { icon })
      .addTo(map)
      .bindPopup(
        '<strong style="font-size:13px">Canton Dragon</strong><br>' +
        '<span style="font-size:12px">10190 N 90th St #101<br>Scottsdale, AZ 85258</span><br>' +
        '<a style="font-size:12px;color:#C8A24B" href="https://maps.google.com/?q=Canton+Dragon+Asian+Grill+%26+Bar+10190+N+90th+St+Scottsdale+AZ+85258" target="_blank" rel="noopener">Get directions →</a>',
        { maxWidth: 190 }
      )
      .openPopup();
  }

  /* ---------- Init ---------- */
  renderSignatures();
  renderMenu();
  renderGallery();
  initMap();
  setupAnchors();
  setupMagnetic();
  setupCounters();
  observeReveals(); // after dynamic content is in the DOM
})();
