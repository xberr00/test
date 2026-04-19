/* ═══════════════════════════════════════════════════
   BERUNENKO SITE — script.js
   Handles: language switching, navbar scroll,
   mobile menu, carousel (touch + arrows + dots),
   scroll-to-top button
════════════════════════════════════════════════════ */

/* ─── DATA ─────────────────────────────────────────── */
const TESTIMONIALS = {
  uk: [
    { author: 'Ірина',    text: 'Звернулася з проблемою взаємин із батьками. Завдяки Вероніці з іншого ракурсу поглянула на багато речей. Вероніка схиляє до себе, я розуміла що мене уважно слухають. Дякую за розуміння та підтримку на консультаціях.' },
    { author: 'Вікторія', text: 'Звернулася до психолога із проблемою тривожності. Отримала рекомендації та поради не лише під час консультації, а й після проведеної сесії. Дуже уважний та чуйний психолог. Дякую Вероніці за консультацію!' },
    { author: 'Марина',   text: 'Вероніка дуже грамотний фахівець, допомогла мені пройти життєві труднощі, дякую за професіоналізм. Рекомендую саме Вероніку, вона дає усвідомлення, що будь-які наші стани і проблеми нам підвладні. Змінила життя на краще, почала більше любити себе та близьких.' },
    { author: 'Оксана',   text: 'Рекомендую Вероніку як психолога. Я ще в терапії, але вже відзначила позитивну динаміку. Вероніка глибока, душевна людина та професіонал своєї справи. Поліпшився сон, почала розуміти свої бажання та поступово налагоджую стосунки з чоловіком.' },
    { author: 'Анна',     text: 'Дуже вдячна Вероніці, вже з першим же сеансом відчула ефект від консультацій. Вона допомогла звернути увагу на речі, про які навіть не думала. Допомогла розібратися із самооцінкою та власним баченням світу. Легке спілкування, цікавий діалог.' },
    { author: 'Аліна',    text: 'Звернулась з різними проблемами, зокрема сильною застресованістю через перенавантаження. Вероніка допомогла мені більш позитивно подивитись на ситуацію, набути більшої впевненості в собі. А також порадила дійову методику, як справлятися зі стресом. Я стала почувати себе краще.' },
    { author: 'Любаша',   text: 'Звернулася до Вероніки з проблемою взаємовідносин з батьками, не поваги та не любові до самої себе, проблемою стосунків. За коротку годину, проведену з Веронікою - відкрила більшу частину проблем, які йшли з дитинства, трохи навчилася і далі працюю над собою сприймати всі проблеми, емоції, страхи з іншого боку, налагоджує відносини з батьками, маю ціль і надалі працювати над собою, навчилася насамперед ставити собі на перше місце і свої бажання, любити і поважати собі! Дуже подобається працювати з Веронікою – чутлива, поважна, відкрита людина своєї справи!' },
  ],
  ru: [
    { author: 'Ирина',    text: 'Обратилась с проблемой взаимоотношений с родителями. Благодаря Веронике с другого ракурса взглянула на многие вещи. Вероника располагает к себе, я понимала что меня внимательно слушают. Спасибо за понимание и поддержку на консультациях.' },
    { author: 'Виктория', text: 'Обратилась к психологу с проблемой тревожности. Получила рекомендации и советы не только во время консультации, но и после проведенной сессии. Очень внимательный и отзывчивый психолог. Спасибо Веронике за консультацию!' },
    { author: 'Марина',   text: 'Вероника очень грамотный специалист, помогла мне пройти жизненные трудности, спасибо за профессионализм. Рекомендую именно Веронику, она дает осознание, что любые наши состояния и проблемы нам подвластны. Изменила жизнь к лучшему.' },
    { author: 'Оксана',   text: 'Рекомендую Веронику как психолога. Я еще в терапии, но уже отметила положительную динамику. Вероника глубокий, душевный человек и профессионал своего дела. Улучшился сон, начала понимать свои желания и налаживаю отношения с мужем.' },
    { author: 'Анна',     text: 'Очень благодарна Веронике, после первого же сеанса почувствовала эффект от консультаций. Она помогла обратить внимание на вещи, о которых даже не думала. Помогла разобраться с самооценкой и собственным видением мира. Лёгкое общение, интересный диалог.' },
    { author: 'Алина',    text: 'Обратилась с разными проблемами, в том числе с сильным стрессом из-за перегрузки. Вероника помогла мне более позитивно взглянуть на ситуацию, обрести большую уверенность в себе. А также посоветовала действенную методику, как справляться со стрессом. Я стала чувствовать себя лучше.' },
    { author: 'Любаша',   text: 'Обратилась к Веронике с проблемой взаимоотношений с родителями, неуважения и нелюбви к самой себе, проблемой отношений. За короткий час, проведённый с Вероникой, открыла большую часть проблем, которые шли с детства, немного научилась и продолжаю работать над собой — воспринимать все проблемы, эмоции, страхи с другой стороны. Налаживаю отношения с родителями, ставлю цель и дальше работать над собой, научилась прежде всего ставить на первое место себя и свои желания, любить и уважать себя! Очень нравится работать с Вероникой — чуткий, уважительный, открытый человек своего дела!' },
  ]
};

/* ─── STATE ─────────────────────────────────────────── */
let currentLang = document.documentElement.lang || 'uk';
let carouselIdx  = 0;
let menuOpen     = false;

/* ─── INIT ──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  document.getElementById('footerYear').textContent = new Date().getFullYear();

  // Build carousel
  buildCarousel();

  // Navbar scroll listener
  window.addEventListener('scroll', onScroll, { passive: true });

  // Scroll-to-top listener
  window.addEventListener('scroll', toggleScrollTop, { passive: true });

  // Carousel touch swipe
  const track = document.getElementById('carouselTrack');
  let touchX = null, touchY = null;
  track.addEventListener('touchstart', e => {
    touchX = e.touches[0].clientX;
    touchY = e.touches[0].clientY;
  }, { passive: true });
  track.addEventListener('touchend', e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    const dy = e.changedTouches[0].clientY - touchY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      dx < 0 ? carouselGo(carouselIdx + 1) : carouselGo(carouselIdx - 1);
    }
    touchX = null;
  }, { passive: true });

  // Carousel buttons
  document.getElementById('carouselPrev').addEventListener('click', () => carouselGo(carouselIdx - 1));
  document.getElementById('carouselNext').addEventListener('click', () => carouselGo(carouselIdx + 1));
});

/* ─── NAVBAR SCROLL ─────────────────────────────────── */
function onScroll() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

/* ─── MOBILE MENU ───────────────────────────────────── */
function toggleMenu() {
  menuOpen = !menuOpen;
  const menu  = document.getElementById('mobileMenu');
  const iconM = document.getElementById('icon-menu');
  const iconC = document.getElementById('icon-close');

  if (menuOpen) {
    menu.classList.remove('hidden');
    iconM.classList.add('hidden');
    iconC.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
    iconM.classList.remove('hidden');
    iconC.classList.add('hidden');
  }
}

function closeMenu() {
  menuOpen = false;
  document.getElementById('mobileMenu').classList.add('hidden');
  document.getElementById('icon-menu').classList.remove('hidden');
  document.getElementById('icon-close').classList.add('hidden');
}

/* ─── SCROLL TO SECTION ─────────────────────────────── */
function scrollToSection(id) {
  closeMenu();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* ─── CAROUSEL ──────────────────────────────────────── */
function buildCarousel() {
  const reviews = TESTIMONIALS[currentLang];
  const dotsEl  = document.getElementById('carouselDots');

  // Clear dots
  dotsEl.innerHTML = '';

  // Build dots
  reviews.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'dot' + (i === carouselIdx ? ' active' : '');
    btn.setAttribute('aria-label', `Слайд ${i + 1}`);
    btn.addEventListener('click', () => carouselGo(i));
    dotsEl.appendChild(btn);
  });

  // Render current slide
  renderSlide();
}

function renderSlide() {
  const reviews  = TESTIMONIALS[currentLang];
  const review   = reviews[carouselIdx];
  document.getElementById('reviewText').textContent   = review.text;
  document.getElementById('reviewAuthor').textContent = review.author;

  // Update dots
  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i === carouselIdx);
  });
}

function carouselGo(idx) {
  const total  = TESTIMONIALS[currentLang].length;
  carouselIdx  = ((idx % total) + total) % total;
  renderSlide();
}

/* ─── SCROLL TO TOP ─────────────────────────────────── */
function toggleScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (window.scrollY > 400) {
    btn.classList.remove('hidden');
  } else {
    btn.classList.add('hidden');
  }
}



/* ─── Education collapsible groups ──────────────────── */
function toggleEduGroup(id) {
  if (window.innerWidth >= 768) return;
  const group  = document.getElementById(id);
  const header = group.querySelector('.edu-group-header');
  const body   = group.querySelector('.edu-group-body');
  const isOpen = header.classList.contains('open');
  if (isOpen) {
    header.classList.remove('open');
    header.setAttribute('aria-expanded', 'false');
    body.style.display = 'none';
  } else {
    header.classList.add('open');
    header.setAttribute('aria-expanded', 'true');
    body.style.display = 'block';
  }
}

/* ─── Education boxes ─────────────────────────────── */
  // Opens diploma image when you clic on education boxes
function openDiploma(src) {
  document.getElementById('diplomaImg').src = src;
  const lb = document.getElementById('diplomaLightbox');
  lb.style.display = 'flex';
}
function closeDiploma() {
  document.getElementById('diplomaLightbox').style.display = 'none';
}
/* ─── Equalise education item heights across both groups ── */
function equaliseEduItems() {
  // Only apply on desktop
  if (window.innerWidth < 768) {
    // Reset any previously set heights on mobile
    document.querySelectorAll('.edu-group .education-item').forEach(el => {
      el.style.minHeight = '';
    });
    return;
  }

  const group1Items = document.querySelectorAll('#eduGroup1 .education-item');
  const group2Items = document.querySelectorAll('#eduGroup2 .education-item');
  const maxLen = Math.max(group1Items.length, group2Items.length);

  // Reset heights first so we measure natural height
  document.querySelectorAll('.edu-group .education-item').forEach(el => {
    el.style.minHeight = '';
  });

  // For each row position, set both items to the tallest one
  for (let i = 0; i < maxLen; i++) {
    const a = group1Items[i];
    const b = group2Items[i];
    if (a && b) {
      const maxH = Math.max(a.offsetHeight, b.offsetHeight);
      a.style.minHeight = maxH + 'px';
      b.style.minHeight = maxH + 'px';
    }
  }
}

// Run on load and on resize
window.addEventListener('DOMContentLoaded', equaliseEduItems);
window.addEventListener('resize', equaliseEduItems);

/* ─── Equalise pricing item heights across all cards ── */
function equalisePricingItems() {
  if (window.innerWidth < 768) {
    document.querySelectorAll('.pricing-features li').forEach(li => {
      li.style.minHeight = '';
    });
    return;
  }

  const cards = document.querySelectorAll('.pricing-card');

  // Reset all heights first
  document.querySelectorAll('.pricing-features li').forEach(li => {
    li.style.minHeight = '';
  });

  // Find max number of items across all cards
  let maxItems = 0;
  cards.forEach(card => {
    const items = card.querySelectorAll('.pricing-features li');
    if (items.length > maxItems) maxItems = items.length;
  });

  // For each row position, set all cards' item to the tallest one
  for (let i = 0; i < maxItems; i++) {
    let maxH = 0;
    cards.forEach(card => {
      const li = card.querySelectorAll('.pricing-features li')[i];
      if (li) maxH = Math.max(maxH, li.offsetHeight);
    });
    cards.forEach(card => {
      const li = card.querySelectorAll('.pricing-features li')[i];
      if (li) li.style.minHeight = maxH + 'px';
    });
  }
}

window.addEventListener('DOMContentLoaded', equalisePricingItems);
window.addEventListener('resize', equalisePricingItems);

function equalisePricingItems() {
  if (window.innerWidth < 768) {
    document.querySelectorAll('.pricing-card h3, .pricing-card .pricing-price, .pricing-features li').forEach(el => {
      el.style.minHeight = '';
    });
    return;
  }

  const cards = document.querySelectorAll('.pricing-card');

  // Reset first
  document.querySelectorAll('.pricing-card h3, .pricing-card .pricing-price, .pricing-features li').forEach(el => {
    el.style.minHeight = '';
  });

  // Use setTimeout to ensure browser has finished rendering
  setTimeout(() => {
    // Equalise h3
    let maxH3 = 0;
    cards.forEach(c => maxH3 = Math.max(maxH3, c.querySelector('h3').offsetHeight));
    cards.forEach(c => c.querySelector('h3').style.minHeight = maxH3 + 'px');

    // Equalise pricing-price
    let maxPrice = 0;
    cards.forEach(c => maxPrice = Math.max(maxPrice, c.querySelector('.pricing-price').offsetHeight));
    cards.forEach(c => c.querySelector('.pricing-price').style.minHeight = maxPrice + 'px');

    // Equalise each li row
    let maxItems = 0;
    cards.forEach(c => maxItems = Math.max(maxItems, c.querySelectorAll('.pricing-features li').length));
    for (let i = 0; i < maxItems; i++) {
      let maxLi = 0;
      cards.forEach(c => {
        const li = c.querySelectorAll('.pricing-features li')[i];
        if (li) maxLi = Math.max(maxLi, li.offsetHeight);
      });
      cards.forEach(c => {
        const li = c.querySelectorAll('.pricing-features li')[i];
        if (li) li.style.minHeight = maxLi + 'px';
      });
    }
  }, 200);
}

window.addEventListener('load', equalisePricingItems);
window.addEventListener('resize', () => {
  document.querySelectorAll('.pricing-card h3, .pricing-card .pricing-price, .pricing-features li').forEach(el => {
    el.style.minHeight = '';
  });
  equalisePricingItems();
});