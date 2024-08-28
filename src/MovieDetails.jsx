import { useEffect, useRef, useState } from "react";
import Loader from "./Loader";
import StarRating from "./StarRating";
import { useKey } from "./useKey";

const KEY = "c5b152d2";
const query = "Interstellar";

function MovieDetails({ selectedID, onCloseMovie, onAddmovie, watched }) {
  const [movie, setMovie] = useState({});
  const [isloaded, setIsloaded] = useState(false);
  const [userRating, setUserRating] = useState("");

  const CounterRef = useRef(0);

  useEffect(
    function () {
      if (userRating) CounterRef.current++;
    },
    [userRating]
  );

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedID);
  const watcheduserRating = watched.find(
    (movie) => movie.imdbID === selectedID
  )?.userRating;
  // console.log(isWatched);
  const {
    Title: title,
    Year: year,
    Runtime: runtime,
    Genre: genre,
    Director: director,
    Actors: actors,
    Plot: plot,
    Poster: poster,
    imdbRating,
    Released: released,
  } = movie;

  function handleAdd() {
    const newMovie = {
      imdbID: selectedID,
      title,
      year,
      poster,
      runtime: Number(runtime.split("").at(0)),
      imdbRating: Number(imdbRating),
      userRating,
      countRatingMovies: CounterRef.current,
    };

    onAddmovie(newMovie);
    onCloseMovie();
  }
  useKey("Escape", onCloseMovie);

  // useEffect(
  //   function () {
  //     function callback(e) {
  //       if (e.code === "Escape") {
  //         onCloseMovie();
  //         console.log("closing");
  //       }
  //     }

  //     document.addEventListener("keydown", callback);
  //     return function () {
  //       document.removeEventListener("keydown", callback);
  //     };
  //   },
  //   [onCloseMovie]
  // );

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsloaded(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`
        );
        const data = await res.json();
        // console.log(data);
        setMovie(data);
        setIsloaded(false);
      }
      getMovieDetails();
    },
    [selectedID]
  );
  useEffect(
    function () {
      document.title = `Movie: ${title}`;
      return function () {
        document.title = "usePopcorn";
      };
    },
    [title]
  );

  return (
    <div className="details">
      {isloaded ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`The movie is ${title}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>{imdbRating} IMDb Rating</p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to cart
                    </button>
                  )}
                </>
              ) : (
                <p>you watched this movie {watcheduserRating} 🟡</p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Directed by {director}</p>
            <p>Actors: {actors}</p>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
