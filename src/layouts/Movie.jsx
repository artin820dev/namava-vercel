import React, { useEffect, useState } from "react";
import { SiImdb } from "react-icons/si";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsPlayCircle, BsStopCircle } from "react-icons/bs";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Movie = ({ movie, setMainTrailer, setMainKey, mainKey, loc }) => {
  const [like, setLike] = useState(false);
  const [likedmovie, setLikedmovie] = useState();
  const [youtubekey, setYoutubekey] = useState();
  const [trailer, setTrailer] = useState(false);
  const [direction, setDirection] = useState(false);

  // you should using use effect for seting state

  const { user } = UserAuth();
  const navigate = useNavigate();

  const stopHandler = () => {
    setTrailer(false);
    setMainTrailer(false);
  };

  const playHandler = () => {
    if (youtubekey === undefined) {
      let randomKey = Math.random() * 10000;

      setMainKey(randomKey);
      setMainTrailer(true);

      setTimeout(() => {
        setTrailer(true);
      }, 30);
      return;
    }
    setMainKey(youtubekey);
    setMainTrailer(true);

    setTimeout(() => {
      setTrailer(true);
    }, 30);
  };

  useEffect(() => {
    console.log("bia");
    setTrailer(false);
  }, [mainKey]);

  useEffect(() => {
    if (loc.pathname === "/series") {
      setDirection("tv");
    } else {
      setDirection("movie");
    }
  }, [loc]);

  useEffect(() => {
    if (direction) {
      axios
        .get(
          `https://api.themoviedb.org/3/${direction}/${movie?.id}/videos?api_key=4d78205350df3165c837243e12636438`
        )
        .then((res) => {
          setYoutubekey(res.data.results[0]?.key);
        });
    }
  }, [direction, movie]);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setLikedmovie(doc.data()?.savedShows);
    });
  }, [user]);

  useEffect(() => {
    const isMovieLiked = likedmovie?.some((film) => film.id === movie.id);
    setLike(isMovieLiked);
  }, [likedmovie]);

  const likeHandler = () => {
    if (user) {
      if (like) {
        try {
          const result = likedmovie.filter((film) => film.id !== movie.id);

          updateDoc(doc(db, "users", `${user?.email}`), {
            savedShows: result,
          });
        } catch (error) {
          console.log(error.message);
        }
      } else {
        updateDoc(doc(db, "users", `${user?.email}`), {
          savedShows: arrayUnion({
            id: movie.id,
            title: movie.title,
            img: movie.backdrop_path,
          }),
        });
      }
      setLike(!like);
    } else {
      navigate("/Signup");
    }
  };

  let releaseYear = null;
  if (movie.release_date) {
    releaseYear = new Date(movie.release_date).getFullYear();
  } else {
    releaseYear = new Date(movie.first_air_date).getFullYear();
  }

  return (
    <>
      <div className="w-[117px] h-[230px] sm:w-[140px]  sm:h-[295px] md:w-[200px] md:h-[360px] rounded inline-block mr-3 relative  group  ">
        <div className="absolute bg-opacity-30 bg-black w-full  h-[170px] sm:h-[230px] md:h-[300px] "></div>

        <img
          className="w-full h-[170px] sm:h-[230px] md:h-[300px]  object-cover rounded absolute"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className="absolute bottom-3 h-10 whitespace-pre-wrap mb-0 mr-1 italic ">
          <p className="text-[#bcbcbc] text-xs font-thin sm:font-extralight md:text-sm">
            {movie.title ? movie.title : movie.original_name}
          </p>
        </div>

        <div className="absolute top-0 right-0 opacity-0 hover:opacity-100 z-10 rounded  bg-opacity-60 bg-black w-full md:h-[300px] h-[170px] sm:h-[230px] ">
          <div className="absolute mr-3 bottom-0 sm:bottom-1  md:bottom-6 z-10">
            <div className="mb-2">
              <p>released {releaseYear} </p>
            </div>
            <div className="flex flex-row items-center">
              <SiImdb size={20} className="mb-1 ml-2" />
              <p>{movie.vote_average}</p>
            </div>
          </div>
          <p className="absolute top-2 left-0" onClick={likeHandler}>
            {like ? (
              <FaHeart className="mb-1 ml-2 cursor-pointer text-gray-300 text-base md:text-xl" />
            ) : (
              <FaRegHeart className="mb-1 ml-2 cursor-pointer text-gray-300 text-base md:text-xl" />
            )}
          </p>

          <p className="absolute top-[4rem] left-11 sm:top-[5rem] sm:left-[3.50rem] md:top-[7rem] md:left-[5rem] ">
            {trailer ? (
              <BsStopCircle
                className=" text-gray-300 cursor-pointer text-4xl md:text-5xl"
                onClick={stopHandler}
              />
            ) : (
              <BsPlayCircle
                className=" text-gray-300 cursor-pointer text-4xl md:text-5xl"
                onClick={playHandler}
              />
            )}
          </p>
        </div>
        {trailer && (
          <div className="border-b border-gray-300 absolute inline-block bottom-0 z-[1000] w-full">
            <p className="hidden">some</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Movie;
