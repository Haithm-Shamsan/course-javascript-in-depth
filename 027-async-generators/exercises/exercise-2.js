/*
    1. Create an async Generator function that has a single
       parameter called "sentence". The function will loop through
       "sentence" letter by letter, and for each letter it will
       yield a Promise that resolves after 100ms that:
       - If the letter is a vowel () then resolve with a "*"
       - Otherwise resolve with the letter, but uppercased

    2. Create the generator object by calling the function ^
       with a value of "Monkeys are the coolest animal!"

    3. Use a for-await-of loop to loop through the generator

    *There are MANY ways to check if a string has any of several letters
*/
const generatore = async function* (sentence = "sentence") {
  for (const char of sentence) {
    let IsVowel = /[aeiouAEIOU]/.test(char);

    if (IsVowel) {
      yield new Promise((resolve) => {
        setTimeout(() => {
          resolve("*");
        }, 100);
      });
    } else {
      yield new Promise((resolve) => {
        setTimeout(() => {
          resolve(char.toUpperCase());
        }, 100);
      });
    }
  }
};

const O = generatore("Monkeys are the coolest animal!");

const CheckChar = async () => {
  for await (const i of O) {
    console.log(i);
  }
};
CheckChar();
