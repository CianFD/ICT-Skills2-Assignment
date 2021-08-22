import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import WatchlistMoviesPage from './pages/watchlistMoviesPage';
import TVShowsHomePage from './pages/tvShowsHomePage';
import TVShowDetailsPage from './pages/tvShowDetailsPage';

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 360000,
        refetchInterval: 360000, 
        refetchOnWindowFocus: false
      },
    },
  });

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <SiteHeader />
                <MoviesContextProvider>
                    {" "}
                    <Switch>
                    <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                    <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                    <Route exact path="/tvshows" component={TVShowsHomePage} />
                    <Route exact path="/tvshows/:id" component={TVShowDetailsPage} />
                    <Route path="/reviews/:id" component={MovieReviewPage} />
                    <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                    <Route exact path="/movies/watchlist" component={WatchlistMoviesPage} />
                    <Route path="/movies/:id" component={MoviePage} />
                    <Route exact path="/" component={HomePage} />
                    <Redirect from="*" to="/" />
                    </Switch>
                </MoviesContextProvider>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById("root"));