import React, { useEffect, useState } from "react";
import "../Styles/movies.css";
import axios from "axios";
import { getMoviesStart, getMoviesSuccess, getMoviesError } from "../redux/MoviesSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";

function Movies() {
  const KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
  // For educational purposes only - DO NOT USE in production
  // Request your own key for free: https://developers.themoviedb.org/3
  const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=1`;
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=`;

  const { movies, loading, error } = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState<string>("");

  const getMovies = async (url: string) => {
    try {
      dispatch(getMoviesStart());
      const res = await axios.get(url);

      dispatch(getMoviesSuccess(res.data.results));
    } catch (error) {
      console.log(error);
      dispatch(getMoviesError("Error response"));
    }
  };

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  const getClassByRate = (vote: number) => {
    if (vote >= 7.5) return "green";
    else if (vote >= 7) return "orange";
    else return "red";
  };

  const handleSearch = (e: React.FormEvent): void => {
    e.preventDefault();
    if (searchTerm && searchTerm !== "") {
      getMovies(SEARCH_API + searchTerm);
    }
  };

  return (
    <div className="page-container">
      <header>
        <h1>Should I watch it?</h1>
        <form onSubmit={handleSearch}>
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="text"
            placeholder="Search"
            className="search"
          />
        </form>
      </header>
      <main>
        {movies.map((movie, index) => (
          <div className="movie" key={index}>
            <Link to={`/movie/${movie.id}`}>
              <img src={`${IMG_PATH}${movie.poster_path}`} alt={movie.title} />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <span className={getClassByRate(movie.vote_average)}>{movie.vote_average}</span>
              </div>
              <div className="overview">
                <h3>Overview</h3>
                {movie.overview}
              </div>
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Movies;
