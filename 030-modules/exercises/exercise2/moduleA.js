import { topMovies } from "./moduleB.js";

const IsMovieExist = (MovieName) => {
  return topMovies.includes(MovieName);
};
export { IsMovieExist };
