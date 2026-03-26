import { topMovies, IsMovieExist } from "./modules.js";

console.log(topMovies);

console.log("------------");
let IsExist = IsMovieExist("The Matrix");
console.log(IsExist);
console.log(IsMovieExist("gameof"));
