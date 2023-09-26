import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Movie from "./Movie";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import YouTube from "react-youtube";
import { useLocation } from "react-router-dom";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  const [mainTrailer, setMainTrailer] = useState(false);
  const [mainKey, setMainKey] = useState("tGpTpVyI_OQ");

  const slider = useRef();

  let loc = useLocation();

  const sliderLeft = () => {
    slider.current.scrollLeft -= 500;
  };

  const sliderRight = () => {
    slider.current.scrollLeft += 500;
  };

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const opts = {
    width: "100%",
    height: "450px",
    playerVars: {
      iv_load_policy: 3, // Enable theater mode
      controls: 1, // Enable controls and show on hover
    },
  };

  return (
    <>
      <div
        className={`w-full h-[250px] mt-[1rem] sm:h-[300px] md:h-[390px]   relative   ${
          mainTrailer && "mb-[35rem]"
        }`}
      >
        <h2 className="text-white font-bold mb-5 mt-5 mr-[0.4rem]">{title}</h2>
        <div
          ref={slider}
          className="scrollbar-hide scroll-smooth  whitespace-nowrap overflow-x-scroll  w-full h-full group"
        >
          <div className="absolute  items-center cursor-pointer  z-[50] h-[170px] sm:h-[230px] md:h-[300px] hidden group-hover:flex  bg-black opacity-50 bg-gradient-to-l">
            <FiChevronRight size={45} onClick={sliderRight} />
          </div>
          <div>
            {movies.map((movie, id) => (
              <Movie
                key={id}
                movie={movie}
                mainTrailer={mainTrailer}
                setMainTrailer={setMainTrailer}
                setMainKey={setMainKey}
                mainKey={mainKey}
                loc={loc}
              />
            ))}
          </div>
          <div className="absolute top-[0] mt-[3.24rem] left-0 items-center cursor-pointer  z-[50] h-[170px] sm:h-[230px] md:h-[300px] hidden group-hover:flex  bg-black opacity-50 bg-gradient-to-l">
            <FiChevronLeft size={45} onClick={sliderLeft} />
          </div>
        </div>
        {mainTrailer && (
          <YouTube videoId={mainKey} opts={opts} className="absolute w-full " />
        )}
      </div>
    </>
  );
};

export default Row;

// vmess://eyJhZGQiOiI4OC45OS44My44MSIsImFpZCI6IjAiLCJhbHBuIjoiIiwiZnAiOiIiLCJob3N0IjoiZmFzdC5jb20iLCJpZCI6IjJkN2FjNzc2LTMyNjQtNGFhZi1mMDBlLTYwZWYwOWVhZDIzYSIsIm5ldCI6InRjcCIsInBhdGgiOiIvIiwicG9ydCI6IjQ0MyIsInBzIjoiQElSQU5WUE5ORVRfKihNVE5fV0lGSSkiLCJzY3kiOiJhdXRvIiwic25pIjoiIiwidGxzIjoiIiwidHlwZSI6Imh0dHAiLCJ2IjoiMiJ9

// vmess://eyJhZGQiOiI0OS4xMy43OC4xMzEiLCJhaWQiOiIwIiwiYWxwbiI6IiIsImZwIjoiIiwiaG9zdCI6Inp1bGEuaXIiLCJpZCI6IjI1NDk1NGM2LWYxMTUtNDcwMy1lMTk2LTQxYmEwNGE0YTE2YiIsIm5ldCI6InRjcCIsInBhdGgiOiIvIiwicG9ydCI6IjQ0MyIsInBzIjoiQElSQU5WUE5ORVRfKihNVE5fV0lGSSkiLCJzY3kiOiJhdXRvIiwic25pIjoiIiwidGxzIjoiIiwidHlwZSI6Imh0dHAiLCJ2IjoiMiJ9

// vmess://eyJhZGQiOiIxMjguMTQwLjExOS4xMTYiLCJhaWQiOiIwIiwiYWxwbiI6IiIsImZwIjoiIiwiaG9zdCI6Inp1bGEuaXIiLCJpZCI6IjI1NDk1NGM2LWYxMTUtNDcwMy1lMTk2LTQxYmEwNGE0YTE2YiIsIm5ldCI6InRjcCIsInBhdGgiOiIvIiwicG9ydCI6IjQ0MyIsInBzIjoiQElSQU5WUE5ORVRfKihNVE5fV0lGSSkiLCJzY3kiOiJhdXRvIiwic25pIjoiIiwidGxzIjoiIiwidHlwZSI6Imh0dHAiLCJ2IjoiMiJ9
