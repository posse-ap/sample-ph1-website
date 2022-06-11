'use strict';

{
  // 回答一覧
  const CORRECT_ANSWERS = [
    {
      index: 1,
      value: '約79万人'
    },
    {
      index: 2,
      value: 'X-TECH'
    },
    {
      index: 0,
      value: 'Internet of Things'
    },
    {
      index: 0,
      value: 'Society 5.0'
    },
    {
      index: 0,
      value: 'Web3.0'
    },
    {
      index: 1,
      value: '約5倍'
    }
  ];

  // すべての問題を取得
  const allQuiz  = document.querySelectorAll('.js-quiz');

  // buttonタグにdisabledを付与
  const setDisabled = answers => {
    answers.forEach(answer => {
      answer.disabled = true;
    })
  }
  // trueかfalseで出力する文字列を出し分ける
  const setTitle = boolean => boolean ? '正解！' : '不正解...'
  const setClassName = boolean => boolean ?  'is-correct' : 'is-incorrect';

  // 各問題の中での処理
  allQuiz.forEach(quiz => {
    const answers = quiz.querySelectorAll('.js-answer');
    const selectedQuiz = Number(quiz.getAttribute('data-quiz'));
    const answerBox = quiz.querySelector('.js-answerBox');
    const answerTitle = quiz.querySelector('.js-answerTitle');
    const answerText = quiz.querySelector('.js-answerText');

    answers.forEach(answer => {
      answer.addEventListener('click', () => {
        answer.classList.add('is-selected');
        const selectedAnswer = Number(answer.getAttribute('data-answer'))

        // 全てのボタンを非活性化
        setDisabled(answers);
        // 正解ならtrue, 不正解ならfalseをcheckCorrectに格納
        const checkCorrect = CORRECT_ANSWERS[selectedQuiz].index === selectedAnswer

        // 回答欄にテキストやclass名を付与
        answerTitle.innerText = setTitle(checkCorrect);
        answerText.innerText = CORRECT_ANSWERS[selectedQuiz].value;
        answerBox.classList.add(setClassName(checkCorrect));
      })
    })
  });
}
