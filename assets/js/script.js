"use strict";

// ハンバーガーメニューの開閉
const header = document.getElementById("js-header");
const button = document.getElementById("js-headerButton");

button.addEventListener("click", () => {
  header.classList.toggle("is-open");
  document.body.classList.toggle("is-fixed");
});

// メインビジュアルを超えたらヘッダーにクラスを付与
const mainVisual = document.getElementById("js-mainVisual");
const headerLogo = document.getElementById("js-headerLogo");
const headerButton = document.getElementById("js-headerButton");

window.addEventListener("scroll", () => {
  if (window.scrollY > mainVisual.clientHeight - header.clientHeight) {
    header.classList.remove("is-transparent");
  } else {
    header.classList.add("is-transparent");
  }
});

/**
 * スライダー
 * @see  https://splidejs.com/
 */
// オプションの設定
const cardWidth = 320;
const padding = 28;
const gap = 40;
const eventSlideOptions = {
  type: 'loop',
  gap: '40px',
  width: cardWidth * 3 + padding * 2 + gap * 2,
  perPage: 3,
  padding: {
    right: padding,
    left : padding,
  },
  pagination: false,
  breakpoints: {
    768: {
      pagination: true,
      perPage: 1,
    }
  }
}
const dailySlideOptions = {
  type: 'loop',
  gap: '40px',
  padding: {
    right: padding,
    left : padding,
  },
  destroy: true,
  breakpoints: {
    768: {
      destroy: false
    }
  }
}

// スライダーの初期化
new Splide( '#js-eventSlide', eventSlideOptions ).mount();
new Splide( '#js-dailySlide', dailySlideOptions ).mount();

/**
 * スクロールで要素をフェードイン
 */
// 交差を監視する要素を準備
const targets = document.querySelectorAll('[data-scroll]');

// 範囲の設定
const options = {
  root: null,
  rootMargin: '-50px 0px',
  threshold: 0
};

// Intersection Observerを使えるようにする
const observer = new IntersectionObserver(intersect, options);

// 対象の要素をそれぞれ監視する
targets.forEach(target => {
  observer.observe(target);
});

// 交差したときに実行する関数
function intersect(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) { // 監視中の要素が交差した状態ならtrue
      // 監視中の要素が交差したときの処理
      entry.target.classList.add('is-show');
    }
  });
}
