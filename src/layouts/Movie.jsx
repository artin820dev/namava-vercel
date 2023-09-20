import React, { useEffect, useState } from "react";
import { SiImdb } from "react-icons/si";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);
  const [likedmovie, setLikedmovie] = useState();
  const { user } = UserAuth();
  const navigate = useNavigate();

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
      <div className="w-[117px] h-[230px] sm:w-[140px]  sm:h-[295px] md:w-[200px] md:h-[360px] rounded inline-block mr-3 relative cursor-pointer group  ">
        <div className="absolute bg-opacity-30 bg-black w-full h-[170px]  "></div>
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
          <div className="absolute mr-3 top-20 sm:top-32 md:top-48 z-10">
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
              <FaHeart className="mb-1 ml-2 text-gray-300 text-base md:text-xl" />
            ) : (
              <FaRegHeart className="mb-1 ml-2 text-gray-300 text-base md:text-xl" />
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
