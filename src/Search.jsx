import { useEffect, useRef } from "react";
import { useKey } from "./useKey";

function Search({ query, setQuery }) {
  const searchinput = useRef(null);
  useEffect(() => {
    console.log(searchinput.current);
    searchinput.current.focus();
  }, []);
  // useEffect(function () {
  //   const el = document.querySelector(".search");
  //   console.log(el);
  //   el.focus();
  // }, []);
  useKey("Enter", function () {
    if (document.activeElement === searchinput.current) return;
    searchinput.current.focus();
    setQuery("");
  });

  // useEffect(
  //   function () {
  //     function callback(e) {
  //       // console.log("callback");
  //       if (e.code === "Enter") {
  //         if (document.activeElement === searchinput.current) return;
  //         searchinput.current.focus();
  //         setQuery("");
  //       }
  //     }
  //     document.addEventListener("keydown", callback);
  //     return function cleanup() {
  //       document.removeEventListener("keydown", callback);
  //     };
  //   },
  //   [setQuery]
  // );
  return (
    <input
      className="search"
      type="text"
      placeholder="Search for movies"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={searchinput}
    ></input>
  );
}

export default Search;
