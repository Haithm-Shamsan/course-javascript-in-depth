/*
    1. Create a function called "fetchUser" that returns 
       a Promise that resolves with the value :
       { data: {user: "Monkey", admin: true} } after 3 seconds
    2. Create a function called "login" that takes an Object
       as an argument. If the object has a property called 
       "admin" with a value of true, then log out
       "Successfully logged in!", otherwise log out
       "Failed to log in, please try again."

    3. Print out "Program starting..."
    
    4. Create an async function that uses await to wait for
       the data to comes back from "fetchUser".
    
    5. Pass the user that comes back from "fetchUser" to the
       "login" function you created above

    6. Call the async function you created
    7. Log out "Program complete!"
*/
// Step 1: Create the fetchUser function
const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { user: "Monkey", admin: true } });
    }, 3000);
  });
};

// Step 2: Create the login function
const Login = (user) => {
  if (user.admin === true) {
    return console.log("Login Seccesed ,Welocme Admin");
  }

  return console.log("Failed to log in, please try again.");
};

// Step 3: Print "Program starting..."
console.log("Program starting...");

// Step 4: Create an async function
const IsLoged = async () => {
  // Step 5: Await the fetchUser function and pass the data to login
  const databack = await fetchUser();
  Login(databack.data);

  // Step 7: Log "Program complete!"
  console.log("Program complete!");
};

// Step 6: Call the async function
IsLoged();
