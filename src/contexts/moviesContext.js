import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} )
  const [favorites, setFavorites] = useState( [] )
  const [watchlists, setWatchList] = useState( [] )

  const addToFavorites = (movie) => {
    setFavorites([...favorites,movie.id])
  };
  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToWatchList = (movie) => {
    setWatchList([...watchlists,movie.id])
    console.log(watchlists);
  };

  const removeFromWatchlist = (movie) => {
    setWatchList( watchlists.filter(
      (mId) => mId !== movie.id
    ) )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        watchlists,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToWatchList,
        removeFromWatchlist
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;