/* ══════════════════════════════════════════════════════════
   IMPERIUM SMILE v2 — JavaScript
══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── LOADER ── */
  const loader = document.getElementById('loader');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    loader.classList.add('gone');
    document.body.style.overflow = '';
    // trigger hero animations
    document.querySelectorAll('.hero-content .reveal-hero').forEach((el, i) => {
      setTimeout(() => el.classList.add('in'), 200 + i * 130);
    });
  }, 2400);

  /* ── PROGRESS BAR ── */
  const pb = document.getElementById('progressBar');
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    pb.style.width = pct + '%';
  }, { passive: true });

  /* ── CURSOR ── */
  const cur = document.getElementById('cursor');
  const fol = document.getElementById('cursorFollower');
  let mx = 0, my = 0, fx = 0, fy = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cur.style.left = mx + 'px'; cur.style.top = my + 'px'; });
  (function loop() {
    fx += (mx - fx) * .11; fy += (my - fy) * .11;
    fol.style.left = fx + 'px'; fol.style.top = fy + 'px';
    requestAnimationFrame(loop);
  })();
  document.querySelectorAll('a,button,.svc-card,.gal-item,.team-card').forEach(el => {
    el.addEventListener('mouseenter', () => { cur.style.transform = 'translate(-50%,-50%) scale(2.5)'; fol.style.transform = 'translate(-50%,-50%) scale(1.8)'; fol.style.opacity = '.25'; });
    el.addEventListener('mouseleave', () => { cur.style.transform = 'translate(-50%,-50%) scale(1)'; fol.style.transform = 'translate(-50%,-50%) scale(1)'; fol.style.opacity = '.7'; });
  });

  /* ── PARTICLES ── */
  const pc = document.getElementById('particles');
  function mkParticle() {
    const p = document.createElement('div');
    p.className = 'particle';
    const s = 1 + Math.random() * 2.5;
    p.style.cssText = `left:${Math.random()*100}%;width:${s}px;height:${s}px;animation-duration:${7+Math.random()*10}s;animation-delay:${Math.random()*4}s`;
    pc.appendChild(p);
    setTimeout(() => p.remove(), 20000);
  }
  for (let i = 0; i < 36; i++) setTimeout(mkParticle, Math.random() * 4000);
  setInterval(mkParticle, 700);

  /* ── NAVBAR ── */
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50), { passive: true });

  /* ── HAMBURGER ── */
  const hb = document.getElementById('hamburger');
  const nl = document.getElementById('navLinks');
  hb.addEventListener('click', () => { hb.classList.toggle('open'); nl.classList.toggle('open'); });
  nl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { hb.classList.remove('open'); nl.classList.remove('open'); }));

  /* ── HERO SLIDESHOW ── */
  const slides = document.querySelectorAll('.slide');
  const sdots  = document.querySelectorAll('.slide-dot');
  let cs = 0;
  function goSlide(n) {
    slides[cs].classList.remove('active'); sdots[cs].classList.remove('active');
    cs = (n + slides.length) % slides.length;
    slides[cs].classList.add('active'); sdots[cs].classList.add('active');
  }
  sdots.forEach(d => d.addEventListener('click', () => goSlide(+d.dataset.idx)));
  setInterval(() => goSlide(cs + 1), 5500);

  /* ── SCROLL REVEAL ── */
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal-up,.reveal-left,.reveal-right').forEach(el => ro.observe(el));

  /* ── COUNTERS ── */
  function countUp(el) {
    const target = +el.dataset.target;
    const dur = 2000;
    const start = performance.now();
    const tick = now => {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.floor((1 - Math.pow(1-p, 3)) * target);
      if (p < 1) requestAnimationFrame(tick); else el.textContent = target;
    };
    requestAnimationFrame(tick);
  }
  const co = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { countUp(e.target); co.unobserve(e.target); } });
  }, { threshold: .5 });
  document.querySelectorAll('[data-target]').forEach(el => co.observe(el));

  /* ── TESTIMONIALS ── */
  const tw   = document.getElementById('testiWrap');
  const tdots = document.querySelectorAll('.tdot');
  const cards = tw.querySelectorAll('.testi-card');
  let ct = 0;
  function goTesti(n) {
    tdots[ct].classList.remove('active');
    ct = (n + cards.length) % cards.length;
    tw.style.transform = `translateX(-${ct * 100}%)`;
    tdots[ct].classList.add('active');
  }
  document.getElementById('tPrev').addEventListener('click', () => goTesti(ct - 1));
  document.getElementById('tNext').addEventListener('click', () => goTesti(ct + 1));
  tdots.forEach((d, i) => d.addEventListener('click', () => goTesti(i)));
  setInterval(() => goTesti(ct + 1), 6000);

  /* ── BACK TO TOP ── */
  const bt = document.getElementById('btop');
  window.addEventListener('scroll', () => bt.classList.toggle('on', window.scrollY > 500), { passive: true });
  bt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ── NAV ACTIVE HIGHLIGHT ── */
  const secs = document.querySelectorAll('section[id]');
  const navAs = document.querySelectorAll('.nav-links a[href^="#"]');
  const ho = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navAs.forEach(a => {
          a.style.color = a.getAttribute('href') === '#' + e.target.id ? 'var(--g)' : '';
          a.style.setProperty('--aw', a.getAttribute('href') === '#' + e.target.id ? '100%' : '0');
        });
      }
    });
  }, { threshold: .35 });
  secs.forEach(s => ho.observe(s));

  /* ── PARALLAX BG ── */
  const pqBg = document.querySelector('.pq-bg');
  if (pqBg) {
    window.addEventListener('scroll', () => {
      const r = pqBg.parentElement.getBoundingClientRect();
      pqBg.style.transform = `translateY(${-r.top * 0.28}px)`;
    }, { passive: true });
  }

  /* ── GALLERY LIGHTBOX ── */
  document.querySelectorAll('.gal-item').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.querySelector('img').src;
      const caption = item.querySelector('.gal-caption span')?.textContent || '';
      const lb = document.createElement('div');
      lb.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.96);z-index:9000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;cursor:pointer;animation:lbIn .3s ease';
      lb.innerHTML = `<img src="${src}" style="max-width:90vw;max-height:80vh;object-fit:contain;box-shadow:0 40px 100px rgba(0,0,0,.8)" /><p style="font-size:.7rem;letter-spacing:.3em;text-transform:uppercase;color:var(--g)">${caption} &nbsp;·&nbsp; cliquer pour fermer</p>`;
      document.body.appendChild(lb);
      document.body.style.overflow = 'hidden';
      lb.addEventListener('click', () => { lb.remove(); document.body.style.overflow = ''; });
    });
  });

  /* ── FORM ── */
  const cf = document.getElementById('cForm');
  const cfBtn = document.getElementById('cfSubmit');
  const cfOk  = document.getElementById('cfSuccess');
  if (cf) {
    cf.addEventListener('submit', e => {
      e.preventDefault();
      cfBtn.style.opacity = '.6'; cfBtn.style.pointerEvents = 'none';
      setTimeout(() => {
        cf.style.transition = 'opacity .4s'; cf.style.opacity = '0';
        setTimeout(() => { cf.style.display = 'none'; cfOk.classList.add('show'); }, 420);
      }, 900);
    });
  }

  /* ── LANGUAGE TOGGLE ── */
  const langBtn = document.getElementById('langToggle');
  let lang = 'fr';
  function applyLang(l) {
    lang = l;
    langBtn.textContent = l === 'fr' ? 'EN' : 'FR';
    document.documentElement.lang = l;
    document.title = l === 'fr' ? "Emma Shine — Agence d'Hôtesses & Hôtes de Prestige" : "Emma Shine — Premium Hostess & Host Agency";
    document.querySelectorAll('[data-fr]').forEach(el => {
      const v = el.getAttribute(l === 'fr' ? 'data-fr' : 'data-en');
      if (!v) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = v;
      else if (el.tagName === 'OPTION') el.textContent = v;
      else el.innerHTML = v;
    });
  }
  langBtn.addEventListener('click', () => applyLang(lang === 'fr' ? 'en' : 'fr'));

  /* ── INJECT @keyframes for lightbox ── */
  const ks = document.createElement('style');
  ks.textContent = '@keyframes lbIn{from{opacity:0}to{opacity:1}}';
  document.head.appendChild(ks);

});
