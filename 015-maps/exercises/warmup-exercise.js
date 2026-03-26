/*
    1. Create a Map called "mexico" with the following entries:
        - id -> 24
        - name -> "Mexico"
        - capital -> "Mexico City"
        - neighbours -> ["USA", "Guatemala", "Belize"]

    2. Print out "mexico" to the terminal

    3. Change "id" to be 25

    4. Add "Honduras" to the list of neighbours to "mexico"
    
    5. Print out "mexico" to the terminal again
*/

const MyMap = new Map();

MyMap.set("id", 24);
MyMap.set("name", "Mexico");
MyMap.set("capital", "Mexico City");
MyMap.set("neighbours", ["USA", "Guatemala", "Belize"]);

console.log(MyMap);

MyMap.set("id", 25);

console.log(MyMap);

let a = MyMap.get("neighbours");
a.push("Honduras");

MyMap.set("neighbours", a);
console.log(MyMap);
