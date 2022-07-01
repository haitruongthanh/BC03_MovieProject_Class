import _ from "lodash";
import React, { useEffect, useState } from "react";
import { movieService } from "../../services/movieService";
import MovieCarousel from "./MovieCarousel/MovieCarousel";
import "./homePage.css";
import MovieTabs from "./MovieTabs/MovieTabs";
export default function HomePage() {
  const [movieList, setMovieList] = useState([]);
  console.log("movieList: ", movieList);
  useEffect(() => {
    let fetchMoviesList = async () => {
      let result = await movieService.getMovieList();

      let chunkedList = _.chunk(result.data.content, 8);
      setMovieList(chunkedList);
    };

    fetchMoviesList();
  }, []);

  return (
    <div>
      <div id="corousel_homepage" className="container mx-auto">
        <MovieCarousel chunkedList={movieList} />
      </div>
      <div className="container mx-auto">
        <MovieTabs />
      </div>
    </div>
  );
}
