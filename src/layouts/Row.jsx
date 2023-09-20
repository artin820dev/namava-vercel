import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Movie from "./Movie";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  const slider = useRef();

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

  return (
    <div className="w-full h-[250px] mb-[1rem] sm:h-[300px] md:h-[390px]   relative">
      <h2 className="text-white font-bold mb-5 mt-5 mr-[0.4rem]">{title}</h2>
      <div
        ref={slider}
        className="scrollbar-hide   whitespace-nowrap overflow-x-scroll  w-full h-full group"
      >
        <div className="absolute  items-center cursor-pointer  z-[50] h-[170px] sm:h-[230px] md:h-[300px] hidden group-hover:flex  bg-black opacity-50 bg-gradient-to-l">
          <FiChevronRight size={45} onClick={sliderRight} />
        </div>
        <div>
          {movies.map((movie, id) => (
            <Movie key={id} movie={movie} />
          ))}
        </div>
        <div className="absolute top-[0] mt-[3.24rem] left-0 items-center cursor-pointer  z-[50] h-[170px] sm:h-[230px] md:h-[300px] hidden group-hover:flex  bg-black opacity-50 bg-gradient-to-l">
          <FiChevronLeft size={45} onClick={sliderLeft} />
        </div>
      </div>
    </div>
  );
};

export default Row;

// vmess://eyJhZGQiOiI4OC45OS44My44MSIsImFpZCI6IjAiLCJhbHBuIjoiIiwiZnAiOiIiLCJob3N0IjoiZmFzdC5jb20iLCJpZCI6IjJkN2FjNzc2LTMyNjQtNGFhZi1mMDBlLTYwZWYwOWVhZDIzYSIsIm5ldCI6InRjcCIsInBhdGgiOiIvIiwicG9ydCI6IjQ0MyIsInBzIjoiQElSQU5WUE5ORVRfKihNVE5fV0lGSSkiLCJzY3kiOiJhdXRvIiwic25pIjoiIiwidGxzIjoiIiwidHlwZSI6Imh0dHAiLCJ2IjoiMiJ9

// vmess://eyJhZGQiOiI0OS4xMy43OC4xMzEiLCJhaWQiOiIwIiwiYWxwbiI6IiIsImZwIjoiIiwiaG9zdCI6Inp1bGEuaXIiLCJpZCI6IjI1NDk1NGM2LWYxMTUtNDcwMy1lMTk2LTQxYmEwNGE0YTE2YiIsIm5ldCI6InRjcCIsInBhdGgiOiIvIiwicG9ydCI6IjQ0MyIsInBzIjoiQElSQU5WUE5ORVRfKihNVE5fV0lGSSkiLCJzY3kiOiJhdXRvIiwic25pIjoiIiwidGxzIjoiIiwidHlwZSI6Imh0dHAiLCJ2IjoiMiJ9

// vmess://eyJhZGQiOiIxMjguMTQwLjExOS4xMTYiLCJhaWQiOiIwIiwiYWxwbiI6IiIsImZwIjoiIiwiaG9zdCI6Inp1bGEuaXIiLCJpZCI6IjI1NDk1NGM2LWYxMTUtNDcwMy1lMTk2LTQxYmEwNGE0YTE2YiIsIm5ldCI6InRjcCIsInBhdGgiOiIvIiwicG9ydCI6IjQ0MyIsInBzIjoiQElSQU5WUE5ORVRfKihNVE5fV0lGSSkiLCJzY3kiOiJhdXRvIiwic25pIjoiIiwidGxzIjoiIiwidHlwZSI6Imh0dHAiLCJ2IjoiMiJ9
