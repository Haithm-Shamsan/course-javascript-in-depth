/*
    1. Create a generator function called "getRandomNumber"
       that generates a random number between 1-10 (inclusive)
       exactly 5 times

    2. Create another generator function called "groceryList"

       Inside of "groceryList", create an variable called
       "groceries" that points at:
       ["Avocado", "Cookie", "Milk", "Soup", "Soda"]

       The generator will yield a random grocery from "groceries"
       and also remove that grocery item from the list of "groceries"
       Eg: const groceries = groceryList();
           groceries.next() => "Cookie"
           groceries.next() => "Soup"

    3. Create 2 generator Objects by calling each of the 2
       generator functions above ^

    4. Create a regular for loop that will loop 5 times and calls
       .next() on each of the generator Objects ^ to print out a
       random number followed by a random grocery:
       Eg: 5 Avocado
           10 Soup
*/
function GenerateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const getRandomNumber = function* (min, max) {
  let i = 1;

  while (i <= 5) {
    yield GenerateRandomNumber(min, max);
    i++;
  }
};

const groceryList = function* () {
  const groceries = ["Avocado", "Cookie", "Milk", "Soup", "Soda"];
  const grolength = groceries.length;
  let i = 0;

  while (i < grolength) {
    let randomitem = groceries.splice(
      GenerateRandomNumber(0, groceries.length),
      1
    );

    yield randomitem;
    i++;
  }
};
const RandomNumber = getRandomNumber(1, 10);
const grocery = groceryList();
for (let i = 0; i < 5; i++) {
  const b = RandomNumber.next().value;
  const a = grocery.next().value;
  console.log(b + " " + a);
}
