import React, { useState } from "react";
import Row from "../layouts/Row";
import requests from "../Requests";

const Query = () => {
  const [search, setSearch] = useState("");
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="w-full flex justify-center ">
        <input
          type="text"
          className="mt-[5rem] w-[20.4rem] md:w-[30rem]  text-sm bg-[#37383e] h-[40px] rounded p-4 focus:outline-none"
          placeholder="فیلم ,سریال, بازیگر"
          onChange={changeHandler}
          autoFocus
        />
      </div>
      <div className="pr-1 sm:pr-5 sm:mt-10">
        <Row
          title="Your search"
          fetchURL={`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=4d78205350df3165c837243e12636438`}
        />
      </div>
    </>
  );
};

export default Query;
