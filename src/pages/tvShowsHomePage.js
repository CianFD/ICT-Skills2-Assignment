import React from "react";
import PageTemplate from "../components/templateTVShowListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getTVShows} from '../api/tmdb-api';

const TVShowHomePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('popular', getTVShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;

  return (
    <PageTemplate
      title="Discover TV Shows"
      shows={shows}

    />    
  );
};

export default TVShowHomePage;