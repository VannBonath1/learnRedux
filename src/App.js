import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

const App = () => {
  const [movieList, setMovieList] = useState([]);

  const moviesCollectionRef = collection(db, "movies");

  useEffect(() => {
    onSnapshot(moviesCollectionRef, (snapShot) => {
      const movies = snapShot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(movies);
    });
  }, []);

  console.log(movieList);

  return (
    <div>
      ---------------------------------------
      <h1>add a movie</h1>
      <input placeholder="movie name" type="text" />
      <br />
      <br />
      <input placeholder="release date" type="number" />
      <br />
      <br />
      <span>is this movie win an Oscar?</span>
      <br />
      <input type="checkbox" />
      <br />
      <button>add movie</button>
      <br />
      <h1>Movie List</h1>
      <div>
        <ul>
          {movieList.map((movie) => (
            <div>
              <li>{movie.title}</li>
              <li>{movie.releaseDate}</li>
              ----------------------------
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
