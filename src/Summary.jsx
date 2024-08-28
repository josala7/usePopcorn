function Summary({ watched }) {
  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  const imdbRating = average(watched.map((movie) => movie.imdbRating));
  const userRating = average(watched.map((movie) => movie.userRating));
  const runtime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watch</h2>
      <div>
        <p>
          <span>📂</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{imdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{userRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{runtime.toFixed(2)} min</span>
        </p>
      </div>
    </div>
  );
}

export default Summary;
