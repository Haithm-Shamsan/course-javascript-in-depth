/*
    1. Create a generator function called "randomAmountFromRange"
       which has 3 parameters: amount, min, and max

    2. ^ This function will generate the amount of random numbers
       provided as an argument, between the min and max (inclusive)
       Eg: randomAmountFromRange(3, 10, 20) => 13, 12, 19

    3. Create a for...of loop that will loop through the following
       generator objects to test it:
       - randomAmountFromRange(3, 10, 20)
       - randomAmountFromRange(5, 100, 200)
       - randomAmountFromRange(10, 1000, 2000)
*/
function GenerateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const randomAmountFromRange = function* (mount, min, max) {
  let i = 0;

  while (i <= mount) {
    yield GenerateRandomNumber(min, max);
    i++;
  }
};
const numbers = randomAmountFromRange(3, 10, 20);
for (const num of numbers) {
  console.log(num);
}
console.log("||||||||||||||||||||||||||||||||||||||||||||");
const number2 = randomAmountFromRange(5, 100, 200);
for (const num2 of number2) {
  console.log(num2);
}
console.log("||||||||||||||||||||||||||||||||||||||||||||");
const number3 = randomAmountFromRange(10, 1000, 2000);
for (const num2 of number3) {
  console.log(num2);
}
