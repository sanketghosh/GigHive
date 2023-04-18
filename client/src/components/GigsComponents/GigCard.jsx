import React, { useState } from "react";
import starImg from "/star.png";
import heartImg from "/heart.png";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const GigCard = ({
  cardImage,
  profilePic,
  username,
  description,
  price,
  star,
}) => {
  const [heartColor, setHeartColor] = useState(false);

  function changeHeartColorHandler() {
    setHeartColor(!heartColor);
  }

  return (
    <div className='w-[22rem] lg:w-60 xl:w-72 h-96 bg-gray-50 text-sage-800 shadow-md flex flex-col gap-2 rounded-md overflow-hidden'>
      {/* top part  */}
      <div className='w-full h-1/2'>
        <Link to='/gig/112'>
          <img src={cardImage} alt='' className='w-full h-full object-cover' />
        </Link>
      </div>
      {/* bottom part  */}
      <div className='flex-1 px-3 py-2 flex flex-col justify-between'>
        {/*image and name  */}
        <div className='flex items-center gap-2'>
          <img
            src={profilePic}
            alt='profile pic'
            className='w-10 h-10 object-cover rounded-full'
          />
          <span className='text-sm'>{username}</span>
        </div>
        {/* desc  */}
        <p className='text-xs'>{description}</p>
        {/* rating and heart  */}
        <div className='flex justify-between'>
          {/* rating  */}
          <div className='flex items-center gap-1'>
            <img src={starImg} alt='star' className='h-4 w-4' />
            <span className='font-semibold'>{star}</span>
          </div>
          {/* heart img container  */}
          <div
            className={`bg-sage-50 border p-2 rounded-full shadow-sm hover:shadow-lg ${
              heartColor === true ? "text-red-400" : "text-gray-300"
            } cursor-pointer`}
            onClick={changeHeartColorHandler}>
            <FaHeart />
          </div>
        </div>
        {/* pricing  */}
        <div className='flex items-center justify-between  pt-2 border-t'>
          <span className='capitalize text-xs'>starting at</span>
          <span className='font-medium'>${price}</span>
        </div>
      </div>
    </div>
  );
};

export default GigCard;
/* <img
        src='https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600'
        alt=''
      /> */
