/*
    1. Create a generator function called "randomNumber"
       that will generate a new random number infinitely

    2. Use a loop to generate 10 random numbers using the
       generator Object you get from calling "randomNumber"
*/

function GenerateRandomNumber() {
  return Math.random();
}
const randomNumber = function* (number) {
  let i = 0;

  while (i <= number) {
    yield GenerateRandomNumber();
    i++;
  }
};

const Generate10Random = randomNumber(10);

for (const random of Generate10Random) {
  console.log(random);
}
