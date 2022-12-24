# Assignment 2 - Web API.

Name: Luo Yang

## Features.

 + Authentication (login, register, logout)
 + Upcoming, top rated movies with their detailed information 
 + Popular actors with their detailed information
 + Add, delete, view users favourite movies
 + Post and update reviews

## Setup requirements.

+ cd movies-api
+ npm start
+ open another terminal
+ cd react-assignment
+ npm start

## API Configuration
1. Create an `.env` file in react-assignment folder with following variables
______________________
+ REACT_APP_TMDB_KEY=YourTMDBApiKey
+ FAST_REFRESH=false
______________________

2. Create an `.env` file in movies-appi folder with following variables
______________________
+ NODE_ENV=development
+ PORT=8080
+ HOST=localhost
+ MONGO_DB=YourMongoURL
+ SEED_DB=True
+ SECRET=YourJWTSecret
+ REACT_APP_TMDB_KEY=YourTMDBApiKey
______________________
## API Design
Give an overview of your web API design, perhaps similar to the following: 

### Actors
+ /api/actors/tmdb/popular | GET | Gets popular actors from tmdb
+ /api/actors/tmdb/actor/:id | GET | Gets detailed information of an actor from tmdb
+ /api/actors/tmdb/actor/:id/movies | GET | Gets movies in which an actor has acted from tmdb
+ /api/actors/tmdb/actor/:id/images | GET | Gets actor images from tmdb
### Genres
+ /api/genres/ | GET | Gets all genres from tmdb
### Movies
+ /api/movies/:id | GET | Gets a single movie from tmdb
+ /api/movies/tmdb/upcoming/:page | GET | Get upcoming movies from tmdb based on page number
+ /api/movies/tmdb/topRated/:page | GET | Get top rated movies from tmdb based on page number
+ /api/movies/tmdb/movie/:id/images | GET | Get movie images from tmdb
### Reviews
+ /api/reviews/movie/:id/reviews | GET | Gets a movie reviews
+ /api/reviews/movie/:id/reviews/:username | POST | posts or updates a review
### Users
+ /api/users/ | GET | Gets all users information from MongoDB
+ /api/users/ | POST | Registers/authenticates a user
+ /api/users/:id | Put | Updates information about a user
+ /api/users/:userName/favourites | GET | Gets users favourites
+ /api/users/:userName/favourites | POST | Add a favourite movieId to user's favourites
+ /api/users/:username/movie/:id/favourites | POST | Deletes a movieId from a user's favourites

## Security and Authentication

The application uses JWT Authentication to handle user sessions for important user functions like favourites and reviews.

### Protected routes
+ Favourite movies Page
+ Add reviews page

## Integrating with React App

+ Most of the data in react app comes from this api.
+ All favourite movie IDs are stored in MongoDB through this API. Users can easily find movies they have tagged every time they log in.
+ All reviews are stored in MongoDB. Users can see their own reviews and reviews from other users

## Independent learning (if relevant)

So far no independent learning content