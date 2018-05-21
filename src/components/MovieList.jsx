import React from "react";
// import MovieListItem from './MovieListItem.jsx';

const MovieList = ({movies}) => {
  return (
     <div>
       {movies.map(function(movie) {
         return {movie}
       })}
    </div>
  )
};

export default MovieList;
