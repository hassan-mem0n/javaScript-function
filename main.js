// task 1

let number1 = parseFloat(prompt("Enter the first number:"));

let number2 = parseFloat(prompt("Enter the second number:"));

let sum = number1 + number2;

alert(`\The sum of ${number1} and ${number2} is ${sum}.`);

// task 2
let enteryourname = prompt("What is your name?");

let purchaseAmount = parseFloat(prompt("Enter the total purchase amount:"));

let discountRate = 10;
let discountAmount = (purchaseAmount * discountRate) / 100;

let finalAmount = purchaseAmount - discountAmount;

alert(`\Hello, ${enteryourname}! After a ${discountRate}% discount, your final amount is $${finalAmount.toFixed(2)}.`);

// task 3


let favoriteAnimal = prompt("What is your favorite animal?");

alert(`\Wow, ${favoriteAnimal}s are amazing creatures!`);