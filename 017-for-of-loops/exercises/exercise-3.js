/*
    1. Create a Map called "backpack" and add the following entries:
        - 1 => {name: "Sword", value: 300}
        - 2 => {name: "Banana", value: 5}
        - 3 => {name: "Gold Nugget", value: 10000}
        - 4 => {name: "Pants", value: 100}

    2. Use a for-of loop to loop over "backpack" and print out
       the name and the value for each item in the following format:
       Name: $Value
       For example: Sword: $300

    3. Also print out the total value of all items in the backpack
*/

backpack = new Map();

backpack.set(1, { name: "Sword", value: 300 });
backpack.set(2, { name: "Monky", value: 35500 });
backpack.set(3, { name: "Gold Nugger", value: 1000 });
backpack.set(4, { name: "Pants", value: 100 });

let TotalPrice = 0;
for (const tool of backpack) {
  id = tool[0];
  itemitself = tool[1];
  console.log(`${itemitself.name}:$${itemitself.value}`);
  TotalPrice += itemitself.value;
}
console.log(TotalPrice);
