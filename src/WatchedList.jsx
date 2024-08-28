import Watched from "./Watched";

function WatchedList({ watched, ondeletemovie }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <Watched
          key={watched.imdbID}
          movie={movie}
          ondeletemovie={ondeletemovie}
        />
      ))}
    </ul>
  );
}
export default WatchedList;
