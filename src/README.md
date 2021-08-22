# Assignment - ReactJS app.

Name: Cian Dunne

## Overview.

Completed work on adding Movies to Watchlist started in Labs.
Added view which displays Movies added to Watchlist
Created New Page which displays list of TV Shows with Image Cards.
Page is interactable with Name Filter Box which changes what Shows are displayed depending on what is entered into the Box.
Each Show Card has a Details Link which links to a TV Show Details page.
TV Show Details Page displays the Show Name, Images of the Show, and list of details of the show including runtime, audience rating, etc.
Top Rated Page shows list of TV Shows which have the highest audience score.
Top Rated Page can be filtered by name as well.
Attempted to implement a Similar Movies function where User clicks the Similar Button on the Movie Details Page and is brought to a new Page which lists Similar Movies. Could not get function to work. Tried multiple ways - new page with Similar Movies displayed, new section on MovieDetails Page with Similar Movies displayed - could not complete this. 

 
 
 + Add Upcoming Movies to Watchlist
 + View Movies added to Watchlist
 + Remove Movies from Watchlist
 + View List of TV Shows
 + Filter List of TV Shows by name
 + View List of Top Rated TV Shows (based on Audience Score)
 + Filter Top Rated list by name
 + Click Details Option which displays new Page giving Details of a Particular TV Show
 + Click Similar Option which should display new Page giving a list of Similar Movies to the Previous Movie but this function does not work

## Setup requirements.
User should first register for a User on The Movie Database (TMDB).
Go to www.themoviedb.org
Click Join TMDB
Create a User
Once Signed up and Logged in Click the Profile Icon on the Top Right and choose Settings
In Settings go to API
Copy the contents of the box labelled "API Key (v3 auth)" 
A ".env" file should be created in "src" folder
In the .env file enter the following:
REACT_APP_TMDB_KEY=(PasteAPIKey(v3auth)valuehere)
FAST_REFRESH=false
Your App should be set to go now.

## API Data Model.

used draw.io to demonstrate how each page links to each other.


Multiple new API Endpoints were added to facilitate features used.
getTVShows returns a list of tv shows - API response is below.

getTopTVShows returns a list of the top rated tv shows by audience score - API response is below.


getTVShow returns the details of a singular tv show - API response using "The Mandalorian" as an example is below.

getTVShowImages returns the list of Images attached to a particular TV show - API response using "The Mandalorian" as an example is below.

getSimilarMovies returns a list of similar movies to the movie id inputted - API response using "Star Wars: The Last Jedi" as an example is below.

## App Design.

### Component catalogue.



### UI Design.

shows a list of upcoming movies that the user has added to their watchlist. has a button on each card to remove from watchlist

shows a list of tv shows available on the database. visible tv shows can be filtered by name using the left box. details of tv shows can be found by clicking on the details option.

shows details of a particular tv show after clicking on the details option on the tv show card

shows list of top rated tv shows based on audience score. visible shows can again be filtered by name using box on the left.

attempted to create new page showing list of similar movies to the previously clicked on movie but link is non-functional so cannot display what should render

### Routing.

+ GET /movies/watchlist - displays a list of upcoming movies that the user added to watchlist on the upcoming page.
+ GET /tvshows - displays list of tv shows.
+ GET /tvshows/:id - displays a particular tv shows details.
+ GET /tvshows/toprated - displays a list of the top rated tv shows based on audience score
+ GET /movies/:id/similar - displays new page with a list of similar movies to the previous page

## Independent learning (If relevant).

Not Relevant
