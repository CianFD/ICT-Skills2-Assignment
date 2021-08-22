import React from "react";
import PageTemplate from "../components/templateTVShowListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getTopTVShows} from '../api/tmdb-api';

const TVShowTopRatedPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('top rated', getTopTVShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;

  return (
    <PageTemplate
      title="See the Top-Rated TV Shows"
      shows={shows}

    />    
  );
};

export default TVShowTopRatedPage;