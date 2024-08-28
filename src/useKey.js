import { useEffect } from "react";
export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          // onCloseMovie();
          action();
          console.log("closing");
        }
      }

      document.addEventListener("keydown", callback);
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [key, action]
  );
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
}
