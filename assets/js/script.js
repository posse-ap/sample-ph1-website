// ボタンをクリックした時の処理
const header = document.getElementById("js-header");
const button = document.getElementById("js-headerButton");

button.addEventListener("click", () => {
  header.classList.toggle("is-open");
});

// スクロールした時の処理
const mainVisual = document.getElementById("js-mainVisual");

window.addEventListener("scroll", () => {
  // [スクロールした分の高さ] が [メインビジュアルの高さ - ヘッダーの高さ] より大きい時
  if (window.scrollY > mainVisual.clientHeight - header.clientHeight) {
    header.classList.remove("is-transparent");
  } else {
    header.classList.add("is-transparent");
  }
});