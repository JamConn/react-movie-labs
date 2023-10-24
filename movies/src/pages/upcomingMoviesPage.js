// import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";

import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

import MustWatchIcon from "../components/cardIcons/mustWatch";


const UpcomingMoviesPage = (props) => {
  const {data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const upcoming = data.results;

  // Redundant, but necessary to avoid app crashing.
  // const favorites = movies.filter(m => m.favorite)
  // localStorage.setItem('favorites', JSON.stringify(favorites))
  // const addToFavorites = (movieId) => true 
  // const addToFavorites = (movieId) => {
  //   const updatedMovies = movies.map((m) =>
  //     m.id === movieId ? { ...m, favorite: true } : m
  //   );
  //   setMovies(updatedMovies);
  // };


  // useEffect(() => {
  //   getUpcomingMovies().then(movies => {
  //     setMovies(movies);
  //   });
  // }, []);

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={upcoming}
      action={(movie) => {
        return <MustWatchIcon movie={movie} />
      }}
    />
  );
};
export default UpcomingMoviesPage;