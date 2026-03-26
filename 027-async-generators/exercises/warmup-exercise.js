/*
    1. Create an async Generator function that will yield
       a Promise that resolves after 1 second with a random
       number between 0-9 (integer and inclusive)

    2. Create the generator object by calling the function ^

    3. Use a for-await-of loop to loop through the generator
       indefinitely (ctrl-c to force exit the program)
*/

const generatore = async function* () {
  while (true) {
    yield new Promise((resolve) => {
      setTimeout(() => {
        let number = Math.floor(Math.random() * 10 - 0) + 0;
        resolve(number);
      }, 1000);
    });
  }
};

const gene = generatore();

const AsyncFunc = async () => {
  for await (const num of gene) {
    console.log(num);
  }
};
AsyncFunc();
