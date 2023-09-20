import React, { useEffect, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const slider = useRef();
  const { user } = UserAuth();

  const sliderLeft = () => {
    slider.current.scrollLeft -= 500;
  };

  const sliderRight = () => {
    slider.current.scrollLeft += 500;
  };

  useEffect(() => {
    const userDocRef = doc(db, "users", `${user?.email}`);

    const unsubscribe = onSnapshot(userDocRef, (doc) => {
      setMovies(doc.data()?.savedShows);
    });

    return () => {
      unsubscribe();
    };
  }, [user?.email]);

  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);

      await updateDoc(doc(db, "users", `${user?.email}`), {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <>
        <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
        <div className="relative flex items-center group">
          <MdChevronLeft
            onClick={sliderLeft}
            className="bg-white text-black left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          />
          <div
            ref={slider}
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
          >
            {movies.map((item) => (
              <div
                key={item.id}
                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
              >
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                  alt={item?.title}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                  <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                    {item?.title}
                  </p>
                  <p
                    onClick={() => deleteShow(item.id)}
                    className="absolute text-gray-300 top-4 right-4"
                  >
                    <AiOutlineClose />
                  </p>
                </div>
              </div>
            ))}
          </div>
          <MdChevronRight
            onClick={sliderRight}
            className="bg-white text-black right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          />
        </div>
      </>
    </>
  );
};

export default SavedShows;
