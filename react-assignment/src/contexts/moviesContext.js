import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./authContext";
import { getFavourites, addFavourite } from "../api/tmdb-api";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [toWatch, setToWatch] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const userContext = useContext(AuthContext)
  const email = userContext.userEmail
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    if (userContext.isAuthenticated) {
      getFavourites(email).then((favourites) => {
        setFavourites(favourites);
      });
    }
    else {
      setFavourites([])
    }
  }, [favorites, userContext.isAuthenticated, email])

  const addToFavorites = (username, movie) => {
    let newFavourites = [];
    addFavourite(username, movie);
    newFavourites = getFavourites(username, movie)
    setFavorites(newFavourites)
  };

  const addToToWatch = (movie) => {
    let newToWatch = [];
    if (!toWatch.includes(movie.id)){
      newToWatch = [...toWatch, movie.id];
    }
    else{
      newToWatch = [...toWatch];
    }
    setToWatch(newToWatch)
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

 return (
    <MoviesContext.Provider
      value={{
        favorites,
        favourites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToToWatch,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;