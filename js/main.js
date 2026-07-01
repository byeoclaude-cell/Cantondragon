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

  /* ---------- Focus trap (for modal overlays: drawer + lightbox) ----------
     Keeps Tab/Shift-Tab inside the open overlay, moves focus in on open,
     and restores it to the trigger on close — keyboard/SR parity for modals. */
  const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), textarea, select, [tabindex]:not([tabindex="-1"])';
  function createFocusTrap(container) {
    let lastFocused = null;
    const visibleItems = () =>
      $$(FOCUSABLE, container).filter(el => el.getClientRects().length > 0);
    function onKey(e) {
      if (e.key !== 'Tab') return;
      const items = visibleItems();
      if (!items.length) { e.preventDefault(); return; }
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    return {
      activate(focusTarget) {
        lastFocused = document.activeElement;
        container.addEventListener('keydown', onKey);
        requestAnimationFrame(() => {
          const target = focusTarget || visibleItems()[0];
          if (target) target.focus();
        });
      },
      release() {
        container.removeEventListener('keydown', onKey);
        if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
        lastFocused = null;
      }
    };
  }

  /* ---------- Navbar scrolled state ---------- */
  const navbar = $('#navbar');
  const navLogo = navbar.querySelector('img');
  if (navLogo) navLogo.style.transition = 'max-height 0.5s cubic-bezier(0.6,0.01,0.05,0.95)';
  const onScroll = () => {
    const scrolled = window.scrollY > 20;
    navbar.classList.toggle('scrolled', scrolled);
    if (navLogo) navLogo.style.maxHeight = scrolled ? '3.25rem' : '';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const menuBtn  = $('#menuBtn');
  const overlay  = $('#mobileMenu');
  const panel    = $('#mobilePanel');
  const backdrop = $('#mobileBackdrop');
  const menuTrap = createFocusTrap(panel);

  function overlayAnimEls() {
    return [...$$('.mobile-overlay-link', overlay), ...$$('.mobile-cta-group', overlay)];
  }

  function openMenu() {
    overlay.classList.remove('hidden');
    requestAnimationFrame(() => {
      panel.classList.add('is-open');
      backdrop.classList.add('is-open');
      menuBtn.classList.add('is-open');
      overlayAnimEls().forEach(el => el.classList.add('in'));
    });
    document.body.style.overflow = 'hidden';
    menuBtn.setAttribute('aria-expanded', 'true');
    overlay.classList.add('is-open');
    menuTrap.activate($('#mobileClose'));
  }
  function closeMenu() {
    if (!panel.classList.contains('is-open')) return;
    panel.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    menuBtn.classList.remove('is-open');
    overlayAnimEls().forEach(el => el.classList.remove('in'));
    document.body.style.overflow = '';
    menuBtn.setAttribute('aria-expanded', 'false');
    overlay.classList.remove('is-open');
    menuTrap.release();
    setTimeout(() => overlay.classList.add('hidden'), 480);
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
      // No choreography: full-bleed image, frame removed, track collapsed, text shown.
      heroTrack.style.height = '100svh';
      heroImg.style.transform = 'none';
      if (typeof heroImg.pause === 'function') { heroImg.removeAttribute('autoplay'); heroImg.pause(); }
      [matteT, matteB, matteL, matteR].forEach(m => { m.style.display = 'none'; });
      heroWords.forEach(w => { w.style.opacity = '1'; w.style.transform = 'none'; });
      if (heroDash) heroDash.style.opacity = '1';
      if (heroBtns) { heroBtns.style.opacity = '1'; heroBtns.style.transform = 'none'; }
    } else {
      // Reveal completes over ~90% of a viewport; track adds a pinned viewport.
      // After the intro animation finishes, we collapse the scroll range so the
      // user only needs a single short scroll to exit — not a full viewport's worth.
      let introComplete = false;
      const SCROLL_MULTIPLIER_INTRO = 1.9;
      const SCROLL_MULTIPLIER_DONE  = 1.2;
      const setHeight = () => {
        const m = introComplete ? SCROLL_MULTIPLIER_DONE : SCROLL_MULTIPLIER_INTRO;
        heroTrack.style.height = Math.round(window.innerHeight * m) + 'px';
      };

      const FEATHER = 0.26;
      const TEXT_END = 0.85;
      const N = heroWords.length;

      // All hero state lives here — called by both the intro animation and the scroll handler.
      const applyHeroP = (p) => {
        heroImg.style.transform = `scale(${(1.7 - 0.7 * p).toFixed(4)})`;
        const off = (100 * p).toFixed(2);
        matteT.style.transform = `translateY(-${off}%)`;
        matteB.style.transform = `translateY(${off}%)`;
        matteL.style.transform = `translateX(-${off}%)`;
        matteR.style.transform = `translateX(${off}%)`;
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
        if (heroBtns) {
          const b = easeOut(clamp01((p - 0.6) / 0.3));
          heroBtns.style.opacity = b.toFixed(3);
          heroBtns.style.transform = `translateY(${((1 - b) * 18).toFixed(1)}px)`;
        }
        if (heroCue) heroCue.style.opacity = Math.max(0, 1 - p * 2.5).toFixed(3);
      };

      // Entrance animation: auto-reveals the hero on load so the page never starts
      // in the closed matte-frame state. introP ratchets to 1 and never goes back,
      // so max(scrollP, introP) keeps the hero open even when scrollY is 0.
      let introP = 0;
      const INTRO_DUR = 1800;
      let introStart = null;
      const easeIntro = (x) => 1 - Math.pow(1 - x, 3);
      const finishIntro = () => {
        if (introComplete) return;
        introComplete = true;
        introP = 1;
        applyHeroP(Math.max(clamp01(window.scrollY / (window.innerHeight * 0.9)), 1));
        setHeight();
      };

      requestAnimationFrame(function runIntro(ts) {
        if (!introStart) introStart = ts;
        const t = Math.min((ts - introStart) / INTRO_DUR, 1);
        introP = easeIntro(t);
        applyHeroP(Math.max(clamp01(window.scrollY / (window.innerHeight * 0.9)), introP));
        if (t < 1) {
          requestAnimationFrame(runIntro);
        } else {
          finishIntro();
        }
      });

      // Safety net: if rAF is throttled (background tab), collapse after the intro
      // duration plus a small buffer so the layout never stays in the 1.9× state.
      setTimeout(finishIntro, INTRO_DUR + 400);

      let ticking = false;
      const update = () => {
        ticking = false;
        const p = Math.max(clamp01(window.scrollY / (window.innerHeight * 0.9)), introP);
        applyHeroP(p);
      };

      setHeight();
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

  /* ---------- Highlights section (tab switcher — replaces scroll-jacking) ---------- */
  /* ---------- Highlight#2 — render 4 image-reveal cards ---------- */
  function renderHighlights() {
    const grid = document.getElementById('highlightsGrid');
    if (!grid || typeof FEATURED === 'undefined') return;

    grid.innerHTML = FEATURED.map((d, i) => {
      const num   = String(i + 1).padStart(2, '0');
      const imgs  = d.images || [];
      const delay = (i * 0.14).toFixed(2);

      // Support both plain string images and {src, made} objects
      const bgImgs = imgs.map((img, j) => {
        const src  = typeof img === 'string' ? img : img.src;
        const made = typeof img !== 'string' && img.made ? ` data-made="${img.made}"` : '';
        return `<img class="hl2-bg-img${j === 0 ? ' active' : ''}" src="${src}" alt="${d.label}" loading="${j < 2 ? 'eager' : 'lazy'}"${made} />`;
      }).join('');

      // Dot controls — one per image, first starts active
      const dots = imgs.length > 1
        ? `<div class="hl2-dots" role="group" aria-label="Browse images">${imgs.map((_, j) =>
            `<button class="hl2-dot${j === 0 ? ' active' : ''}" aria-label="Image ${j + 1}"></button>`
          ).join('')}</div>`
        : '';

      // CTA link — scrolls to the right section and activates the right tab
      const cta = d.link
        ? `<a class="hl2-card__cta" href="#${d.link}"${d.tabId ? ` data-tab="${d.tabId}"` : ''}>Explore <span aria-hidden="true">→</span></a>`
        : '';

      // Initial tag from first image's made property, if present
      const firstImg   = imgs[0];
      const initialTag = (firstImg && typeof firstImg !== 'string' && firstImg.made) ? firstImg.made : d.tag;
      const tagCurated = initialTag !== 'House-Made' ? ' hl2-card__tag--curated' : '';

      return `
        <article class="hl2-card" style="--delay:${delay}s" aria-label="${d.label}">
          <div class="hl2-card__bg">${bgImgs}</div>
          <div class="hl2-card__overlay"></div>
          <div class="hl2-card__content">
            <div class="hl2-card__top">
              <span class="hl2-card__num">${num}</span>
              <span class="hl2-card__tag${tagCurated}">${initialTag}</span>
            </div>
            <div class="hl2-card__bottom">
              <h3 class="hl2-card__title">${d.name}</h3>
              <p class="hl2-card__desc">${d.desc}</p>
              ${cta}
              ${dots}
            </div>
          </div>
        </article>`;
    }).join('');
  }

  /* ---------- Highlight#2 — reveal + image cycling ---------- */
  function setupHighlightsSwitcher() {
    const cards = Array.from(document.querySelectorAll('.hl2-card'));
    if (!cards.length) return;

    function startCycling(card) {
      const imgs  = Array.from(card.querySelectorAll('.hl2-bg-img'));
      const dotBtns = Array.from(card.querySelectorAll('.hl2-dot'));
      const tagEl = card.querySelector('.hl2-card__tag');
      if (imgs.length < 2) return;
      let cur = 0;
      let timer = null;

      function show(n) {
        imgs[cur].classList.remove('active');
        dotBtns[cur]?.classList.remove('active');
        cur = (n !== undefined ? n : (cur + 1)) % imgs.length;
        imgs[cur].classList.add('active');
        dotBtns[cur]?.classList.add('active');
        if (tagEl && imgs[cur].dataset.made) {
          const isHouseMade = imgs[cur].dataset.made === 'House-Made';
          tagEl.textContent = imgs[cur].dataset.made;
          tagEl.classList.toggle('hl2-card__tag--curated', !isHouseMade);
        }
      }

      function startTimer() {
        clearInterval(timer);
        timer = setInterval(() => show(), 4000);
      }

      startTimer();

      dotBtns.forEach((dot, i) => {
        dot.addEventListener('click', e => {
          e.stopPropagation();
          show(i);
          startTimer();
        });
      });
    }

    if (prefersReduced || !('IntersectionObserver' in window)) {
      cards.forEach(c => { c.classList.add('in'); startCycling(c); });
      return;
    }

    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const card  = e.target;
        const delay = parseFloat(card.style.getPropertyValue('--delay') || '0') * 1000;
        card.classList.add('in');
        // Start cycling after the reveal transition completes
        setTimeout(() => startCycling(card), 1800 + delay);
        obs.unobserve(card);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -4% 0px' });

    cards.forEach(c => io.observe(c));
  }

  /* ---------- Card stacks (vertical image cycling) ---------- */
  function setupCardStacks() {
    const hosts = document.querySelectorAll('.card-stack-host');
    if (!hosts.length) return;

    function cardStyle(diff) {
      if (diff ===  0) return { y:    0, scale: 1.00, opacity: 1.0, z: 5, rx:   0 };
      if (diff === -1) return { y: -165, scale: 0.84, opacity: 0.6, z: 4, rx:   6 };
      if (diff === -2) return { y: -295, scale: 0.70, opacity: 0.3, z: 3, rx:  12 };
      if (diff ===  1) return { y:  165, scale: 0.84, opacity: 0.6, z: 4, rx:  -6 };
      if (diff ===  2) return { y:  295, scale: 0.70, opacity: 0.3, z: 3, rx: -12 };
      return { y: diff > 0 ? 480 : -480, scale: 0.6, opacity: 0, z: 0, rx: diff > 0 ? -20 : 20 };
    }

    hosts.forEach(host => {
      const cards = Array.from(host.querySelectorAll('.card-stack-item'));
      const dots  = Array.from(host.querySelectorAll('.card-dot'));
      const total = cards.length;
      let cur = 0;
      let timer = null;

      function render(idx) {
        cards.forEach((card, i) => {
          let d = i - idx;
          if (d >  total / 2) d -= total;
          if (d < -total / 2) d += total;
          const s = cardStyle(d);
          card.style.zIndex   = s.z;
          card.style.opacity  = s.opacity;
          card.style.transform = `translateY(${s.y}px) scale(${s.scale}) rotateX(${s.rx}deg)`;
        });
        dots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
      }

      function advance() {
        cur = (cur + 1) % total;
        render(cur);
      }

      function startTimer() { timer = setInterval(advance, 2200); }
      function stopTimer()  { clearInterval(timer); timer = null; }

      dots.forEach(dot => {
        dot.addEventListener('click', () => {
          cur = +dot.dataset.goto;
          render(cur);
          stopTimer(); startTimer();
        });
      });

      // Pause on hover
      host.addEventListener('mouseenter', stopTimer);
      host.addEventListener('mouseleave', startTimer);

      render(0);
      startTimer();
    });
  }

  /* ---------- Shared tab-strip wiring (sliding indicator + panel switching) ----------
     Used by both the food Menu and the Bar. Tabs reference panels by full element id
     via data-target, so independent tab strips can coexist on the same page. */
  function wireTabs(tabsEl, panelsEl) {
    if (!tabsEl || !panelsEl) return;

    // Sliding pill indicator that glides under the active tab
    const indicator = document.createElement('span');
    indicator.className = 'menu-tab-indicator';
    tabsEl.appendChild(indicator);
    const moveIndicator = (tab) => {
      if (!tab) return;
      // The indicator is absolutely positioned INSIDE the scrolling strip, so it scrolls
      // with the tabs automatically — position it at the tab's offset only. Use `left`
      // (not `transform`): a composited transform pill can stick on some renderers, and
      // subtracting scrollLeft would double-count the scroll once the strip scrolls.
      indicator.style.width = tab.offsetWidth + 'px';
      indicator.style.left = tab.offsetLeft + 'px';
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
        $$('.menu-tab', tabsEl).forEach(t => {
          const active = t === tab;
          t.classList.toggle('active', active);
          t.setAttribute('aria-selected', active);
        });
        moveIndicator(tab);
        $$('.menu-panel', panelsEl).forEach(p => p.classList.add('hidden'));
        const panel = document.getElementById(tab.dataset.target);
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
        // Centre the active tab within the horizontally-scrollable strip. Explicit
        // scrollLeft is far more reliable than scrollIntoView for a nested horizontal
        // scroller. The indicator is absolutely positioned inside the strip, so it
        // rides along with the content as it scrolls — no re-seat needed.
        const targetLeft = tab.offsetLeft - (tabsEl.clientWidth - tab.offsetWidth) / 2;
        const maxLeft = tabsEl.scrollWidth - tabsEl.clientWidth;
        tabsEl.scrollTo({ left: Math.max(0, Math.min(targetLeft, maxLeft)), behavior: prefersReduced ? 'auto' : 'smooth' });
      });
    });
  }

  function renderMenuItem(it) {
    return `
      <div class="menu-item">
        <div class="menu-item__lead">
          <div class="min-w-0">
            <div class="menu-item__name-row">
              <span class="menu-item__name">${it.name}</span>
              ${it.spice ? '<span class="spice-tag">Spicy</span>' : ''}
              ${it.popular ? '<span class="popular-tag">★ Popular</span>' : ''}
              ${it.star ? '<span class="signature-tag">Signature</span>' : ''}
            </div>
            ${it.desc ? `<p class="menu-item__desc">${it.desc}</p>` : ''}
          </div>
        </div>
        <span class="menu-item__dots" aria-hidden="true"></span>
        ${it.price ? `<span class="menu-item__price">${it.price}</span>` : ''}
      </div>`;
  }

  /* ---------- Menu tabs + panels ---------- */
  function renderMenu() {
    const tabsEl   = $('#menuTabs');
    const panelsEl = $('#menuPanels');
    if (!tabsEl || !panelsEl || typeof MENU === 'undefined') return;

    tabsEl.innerHTML = MENU.map((cat, i) => `
      <button class="menu-tab ${i === 0 ? 'active' : ''}" role="tab"
              aria-selected="${i === 0}" data-target="panel-${cat.id}">${cat.label}</button>
    `).join('');

    panelsEl.innerHTML = MENU.map((cat, i) => `
      <div class="menu-panel ${i === 0 ? '' : 'hidden'}" id="panel-${cat.id}" role="tabpanel">
        ${cat.note ? `<p class="mx-auto mb-8 max-w-2xl text-center font-serif text-lg italic text-ink-muted">${cat.note}</p>` : ''}
        <div class="mx-auto grid max-w-5xl gap-x-14 gap-y-0 md:grid-cols-2">
          ${cat.items.map(renderMenuItem).join('')}
        </div>
      </div>`).join('');

    wireTabs(tabsEl, panelsEl);
  }

  /* ---------- Bar tabs + panels (cocktails, beer, wine, spirits, sake & more) ---------- */
  function renderBar() {
    const tabsEl   = $('#barTabs');
    const panelsEl = $('#barPanels');
    if (!tabsEl || !panelsEl || typeof BAR === 'undefined') return;

    tabsEl.innerHTML = BAR.map((cat, i) => `
      <button class="menu-tab ${i === 0 ? 'active' : ''}" role="tab"
              aria-selected="${i === 0}" data-target="barpanel-${cat.id}">${cat.label}</button>
    `).join('');

    panelsEl.innerHTML = BAR.map((cat, i) => {
      const body = cat.groups
        ? cat.groups.map(g => `
            <div class="menu-group">
              <h3 class="menu-group__label">${g.label}</h3>
              <div class="mx-auto grid max-w-5xl gap-x-14 gap-y-0 md:grid-cols-2">
                ${g.items.map(renderMenuItem).join('')}
              </div>
            </div>`).join('')
        : `<div class="mx-auto grid max-w-5xl gap-x-14 gap-y-0 md:grid-cols-2">${cat.items.map(renderMenuItem).join('')}</div>`;

      return `
        <div class="menu-panel ${i === 0 ? '' : 'hidden'}" id="barpanel-${cat.id}" role="tabpanel">
          ${cat.hero ? `<img src="${cat.hero}" alt="${cat.label}" class="bar-hero-img" width="800" height="450" loading="lazy" />` : ''}
          ${cat.note ? `<p class="mx-auto mb-8 max-w-2xl text-center font-serif text-lg italic text-ink-muted">${cat.note}</p>` : ''}
          ${body}
        </div>`;
    }).join('');

    wireTabs(tabsEl, panelsEl);
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
    const lbTrap = createFocusTrap(lightbox);

    function open(src, alt) {
      lightboxImg.src = src;
      lightboxImg.alt = alt;
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
      document.body.style.overflow = 'hidden';
      lbTrap.activate(closeBtn); // focus close button, trap inside the lightbox
    }
    function close() {
      if (lightbox.classList.contains('hidden')) return;
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
      lightboxImg.src = '';
      document.body.style.overflow = '';
      lbTrap.release(); // restore focus to the gallery thumbnail that opened it
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
    // Magnetism only on the primary gold CTA — a single intentional moment, not a site-wide tic.
    const targets = $$('.btn-gold');
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

  /* ---------- Interactive map (Leaflet lazy-loaded on demand) ---------- */
  const LEAFLET_CSS = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
  const LEAFLET_JS  = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
  const loadStyle = (href) => new Promise(res => {
    const link = document.createElement('link');
    link.rel = 'stylesheet'; link.href = href;
    link.onload = link.onerror = res;
    document.head.appendChild(link);
  });
  const loadScript = (src) => new Promise(res => {
    const s = document.createElement('script');
    s.src = src; s.async = true;
    s.onload = s.onerror = res;
    document.body.appendChild(s);
  });

  function initMap() {
    const el = document.getElementById('visitMap');
    if (!el) return;

    let started = false;
    async function build() {
      if (started) return;
      started = true;
      await loadStyle(LEAFLET_CSS);
      await loadScript(LEAFLET_JS);
      if (typeof L === 'undefined') return; // offline / blocked — leave the container empty
      buildMap(el);
    }

    // Defer the third-party fetch until the Visit section is within ~300px of view.
    if (!('IntersectionObserver' in window)) { build(); return; }
    const io = new IntersectionObserver((entries, obs) => {
      if (entries.some(e => e.isIntersecting)) { obs.disconnect(); build(); }
    }, { rootMargin: '300px' });
    io.observe(el);
  }

  function buildMap(el) {
    const lat = 33.5952, lng = -111.8560;
    const map = L.map(el, {
      center: [lat, lng],
      zoom: 16,
      scrollWheelZoom: false,
      zoomControl: true
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
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

    // Recalculate size once layout settles, then watch for future container resizes
    // (the bezel-outer grows to match the left column height after flex layout resolves).
    setTimeout(() => map.invalidateSize(), 120);
    if ('ResizeObserver' in window) {
      new ResizeObserver(() => map.invalidateSize()).observe(el);
    }
  }

  /* ---------- Accolade strip — hover lift + number glow ---------- */
  function setupAccolades() {
    if (prefersReduced) return;
    const section = document.getElementById('accolades');
    if (!section) return;
    const grid = section.querySelector(':scope > div');
    if (!grid) return;
    Array.from(grid.children).forEach(cell => cell.classList.add('accolade-cell'));
  }

  /* ---------- Signatures — per-card 3-D tilt ---------- */
  function setupSignatureTilt() {
    if (prefersReduced) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const cards = $$('.sig-card');
    if (!cards.length) return;
    const TILT = 6, EASE = 'cubic-bezier(.16,.84,.44,1)';
    const clamp = v => Math.max(-1, Math.min(1, v));
    cards.forEach(card => {
      let entered = false;
      card.addEventListener('mousemove', e => {
        const r  = card.getBoundingClientRect();
        const nx = (e.clientX - (r.left + r.width  * .5)) / (r.width  * .5);
        const ny = (e.clientY - (r.top  + r.height * .5)) / (r.height * .5);
        if (!entered) {
          entered = true;
          card.style.willChange = 'transform';
          card.style.transition = `transform .4s ${EASE}`;
        }
        card.style.transform = `perspective(600px) rotateX(${(clamp(ny)*TILT).toFixed(2)}deg) rotateY(${(-clamp(nx)*TILT).toFixed(2)}deg) scale(1.015)`;
      }, { passive: true });
      card.addEventListener('mouseleave', () => {
        entered = false;
        card.style.transition = `transform .6s ${EASE}`;
        card.style.transform  = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
      });
    });
  }

  /* ---------- Visit — map container hover ring ---------- */
  function setupVisitSection() {
    const section = document.getElementById('visit');
    if (!section) return;
    const mapWrap = section.querySelector('.reveal-img');
    if (mapWrap) mapWrap.classList.add('visit-map-wrap');
  }

  /* ---------- About / Our Story — cursor micro-interactions ---------- */
  function setupAboutMicro() {
    if (prefersReduced) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const section = document.getElementById('about');
    if (!section) return;
    const grid = section.querySelector(':scope > div');
    if (!grid || grid.children.length < 2) return;

    const imgCol    = grid.children[0];
    const textCol   = grid.children[1];
    const clipDiv   = imgCol.querySelector('.reveal-clip');
    const floatCard = imgCol.querySelector('.reveal-img.absolute');

    const TILT  = 4.5;  // max tilt, degrees
    const FLOAT = 15;   // max float card travel, px
    const EASE  = 'cubic-bezier(.16,.84,.44,1)';
    const clamp = v => Math.max(-1, Math.min(1, v));
    let entered = false;

    section.addEventListener('mousemove', (e) => {
      const sr = section.getBoundingClientRect();

      if (!entered) {
        entered = true;
        // Enable transitions now (avoids fighting the scroll-reveal on page load)
        if (clipDiv)   { clipDiv.style.willChange   = 'transform, box-shadow'; clipDiv.style.transition   = `transform .5s ${EASE}, box-shadow .5s ${EASE}`; }
        if (floatCard) { floatCard.style.willChange = 'transform';             floatCard.style.transition = `transform .4s ${EASE}`; }
      }

      // 3-D perspective tilt on the main image
      if (clipDiv) {
        const ir  = clipDiv.getBoundingClientRect();
        const nx  = (e.clientX - (ir.left + ir.width  * .5)) / (ir.width  * .5);
        const ny  = (e.clientY - (ir.top  + ir.height * .5)) / (ir.height * .5);
        const rx  = (clamp(ny) * TILT).toFixed(2);
        const ry  = (-clamp(nx) * TILT).toFixed(2);
        // Shadow shifts opposite to tilt direction, reinforcing depth
        const shx = (-clamp(nx) * 14).toFixed(0);
        const shy = (-clamp(ny) * 10).toFixed(0);
        clipDiv.style.transform  = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        clipDiv.style.boxShadow  = `${shx}px ${shy}px 55px -8px rgba(0,0,0,.75), 0 2px 4px rgba(0,0,0,.4)`;
      }

      // Float card: counter-direction parallax at a different speed → depth illusion
      if (floatCard) {
        const nx = (e.clientX - (sr.left + sr.width  * .5)) / (sr.width  * .5);
        const ny = (e.clientY - (sr.top  + sr.height * .5)) / (sr.height * .5);
        floatCard.style.transform = `translate(${(-clamp(nx) * FLOAT).toFixed(1)}px, ${(-clamp(ny) * FLOAT * .6).toFixed(1)}px)`;
      }

    }, { passive: true });

    section.addEventListener('mouseleave', () => {
      entered = false;
      if (clipDiv) {
        clipDiv.style.transition  = `transform .72s ${EASE}, box-shadow .72s ease`;
        clipDiv.style.transform   = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
        clipDiv.style.boxShadow   = '';
      }
      if (floatCard) {
        floatCard.style.transition = `transform .62s ${EASE}`;
        floatCard.style.transform  = 'translate(0px, 0px)';
      }
    });
  }

  /* ---------- Specials / Promotions ---------- */
  function renderPromos() {
    const grid = $('#promosGrid');
    if (!grid || typeof PROMOS === 'undefined' || !PROMOS.length) return;

    const badgeClass = {
      gold:    'promo-badge--gold',
      lacquer: 'promo-badge--lacquer',
      neutral: 'promo-badge--neutral',
    };

    grid.innerHTML = PROMOS.map(p => `
      <article class="promo-card reveal-img group">
        <div class="relative overflow-hidden rounded-2xl" style="aspect-ratio:3/4">
          <img src="${p.img}" alt="${p.label}" loading="lazy"
               class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent"></div>
          <span class="promo-badge ${badgeClass[p.badgeStyle] || badgeClass.neutral}">${p.badge}</span>
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <h3 class="font-display text-2xl text-ivory leading-tight">${p.label}</h3>
            <p class="mt-2 font-serif text-sm text-ivory/65 leading-relaxed">${p.desc}</p>
          </div>
        </div>
      </article>
    `).join('');
  }

  /* ---------- Highlights card CTA: scroll to section + activate tab ---------- */
  document.addEventListener('click', e => {
    const cta = e.target.closest('.hl2-card__cta[data-tab]');
    if (!cta) return;
    e.preventDefault();
    const section = document.getElementById(cta.getAttribute('href').replace('#', ''));
    if (section) section.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
    const tab = document.querySelector(`[data-target="${cta.dataset.tab}"]`);
    if (tab) tab.click();
  });

  /* ---------- Init ---------- */
  renderHighlights();
  setupHighlightsSwitcher();
  setupCardStacks();
  renderMenu();
  renderBar();
  renderPromos();
  renderGallery();
  initMap();
  setupAnchors();
  setupMagnetic();
  setupCounters();
  setupAccolades();
  setupAboutMicro();
  setupVisitSection();
  observeReveals(); // after dynamic content is in the DOM
})();
