'use strict';

{
  // 回答ボタンを取得
  const answers = document.querySelectorAll('.js-answer');

  answers.forEach(answer => {
    answer.addEventListener('click', () => {
      answer.classList.add('is-selected');
    })
  });
}
