import React from "react";
import { useEffect, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { BiLogInCircle } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { BsYoutube } from "react-icons/bs";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const NavBar = ({ nav, setNav, handleClick }) => {
  const [visible, setVisible] = useState(true);
  const [linear, setLinear] = useState(true);
  const [loc, setLoc] = useState();
  const { user, logOut } = UserAuth();
  const currentLoc = useLocation();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoc(currentLoc.pathname);
  });

  useEffect(() => {
    let prevScroll = 0;

    const hideNav = () => {
      const currentposScroll = window.pageYOffset;

      if (prevScroll > currentposScroll) {
        setVisible(true);
        setLinear(false);
      } else {
        setVisible(false);
      }

      if (window.pageYOffset === 0) {
        setLinear(true);
      }

      prevScroll = currentposScroll;
    };

    window.addEventListener("scroll", hideNav);

    return () => {
      window.removeEventListener("scroll", hideNav);
    };
  }, []);

  return (
    <>
      <div
        className={`div-toggle sm:hidden z-100 ${
          nav ? "" : " div-toggle__hidden"
        }`}
      >
        <div className="flex flex-row gap-3 mb-8">
          <button className="sm:hidden" onClick={handleClick}>
            <GiHamburgerMenu size={20} />
          </button>
          <Link to="/">
            <h2>نماوا</h2>
          </Link>
        </div>

        <ul className="ul-toggle">
          <NavLink
            to="film"
            className="flex flex-row items-center gap-x-2 "
            activeclassname="active"
            exact="true"
          >
            <HiHome size={25} />
            <li>فیلم ها</li>
          </NavLink>

          <NavLink
            to="series"
            className="flex flex-row items-center gap-x-2 mt-7"
            activeclassname="active"
            exact="true"
          >
            <BsYoutube size={25} />
            <li>سریال ها</li>
          </NavLink>
          {/* 
          <NavLink
            // to="Query"
            className="flex flex-row items-center gap-x-2 mt-7"
            activeclassname="active"
            exact="true"
          >
            <BsFillCameraReelsFill size={25} />
            <li>دسته بندی</li>
          </NavLink> */}
        </ul>
      </div>
      <div
        className={`flex justify-between items-center flex-row w-full z-30 px-7 py-5 ${
          visible ? "visible-nav" : "hidden-nav"
        } ${linear && "linear-nav"} `}
      >
        <div className="flex flex-row items-center gap-x-7">
          <button className="sm:hidden" onClick={handleClick}>
            <GiHamburgerMenu size={20} />
          </button>

          <Link to="/">
            <h2>نماوا</h2>
          </Link>
          <ul className="hidden  sm:flex">
            <NavLink to="film" activeclassname="active" exact="true">
              <li
                className={`${loc === "/" || loc === "film" ? "active" : ""}`}
              >
                فیلم ها
              </li>
            </NavLink>

            <NavLink to="series" activeclassname="active" exact="true">
              <li className="mx-5">سریال ها</li>
            </NavLink>

            {/* <NavLink to="Grouping" activeclassname="active" exact="true">
              <li>دسته بندی</li>
            </NavLink> */}
          </ul>
        </div>
        {user?.email ? (
          <div className="hidden sm:flex items-center">
            <Link to="Query">
              <LiaSearchSolid size={30} />
            </Link>
            <p
              onClick={logoutHandler}
              className="text-sm cursor-pointer mx-6 font-base hover:text-[#6eb8ff] transition-colors duration-100"
            >
              خروج
            </p>
            <Link to="/account">
              <button className="px-3 py-[10px] hover:bg-white hover:text-black  border rounded text-xs">
                اکانت
              </button>
            </Link>
          </div>
        ) : (
          <div className="hidden sm:flex items-center">
            <Link to="Query">
              <LiaSearchSolid size={30} />
            </Link>
            <Link className="text-sm mx-6 font-base hover:text-[#6eb8ff] transition-colors duration-100">
              خرید اشتراک
            </Link>
            <Link to="Signup">
              <button className="px-3 py-[10px] hover:bg-white hover:text-black  border rounded text-xs">
                ورود/ثبت نام
              </button>
            </Link>
          </div>
        )}
        {user?.email ? (
          <div className="sm:hidden flex justify-between items-center flex-row gap-x-2 ">
            <p>
              <Link to="Query">
                <LiaSearchSolid size={30} />
              </Link>
            </p>
            <p
              onClick={logoutHandler}
              className="mx-2 hover:text-[#6eb8ff] transition-colors duration-100 cursor-pointer"
            >
              خروج
            </p>
            <Link to="/account">
              <button className="px-3 py-[10px] hover:bg-white hover:text-black  border rounded text-xs">
                اکانت
              </button>
            </Link>
          </div>
        ) : (
          <div className="sm:hidden flex justify-between items-center flex-row gap-x-2 ">
            <p>
              <Link to="Query">
                <LiaSearchSolid size={30} />
              </Link>
            </p>
            <p className="mx-2 hover:text-[#6eb8ff] transition-colors duration-100 cursor-pointer">
              خرید اشتراک
            </p>
            <p>
              <Link to="Signup">
                <BiLogInCircle size={30} />
              </Link>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
