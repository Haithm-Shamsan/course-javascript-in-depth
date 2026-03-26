/*
    1. Create the following 3 objects:
        - const banana = {name: "banana", quantity: 1, price: 1.95}
        - const apple = {name: "apple", quantity: 1, price: 1.45}
        - const candy = {name: "candy", quantity: 1, price: 3.50}

    2. Create a Map called "store" with the following entries:
        - storeNumber -> 5
        - locationCity -> "Milan"
        - locationCountry -> "Italy"
        - products: [banana, apple, candy]

    3. Print out "store" to the terminal

    4. Only print out all the product objects in "store"

    5. Only print out the 3rd product object in "store"

    6. Change the price of the banana object through the store Map
       to be 1.75..

    7. Print out both "store" and "banana"

    8. Change the price of the candy object directly to be 4.99

    9. Print out both "store" and "candy"
*/
const banana = { name: "banana", quantity: 1, price: 1.95 };
const apple = { name: "apple", quantity: 1, price: 1.45 };
const candy = { name: "candy", quantity: 1, price: 3.5 };

const store = new Map();

store.set("storeNumber", 5);
store.set("locationCity", "Milan");
store.set("locationCountry", "Italy");
store.set("products", [banana, apple, candy]);

console.log(store);

console.log("---------Products---------");

for (let i = 0; i <= store.get("products").length; i++) {
  console.log(store.get("products")[i]);
}
console.log("---------Thired Elemant---------");
console.log(store.get("products")[2]);
console.log("---------Change banana Price---------");
store.get("products")[0].price = 1.75;
console.log(store.get("products")[0]);
console.log("---------Change candy Price---------");
candy.price = 4.99;
console.log(candy);
