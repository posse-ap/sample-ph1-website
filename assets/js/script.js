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