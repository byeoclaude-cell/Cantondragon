/* ============================================================
   Canton Dragon — break / vacation notice
   Edit the dates below when the restaurant is closing for a break.
   Leave start/end/reopen blank to keep the site in normal
   operation — nothing else in this file needs to change.

   start              first full day closed   (YYYY-MM-DD)
   end                last full day closed    (YYYY-MM-DD)
   reopen             first day open again    (YYYY-MM-DD) — shown to customers
   announceDaysBefore how many days before `start` to begin showing a
                      heads-up notice (banner only — ordering stays on
                      until the break actually starts)

   Everything below turns itself on and off automatically based on
   today's date. No other steps needed here, but also update the
   hours on Google Business Profile so search results agree with
   the site, and see the specialOpeningHoursSpecification comment
   in index.html for the JSON-LD side (that part is manual).
   ============================================================ */
(function () {
  'use strict';

  var CONFIG = {
    start: '2026-07-04',
    end: '2026-07-15',
    reopen: '2026-07-16',
    announceDaysBefore: 7
  };

  if (!CONFIG.start || !CONFIG.end || !CONFIG.reopen) return;

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $  = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  function localISODate(d) {
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + day;
  }

  function addDays(iso, delta) {
    var parts = iso.split('-').map(Number);
    var d = new Date(parts[0], parts[1] - 1, parts[2]);
    d.setDate(d.getDate() + delta);
    return localISODate(d);
  }

  function formatDate(iso) {
    var parts = iso.split('-').map(Number);
    var d = new Date(parts[0], parts[1] - 1, parts[2]);
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  }

  var todayStr = localISODate(new Date());
  var announceStart = addDays(CONFIG.start, -(CONFIG.announceDaysBefore || 0));

  var phase = null;
  if (todayStr >= CONFIG.start && todayStr <= CONFIG.end) phase = 'active';
  else if (todayStr >= announceStart && todayStr < CONFIG.start) phase = 'announce';
  if (!phase) return;

  var startLabel = formatDate(CONFIG.start);
  var endLabel = formatDate(CONFIG.end);
  var reopenLabel = formatDate(CONFIG.reopen);

  var dismissKey = 'cd_break_dismissed_' + phase + '_' + CONFIG.start + '_' + CONFIG.end;

  /* ---------- Banner ---------- */
  function buildBanner() {
    if (sessionStorage.getItem(dismissKey)) return null;

    var message = phase === 'announce'
      ? 'Heads up — we\'ll be closed for a short break from <strong>' + startLabel + '</strong> ' +
        'to <strong>' + endLabel + '</strong>. Back <strong>' + reopenLabel + '</strong>.'
      : 'We\'re taking a short break from <strong>' + startLabel + '</strong> ' +
        'to <strong>' + endLabel + '</strong>. Back and taking orders <strong>' + reopenLabel + '</strong>.';
    var ariaLabel = phase === 'announce' ? 'Upcoming closure notice' : 'Temporary closure notice';

    var banner = document.createElement('div');
    banner.id = 'breakBanner';
    banner.className = 'break-banner';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', ariaLabel);
    banner.innerHTML =
      '<div class="break-banner__inner">' +
        '<span class="break-banner__dot" aria-hidden="true"></span>' +
        '<p class="break-banner__text">' + message + '</p>' +
      '</div>' +
      '<button type="button" class="break-banner__dismiss" aria-label="Dismiss notice">' +
        '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/></svg>' +
      '</button>';

    document.body.insertBefore(banner, document.body.firstChild);

    var setHeight = function () {
      document.documentElement.style.setProperty('--banner-h', banner.offsetHeight + 'px');
    };
    setHeight();
    document.body.classList.add('has-break-banner');
    window.addEventListener('resize', setHeight, { passive: true });

    var dismiss = function () {
      var delay = prefersReduced ? 0 : 480;
      banner.classList.add('is-dismissing');
      document.documentElement.style.setProperty('--banner-h', '0px');
      document.body.classList.remove('has-break-banner');
      window.removeEventListener('resize', setHeight);
      sessionStorage.setItem(dismissKey, '1');
      setTimeout(function () { banner.remove(); }, delay);
    };
    $('.break-banner__dismiss', banner).addEventListener('click', dismiss);

    return banner;
  }

  buildBanner();

  /* ---------- Everything below only applies once the break has actually
     started — ordering and hours stay normal during the heads-up phase. ---------- */
  if (phase !== 'active') return;

  /* ---------- Pause the "Order Online" CTAs ---------- */
  var orderLinks = $$('a[href*="heartland.us"]');
  orderLinks.forEach(function (a) {
    a.classList.add('is-paused');
    a.setAttribute('aria-disabled', 'true');
    a.setAttribute('aria-label', 'Online ordering paused — reopens ' + reopenLabel);
    for (var i = 0; i < a.childNodes.length; i++) {
      var node = a.childNodes[i];
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() === 'Order Online') {
        node.textContent = 'Reopens ' + reopenLabel;
        break;
      }
    }
    var srOnly = $('.sr-only', a);
    if (srOnly) srOnly.style.display = 'none';
    a.addEventListener('click', function (e) { e.preventDefault(); });
  });

  /* ---------- Hero schedule line ---------- */
  var heroSchedule = $('#heroSchedule');
  if (heroSchedule) {
    heroSchedule.textContent = 'On a break — back ' + reopenLabel;
  }

  /* ---------- Visit section hours ---------- */
  var visitHours = $('#visitHours');
  if (visitHours) {
    var note = document.createElement('span');
    note.className = 'mt-1 block text-sm text-gold-400';
    note.textContent = 'Currently on a break, reopening ' + reopenLabel;
    visitHours.insertBefore(note, visitHours.firstChild);
  }
})();
