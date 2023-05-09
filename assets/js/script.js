"use strict";

/**
 * ハンバーガーメニュー
 * @see https://developer.mozilla.org/ja/docs/Web/API/Element/classList
 * @see https://developer.mozilla.org/ja/docs/Web/API/Document/body
 *
 * @description ヘッダーのハンバーガーメニューをクリックしたらヘッダーとbodyにクラスを付与する
 */
// ヘッダー・ボタンの要素を取得
const header = document.getElementById("js-header");
const button = document.getElementById("js-headerButton");

// ボタンをクリックした時の処理
button.addEventListener("click", () => {
  header.classList.toggle("is-open");
  document.body.classList.toggle("is-fixed");
});

/**
 * ヘッダーの透過
 * @see https://developer.mozilla.org/ja/docs/Web/API/Window/scrollY
 * @see https://developer.mozilla.org/ja/docs/Web/API/Element/clientHeight
 *
 * @description スクロールしてメインビジュアルを過ぎる時にヘッダーにクラスを付与する
 */
// メインビジュアルの要素を取得
const mainVisual = document.getElementById("js-mainVisual");

// スクロールした時の処理
window.addEventListener("scroll", () => {
  // [スクロールした分の高さ] が [メインビジュアルの高さ - ヘッダーの高さ] より大きい時
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
// オプションで利用する固定値の設定
const cardWidth = 320;
const padding = 28;
const gap = 40;

// オプションの設定
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
 * @see https://developer.mozilla.org/ja/docs/Web/API/Intersection_Observer_API
 */
// 交差を監視する要素を取得
const targets = document.querySelectorAll('[data-scroll]');

// 範囲の設定
const options = {
  root: null,
  rootMargin: '-50px 0px',
  threshold: 0
};

// 交差したときに実行する関数
const intersect = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { // 監視中の要素が交差した状態ならtrue
      // 監視中の要素が交差したときの処理
      entry.target.classList.add('is-show');
    }
  });
}

// Intersection Observerを使えるようにする
const observer = new IntersectionObserver(intersect, options);

// 対象の要素をそれぞれ監視する
targets.forEach(target => {
  observer.observe(target);
});

