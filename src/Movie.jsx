function Movie({ movie, onselectedID }) {
  const { Poster, Title, Year, imdbID } = movie;
  const posterAlt = Poster === "N/A" ? "🚫" : `${Title} poster`;
  return (
    <li onClick={() => onselectedID(movie.imdbID)} key={movie.imdbID}>
      <img src={Poster} alt={`${posterAlt} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>📅</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;
