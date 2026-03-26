/*
    1. Create a variable "movie" that points at this Object:
       { name: "Blade Runner", director: "Ridley Scott",
         year: 1982, rating: 89, genre: "Science Fiction" }

    2. Add the two more properties to the "movie" Object:
       [Symbol("budget")]: 30
       [Symbol("boxOffice")]: 41.6

    3. Use a for-of loop to loop through all the entries inside
       "movie" and print out their key-value pairs:
       Eg: name => Blade Runner, director => Ridley Scott

    4. How would you access and print out the symbols in "movie"?
*/
const Movie = {
  name: "Blade Runner",
  director: "Ridley Scott",
  year: 1982,
  rating: 89,
  genre: "Science Fiction",
};

Movie[Symbol("budget")] = 30;
Movie[Symbol("budget")] = 41.6;

for (const [key, pair] of Object.entries(Movie)) {
  console.log(key + "         =>  " + pair);
}

console.log(Object.getOwnPropertySymbols(Movie));
