// html, css, js 로딩완료
$(document).ready();

// html, css, js, 멀티미디어까지 로딩완료
window.onload = function () {
  // visual 슬라이드
  new Swiper('.sw-visual', {
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
      prevEl: '.sw-visual-prev',
      nextEl: '.sw-visual-next'
    }
  });

  // items 슬라이드
  new Swiper('.sw-items', {
    loop:true,
    speed: 800,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },

    navigation: {
      prevEl: '.sw-items-prev',
      nextEl: '.sw-items-next'
    },

    pagination: {
      el: '.sw-items-pg'
    }

  });

  // Bevarage 슬라이드
  new Swiper('.sw-bevarage', {
    loop: true, 
    speed: 1000,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: '.sw-bevarage-prev',
      nextEl: '.sw-bevarage-next'
    },

    pagination: {
      el: '.sw-bevarage-pg',
      type: 'fraction'
    }
  });
}