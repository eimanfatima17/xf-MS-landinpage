const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Headline: each word slides up in turn */
const headline = document.getElementById('heroHeadline');
if (headline && !reduced) {
  const fragment = document.createDocumentFragment();
  const step = 0.055;
  let delay = 0;

  headline.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent.split(/(\s+)/).forEach((chunk) => {
        if (chunk.trim() === '') {
          fragment.appendChild(document.createTextNode(chunk));
          return;
        }
        const wrap = document.createElement('span');
        wrap.className = 'word-reveal';
        const inner = document.createElement('span');
        inner.textContent = chunk;
        inner.style.setProperty('--wd', delay.toFixed(3) + 's');
        delay += step;
        wrap.appendChild(inner);
        fragment.appendChild(wrap);
      });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // the italic "whole" span counts as one word
      const wrap = document.createElement('span');
      wrap.className = 'word-reveal';
      const inner = node.cloneNode(true);
      inner.style.setProperty('--wd', delay.toFixed(3) + 's');
      delay += step;
      wrap.appendChild(inner);
      fragment.appendChild(wrap);
    }
  });

  headline.innerHTML = '';
  headline.appendChild(fragment);
}

/* Hero dashboard: tilted back at the top, flattens as you scroll, follows the mouse on hover */
const heroFrame = document.getElementById('heroFrame');
if (heroFrame && !reduced) {
  let ticking = false;
  let scrollAngle = 20;
  let hovering = false;

  const applyTilt = () => {
    scrollAngle = Math.max(0, 20 - window.scrollY * 0.13);
    if (!hovering) heroFrame.style.transform = `perspective(1400px) rotateX(${scrollAngle}deg)`;
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(applyTilt);
      }
    },
    { passive: true },
  );

  heroFrame.addEventListener('mouseenter', () => {
    hovering = true;
    heroFrame.style.transition = 'transform .15s ease-out';
  });

  heroFrame.addEventListener('mousemove', (e) => {
    const rect = heroFrame.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    heroFrame.style.transform = `perspective(1400px) rotateX(${scrollAngle - py * 10}deg) rotateY(${px * 12}deg)`;
  });

  heroFrame.addEventListener('mouseleave', () => {
    hovering = false;
    heroFrame.style.transition = 'transform .5s cubic-bezier(.22,1,.36,1)';
    heroFrame.style.transform = `perspective(1400px) rotateX(${scrollAngle}deg)`;
  });

  applyTilt();
}

/* Mobile menu */
const header = document.getElementById('hdr');
const navBtn = document.getElementById('navBtn');
if (header && navBtn) {
  navBtn.addEventListener('click', () => {
    const open = header.classList.toggle('open');
    navBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  header.querySelectorAll('.mobile-menu a').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('open');
      navBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* Marquees: append a copy of every item so the CSS loop has no gap */
['logoTrack', 'modTrack', 'testiCol1', 'testiCol2', 'testiCol3'].forEach((id) => {
  const track = document.getElementById(id);
  if (!track) return;

  [...track.children].forEach((child) => {
    const clone = child.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    if (clone.matches('a,button')) clone.setAttribute('tabindex', '-1');
    clone.querySelectorAll('a,button').forEach((el) => el.setAttribute('tabindex', '-1'));
    track.appendChild(clone);
  });
});

/* Bar chart + counters */
function runBars(scope) {
  (scope || document).querySelectorAll('.bar span').forEach((bar) => {
    const height = bar.dataset.h + '%';
    if (reduced) {
      bar.style.height = height;
      return;
    }
    bar.style.height = '0';
    requestAnimationFrame(() => {
      setTimeout(() => {
        bar.style.height = height;
      }, 40);
    });
  });
}

function runCount(el) {
  if (el.dataset.done) return;
  el.dataset.done = '1';

  const target = parseFloat(el.dataset.count);
  const decimals = parseInt(el.dataset.decimals || '0', 10);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';

  if (reduced) {
    el.textContent = prefix + target.toFixed(decimals) + suffix;
    return;
  }

  const start = performance.now();
  const duration = 1300;

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const value = target * (1 - Math.pow(1 - progress, 3));
    el.textContent = prefix + (decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString('en-US')) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* Portal tabs */
const tabs = [...document.querySelectorAll('.tab')];

function activateTab(name, focusTab) {
  let target = null;

  tabs.forEach((tab) => {
    const match = tab.dataset.tab === name;
    tab.setAttribute('aria-selected', match ? 'true' : 'false');
    tab.setAttribute('tabindex', match ? '0' : '-1');
    if (match) target = tab;
  });

  document.querySelectorAll('.panel').forEach((panel) => {
    panel.classList.toggle('on', panel.dataset.panel === name);
  });

  const panel = document.querySelector('.panel.on');
  runBars(panel);
  if (focusTab && target) target.focus();
  return { panel };
}

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => activateTab(tab.dataset.tab));

  tab.addEventListener('keydown', (e) => {
    let next = -1;
    if (e.key === 'ArrowRight') next = (i + 1) % tabs.length;
    else if (e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = tabs.length - 1;

    if (next > -1) {
      e.preventDefault();
      activateTab(tabs[next].dataset.tab, true);
    }
  });
});

/* Module chips and cards: open a portal tab, or scroll to a section */
const portalTabNames = ['admin', 'manager', 'instructor', 'student'];

function gotoModule(target) {
  if (!target) return;
  const behavior = reduced ? 'auto' : 'smooth';

  if (portalTabNames.includes(target)) {
    const { panel } = activateTab(target);
    document.getElementById('portals')?.scrollIntoView({ behavior, block: 'start' });

    const frame = panel?.querySelector('.frame');
    if (frame) {
      frame.classList.remove('flash');
      void frame.offsetWidth; // reading this forces a reflow, otherwise the animation won't replay
      frame.classList.add('flash');
    }
  } else {
    document.getElementById(target)?.scrollIntoView({ behavior, block: 'start' });
  }
}

document.getElementById('modTrack')?.addEventListener('click', (e) => {
  const chip = e.target.closest('.mq-item');
  if (chip) gotoModule(chip.dataset.goto);
});

document.querySelectorAll('.mod[data-goto]').forEach((card) => {
  card.addEventListener('click', () => gotoModule(card.dataset.goto));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      gotoModule(card.dataset.goto);
    }
  });
});

/* Segmented buttons */
document.querySelectorAll('.seg').forEach((seg) => {
  const buttons = seg.querySelectorAll('button');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
    });
  });
});

/* Reveal on scroll */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      // skip slivers of tall elements peeking in at the edge
      const visibleEnough = entry.intersectionRatio >= 0.2 || entry.intersectionRect.height >= 120;
      if (!visibleEnough) return;

      const el = entry.target;
      if (el.classList.contains('reveal')) el.classList.add('visible');
      if (el.dataset.count !== undefined) runCount(el);
      if (el.id === 'heroFrame' || el.classList.contains('chartcard')) runBars(el);
      observer.unobserve(el);
    });
  },
  { threshold: [0, 0.05, 0.1, 0.15, 0.2], rootMargin: '0px 0px -40px 0px' },
);

document.querySelectorAll('.reveal, [data-count], .chartcard, #heroFrame').forEach((el) => observer.observe(el));

window.addEventListener('load', () => {
  document.querySelectorAll('#heroFrame [data-count]').forEach(runCount);
  runBars(heroFrame);
});
