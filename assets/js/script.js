// 問題1
let aboutJa = document.getElementById('title-ja');
aboutJa.innerHTML = 'POSSEとは - Edited';

// 問題2
let aboutEn = document.querySelector('.title-en');
aboutEn.innerHTML = 'About POSSE - Edited';

// 問題3
let eventJa = document.getElementsByClassName('title-ja');
eventJa[1].style.color = "#FF0000";

// 問題4
let dailyEn = document.getElementsByClassName('title-en');
dailyEn[2].style.fontSize = "10px";

// 問題5
let testH2 = document.createElement('h2');
let testTitle = document.createElement('span');
testH2.className = 'title';
testTitle.innerHTML = 'テスト見出し';
testTitle.className = 'title-ja';

let daily = document.getElementById('daily');
testH2.appendChild(testTitle);
daily.appendChild(testH2);