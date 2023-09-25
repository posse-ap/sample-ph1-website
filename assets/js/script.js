/* ハンバーガーメニュー */

// ヘッダー・ボタンの要素を取得
const header = document.getElementById("js-header");
const button = document.getElementById("js-headerButton");
const navLinks = document.querySelectorAll('.header-navLink');

// ボタンをクリックした時の処理
button.addEventListener("click", () => {
  header.classList.toggle("is-open");
});

// メニューの各リンクをクリックしたときの処理
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    header.classList.remove('is-open');
  });
});

/* ヘッダーの透過 */

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

/* スライダー */
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

new Splide('#js-eventSlide', eventSlideOptions).mount();
new Splide('#js-dailySlide', dailySlideOptions).mount();