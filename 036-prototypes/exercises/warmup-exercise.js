/*
    1. Add a new function called "boop" to the prototype
       of String. This function should simply log out the
       String "Boop!".

    2. Create a new String with the value "meow" and
       assign it to a variable called "cat".

    3. Call the "boop" method on "cat" to make sure it
       works correctly.
*/

String.prototype.poob = function () {
  console.log("BOOP");
};

// Properly define the boop property
String.prototype.boop = "BOOP Property";

const cat = String.prototype.boop;
console.log(cat); // Output: BOOP Property

const str = "Hello";
console.log(str.boop); // Output: BOOP Property
str.poob(); // Output: BOOP
