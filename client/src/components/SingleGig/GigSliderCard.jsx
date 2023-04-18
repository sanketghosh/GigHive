import React from "react";

const GigSliderCard = ({ img }) => {
  return (
    <div className='w-96 h-[27rem] mt-4'>
      <img src={img} alt='' className='object-cover h-full w-full' />
    </div>
  );
};

export default GigSliderCard;
