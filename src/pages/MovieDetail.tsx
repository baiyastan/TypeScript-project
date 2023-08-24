import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`;

  const getMovieDetail = async (url: string) => {
    const res = await axios.get(url);
    console.log(res);
  };

  useEffect(() => {
    getMovieDetail(movieDetailUrl);
  }, []);

  console.log(id);
  return (
    <div className="movie-detail-container">
      <div className="movie-detail">
        <img src="" alt="" />
        <div className="movie-info">
          <h2 className="movie-title">title</h2>
          <p className="movie-overview">overview</p>
          <p className="movie-rating">Rating</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
