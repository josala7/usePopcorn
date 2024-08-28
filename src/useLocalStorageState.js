import { useEffect, useState } from "react";

export function useLocalStorageState(initialstate, key) {
  const [value, setValue] = useState(function () {
    // const watched = JSON.parse(localStorage.getItem(key));
    // return watched || [];
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialstate;
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
