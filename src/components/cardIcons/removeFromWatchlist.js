import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromWatchlistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromWatchlist = (e) => {
    e.preventDefault();
    context.removeFromWatchlist(movie);
  };
  return (
    <IconButton
      aria-label="remove from watchlist"
      onClick={handleRemoveFromWatchlist}
    >
      <HighlightOffIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromWatchlistIcon;