/*
    1. Create an empty Set called "names"

    2. Create another empty Set called "capsNames"

    2. Add the following names to the set "names":
        - Bilbo
        - Hermione
        - Spock
        - Leia

    3. Use a for-of loop to loop over "names" and
       adds the capitalized version of each name
       to the "capsNames" set

    4. Print out "capsNames"
*/

const names = new Set();

const capsNames = new Set();

names.add("Haythm");
names.add("Ammar");
names.add("Ahmed");
names.add("Shamsan");

for (const name of names) {
  capsNames.add(name.toUpperCase());
}

console.log(capsNames);
