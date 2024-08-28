import Movie from "./Movie";

function MovieList({ movies, onselectedID }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.id} onselectedID={onselectedID} />
      ))}
    </ul>
  );
}

export default MovieList;
