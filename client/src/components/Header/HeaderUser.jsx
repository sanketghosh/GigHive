import { useState } from "react";
import userImg from "/user.avif";
import HeaderUserOptions from "./HeaderUserOptions";

const HeaderUser = ({ currentUser }) => {
  const [openUserOptions, setOpenUserOptions] = useState(false);

  function openCloseUserOptionsHandler() {
    setOpenUserOptions(!openUserOptions);
  }

  const userOptions = [
    currentUser?.isSeller && {
      id: 1,
      text: "My Gigs",
      link: "/mygigs",
    },

    currentUser?.isSeller && {
      id: 2,
      text: "Add New Gigs",
      link: "/addnewgig",
    },

    {
      id: 3,
      text: "Orders",
      link: "/orders",
    },

    {
      id: 4,
      text: "Messages",
      link: "/messages",
    },

    {
      id: 5,
      text: "LogOut",
      link: "/login",
    },
  ];

  return (
    <div className='flex items-center relative'>
      <div
        className='flex items-center gap-2'
        onClick={openCloseUserOptionsHandler}>
        <img
          src={userImg}
          alt='user img'
          className='h-8 w-8 object-contain rounded-full cursor-pointer border-[2px] border-sunset-600'
        />
        <span className='text-sm cursor-pointer font-medium'>
          {currentUser?.username}
        </span>
      </div>
      {openUserOptions && (
        <>
          <HeaderUserOptions userOptions={userOptions} />
        </>
      )}
    </div>
  );
};

export default HeaderUser;
