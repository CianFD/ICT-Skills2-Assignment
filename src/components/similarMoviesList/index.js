import React from "react";
import Movie from "../movieCard";
import Grid from "@material-ui/core/Grid";
import { getSimilarMovies } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';


export default function SimilarMovieList ({props, action}) {
    const { data, error, isLoading, isError } = useQuery("similar", getSimilarMovies);
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }

  const movies = data.movies;
  let movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Movie key={m.id} movie={m} action={action} />
    </Grid>
  ));
  return movieCards;
};

