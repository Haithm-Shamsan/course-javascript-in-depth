import inquirer from "inquirer";

async function main() {
  let continueLoop = true;

  while (continueLoop) {
    Menue();
    GetPokimonName();

    const answer = await inquirer.prompt({
      type: "confirm",
      name: "continueLoop",
      message: "Do You Want To Continue Looping ?",
    });
    continueLoop = await answer.continueLoop;

    if (!continueLoop) {
      console.log("Exiting the loop.");
      break; // Exit the while loop
    } else {
      console.log("Continuing the loop...");
      // Perform actions you want to repeat here
    }
  }

  console.log("Program completed.");
}

main();

//pikachu;
