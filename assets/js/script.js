// ヘッダー・ボタンの要素を取得
const header = document.getElementById("js-header");
const button = document.getElementById("js-headerButton");

// ボタンをクリックした時の処理
button.addEventListener("click", () => {
  header.classList.toggle("is-open");
  // document.body.classList.toggle("is-fixed");
});