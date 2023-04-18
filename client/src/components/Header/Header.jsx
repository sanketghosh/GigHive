import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import HeaderUser from "./HeaderUser";

const Header = () => {
  const [headerMenuActive, setHeaderMenuActive] = useState(false);

  const { pathname } = useLocation();

  function isHeaderActiveHandler() {
    window.scrollY > 0 ? setHeaderMenuActive(true) : setHeaderMenuActive(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", isHeaderActiveHandler);

    return () => {
      window.removeEventListener("scroll", isHeaderActiveHandler);
    };
  }, []);

  //temporarily creating an user, later we'll be fetching from our API

  const currentUser = {
    id: 1,
    username: "Jax Teller",
    isSeller: true,
  };

  const navOptions = [
    {
      id: 1,
      text: "GigHive Business",
    },

    {
      id: 2,
      text: "Explore",
    },

    {
      id: 3,
      text: "English",
    },

    {
      id: 4,
      text: "Sign In",
    },

    !currentUser?.isSeller && {
      id: 5,
      text: "Become a seller",
    },
  ];

  return (
    <header
      className={
        headerMenuActive || pathname !== "/"
          ? " bg-sunset-400 text-tomato-600 h-16 transition-[0.4s] sticky top-0 z-30"
          : "bg-tomato-600 text-sunset-400 h-16 z-30"
      }>
      <div className='max-w-7xl mx-auto flex items-center select-none px-3 py-2 justify-between h-full'>
        <div className='font-bold text-4xl h-full'>
          <Link to='/'>
            <span className='font-rowdies cursor-pointer '>GigHive</span>
          </Link>
        </div>
        <nav className='flex items-center gap-5'>
          {navOptions.map((opt) => {
            return (
              <span
                key={opt.id}
                className='cursor-pointer transition font-medium text-sm'>
                {opt.text}
              </span>
            );
          })}

          {!currentUser && (
            <button
              className={
                headerMenuActive
                  ? "border-tomato-600 px-6 py-1 border-[2px] rounded-md transition font-medium hover:bg-tomato-600 hover:text-sunset-400"
                  : " border-sunset-400  hover:bg-sunset-500  hover:text-tomato-600 px-6 py-1 border-[2px] rounded-md transition font-medium"
              }>
              Join
            </button>
          )}

          {currentUser && <HeaderUser currentUser={currentUser} />}
        </nav>
      </div>
      {(headerMenuActive || pathname !== "/") && (
        <>
          <hr className='w-full border-[0.5px] border-sunset-500 h-0' />
          <HeaderMenu />
        </>
      )}
    </header>
  );
};

export default Header;
