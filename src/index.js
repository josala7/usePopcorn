import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";
// import App from "./App";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="pink" maxRating={10} onSetRating={setMovieRating} />
//       <p> This movie has {movieRating} rating</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10} />
    <StarRating color="red" size={18} />
    <StarRating messages={["terrible", "bad", "okay", "good", "excellent"]} />
    <StarRating color="green" size={38} defaultRating={4} />
    <Test /> */}
  </React.StrictMode>
);
