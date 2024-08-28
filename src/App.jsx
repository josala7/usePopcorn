import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import NavBar from "./NavBar";
import Logo from "./Logo";
import Search from "./Search";
import NumResult from "./NumResult";
import Box from "./Box";
import Main from "./Main";
import ErrorMessage from "./ErrorMessage";
import Summary from "./Summary";
import WatchedList from "./WatchedList";
import { useMovie } from "./useMovie";
import { useLocalStorageState } from "./useLocalStorageState";

const query = "Interstellar";
export default function App() {
  const [query, setQuery] = useState("");

  const [selectedID, setSelectedID] = useState(null);

  function handleSelectedID(id) {
    setSelectedID((selectedID) => (selectedID === id ? null : id));
  }
  function handleCloseMovie() {
    setSelectedID(null);
  }
  function handleAddWatchedMovie(movie) {
    setWatched((watched) => [...watched, movie]);
    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }

  function deleteWatchedmovie(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }
  // custom Hook
  const { movies, isLoading, error } = useMovie(query);

  // custom Hook
  const [watched, setWatched] = useLocalStorageState([], "watched");

  // useEffect(
  //   function () {
  //     localStorage.setItem("watched", JSON.stringify(watched));
  //   },
  //   [watched]
  // );

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onselectedID={handleSelectedID} />
          )}
          {!isLoading && error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedID ? (
            <MovieDetails
              selectedID={selectedID}
              onCloseMovie={handleCloseMovie}
              onAddmovie={handleAddWatchedMovie}
              watched={watched}
            />
          ) : (
            <>
              <Summary key={watched.imdbID} watched={watched} />
              <WatchedList
                key={watched.imdbID}
                watched={watched}
                ondeletemovie={deleteWatchedmovie}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
