import { Outlet, useLocation } from "react-router-dom";
import Footer from "../layouts/Footer";
import NavBar from "../layouts/NavBar";
import { useEffect, useState } from "react";
import Main from "../layouts/Main";

const AppLayout = () => {
  const [nav, setNav] = useState(false);

  let loc = useLocation().pathname;

  const handleClick = () => {
    if (!nav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    setNav(!nav);
  };

  return (
    <div>
      {loc === "/Signup" || loc === "/Login" ? (
        <></>
      ) : (
        <>
          <NavBar nav={nav} setNav={setNav} handleClick={handleClick} />
          <div
            onClick={() => handleClick()}
            className={`${
              nav ? "visible" : "hidden"
            } fixed bg-black w-full h-full bg-opacity-70 z-[99]`}
          ></div>
        </>
      )}

      {!(loc === "/Query" || loc === "/Signup" || loc === "/Login") && <Main />}

      <Outlet />

      {loc === "/Query" && <div className="h-[38rem]"></div>}

      <Footer />
    </div>
  );
};

export default AppLayout;
