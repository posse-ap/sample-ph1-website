// 問題１
console.log("こんにちは");
console.log("I am learning Javascript");

// 問題２
console.log(5 * 7);
console.log("2 + 5");
console.log(9 % 4);
console.log(3 ** 4);
console.log((10 - 4 * 2) / 2 + 9);
console.log((5 + 20) - 10 / 2 * 1);
console.log(6 * 5 + (10 / 2) - 5);

// 問題３
let variable = "POSSE";
console.log(variable);

// 問題４-1
let user = "ポッセ太郎";

if (user == "ポッセ太郎") {
  console.log("正解です！！");
} else if (user == "ポッセ次郎") {
  console.log("いまいちです！！");
} else {
  console.log("不正解です！！")
}

// 問題４-2
let age = 16;
let isStudent = true;

if (age < 18 && isStudent) {
  console.log("学生割引が適用されます。");
} else if (isStudent) {
  console.log("学生ですが、割引は適用されません。");
} else {
  console.log("学生割引は適用されません。");
}

// 問題5-1
for (let number = 5; number <= 15; number ++) {
  console.log(number);
}

// 問題5-2
for (let number = 1; number <= 20; number++) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

// 問題6-1
const introduce = function() {
  console.log("こんにちは！");
  console.log("POSSE太郎です！");
}

introduce();

// 問題6-2
const calculateTotalPrice = function(price, quantity) {
  const totalPrice = price * quantity;
  console.log(totalPrice);
}

calculateTotalPrice(200, 3);

// 問題6-3
const calculateDiscountedPrice = function(price, discountRate) {
  const discountAmount = price * discountRate;
  const discountedPrice = price - discountAmount;
  console.log(discountedPrice);
}

calculateDiscountedPrice(500, 0.2);