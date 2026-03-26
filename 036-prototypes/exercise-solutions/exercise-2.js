/*
    1. Create a new Object and assign it to a variable
       called "fakeArray". Give it the following value:
       { "0": "Zero", "1": "One", "2": "Two", length: 3}

    2. Set the prototype of "fakeArray" to be Array.prototype

    3. Use the map method on "fakeArray" to log out each item
       in the array.

    4. What is happening here and why does this work?
*/

const fakeArray = { 0: "Zero", 1: "One", 2: "Two", length: 3 };

// Correct the prototype assignment to make it an array-like object
fakeArray.__proto__ = Array.prototype;

// Now you can use array methods like map
fakeArray.map((item) => console.log(item));
