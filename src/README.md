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

<img width="706" alt="API Diagram - draw.io" src="https://user-images.githubusercontent.com/59617227/130374018-f4eb7b04-7c8f-409e-a548-80c6af1b24dc.png">

Multiple new API Endpoints were added to facilitate features used.
getTVShows returns a list of tv shows - API response is below.

<img width="1264" alt="getTVShows API Response" src="https://user-images.githubusercontent.com/59617227/130374081-edbb1851-bac1-4134-9ac9-9afeb6d624b8.png">

getTopTVShows returns a list of the top rated tv shows by audience score - API response is below.

<img width="1174" alt="getTopTVShows API Response" src="https://user-images.githubusercontent.com/59617227/130374096-cb1a46fe-d539-42f0-a866-29a9159c680f.png">

getTVShow returns the details of a singular tv show - API response using "The Mandalorian" as an example is below.

<img width="679" alt="getTVShow API Response" src="https://user-images.githubusercontent.com/59617227/130374175-50cace38-fb15-4c5c-b963-3b6541f31745.png">

getTVShowImages returns the list of Images attached to a particular TV show - API response using "The Mandalorian" as an example is below.

<img width="486" alt="getTVShowImages API Response" src="https://user-images.githubusercontent.com/59617227/130374191-a983f671-ed94-4ccd-837c-5b8395e79d1c.png">

getSimilarMovies returns a list of similar movies to the movie id inputted - API response using "Star Wars: The Last Jedi" as an example is below.

<img width="1240" alt="getSimilarMovies API Response" src="https://user-images.githubusercontent.com/59617227/130374129-eea4ec26-3e6a-4993-926f-07cae9fc1b7c.png">



## App Design.

### Component catalogue.

<img width="164" alt="Stories Components" src="https://user-images.githubusercontent.com/59617227/130374399-cd19a223-28be-4e11-a278-3a8156edb09c.png">


### UI Design.

shows a list of upcoming movies that the user has added to their watchlist. has a button on each card to remove from watchlist

<img width="1258" alt="Upcoming Movies Watchlist" src="https://user-images.githubusercontent.com/59617227/130374251-1f3be904-350d-4f69-80fd-02c89799bbcc.png">

shows a list of tv shows available on the database. visible tv shows can be filtered by name using the left box. details of tv shows can be found by clicking on the details option.

<img width="1253" alt="TV Shows HomePage" src="https://user-images.githubusercontent.com/59617227/130374266-0c0e02cc-8625-4323-8040-d5930f1495e2.png">

shows details of a particular tv show after clicking on the details option on the tv show card

<img width="1259" alt="TV Show Details Page" src="https://user-images.githubusercontent.com/59617227/130374302-c7a2c8a5-ada0-4a4c-9640-a78805a1e3d3.png">

shows list of top rated tv shows based on audience score. visible shows can again be filtered by name using box on the left.

<img width="1252" alt="Top Rated TV Shows Page" src="https://user-images.githubusercontent.com/59617227/130374316-a8f4a998-35ba-40ba-9a94-a03a6e40840c.png">

attempted to create new page showing list of similar movies to the previously clicked on movie but link is non-functional so cannot display what should render. Here is Chip Link Button added to Movie Details Page which should direct to the Similar Movies page.

<img width="937" alt="Movie Details Page with Similar Movies Button (non-functional)" src="https://user-images.githubusercontent.com/59617227/130374374-fc5d18ac-d932-42d9-9e87-28fa50f02bbb.png">




### Routing.

+ GET /movies/watchlist - displays a list of upcoming movies that the user added to watchlist on the upcoming page.
+ GET /tvshows - displays list of tv shows.
+ GET /tvshows/:id - displays a particular tv shows details.
+ GET /tvshows/toprated - displays a list of the top rated tv shows based on audience score
+ GET /movies/:id/similar - displays new page with a list of similar movies to the previous page

## Independent learning (If relevant).

Not Relevant
