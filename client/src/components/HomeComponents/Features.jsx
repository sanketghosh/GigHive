import React from "react";
import video from "/video.mp4";
// import checkpoint from "/check.png";
import { FiCheckCircle } from "react-icons/fi";

const featurePointsData = [
  {
    id: 1,
    icon: <FiCheckCircle className='text-lg md:text-xl text-tomato-600' />,
    point: "The best for every budget",
    pointDetails:
      "Find high-quality services at every price point. No hourly rates, just project based pricing",
  },
  {
    id: 2,
    icon: <FiCheckCircle className='text-lg md:text-xl text-tomato-600' />,
    point: "The best for every budget",
    pointDetails:
      "Find high-quality services at every price point. No hourly rates, just project based pricing",
  },
  {
    id: 3,
    icon: <FiCheckCircle className='text-lg md:text-xl text-tomato-600' />,
    point: "The best for every budget",
    pointDetails:
      "Find high-quality services at every price point. No hourly rates, just project based pricing",
  },
  {
    id: 4,
    icon: <FiCheckCircle className='text-lg md:text-xl text-tomato-600' />,
    point: "The best for every budget",
    pointDetails:
      "Find high-quality services at every price point. No hourly rates, just project based pricing",
  },
];

const FeaturePointsContainer = () => {
  return (
    <>
      {/* single point container  */}
      {featurePointsData.map((data) => {
        return (
          <div key={data.id} className='flex flex-col gap-1'>
            {/* wrapper for check point and point header  */}
            <div className='flex items-center gap-2'>
              <span>{data.icon}</span>
              <span className='text-lg font-semibold text-sage-800'>
                {data.point}
              </span>
            </div>
            <p className='text-xs md:text-sm text-sage-700 font-medium'>
              {data.pointDetails}
            </p>
          </div>
        );
      })}
    </>
  );
};

const Features = () => {
  return (
    <section className='bg-sunset-400 mt-5 select-none'>
      {/* wrapper  */}
      <div className='max-w-7xl mx-auto px-3 py-10 flex flex-col lg:flex-row items-center gap-16'>
        {/* left container  */}
        <div className='flex-1'>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-tomato-600'>
            World class freelance talents at your fingertips
          </h1>
          {/* points container  */}
          <div className='flex flex-col gap-6 mt-6'>
            <FeaturePointsContainer />
          </div>
        </div>

        {/* right container  */}
        <div className='flex-1 justify-center flex'>
          <video
            src={video}
            controls
            className='w-full sm:w-5/6 lg:w-full rounded-sm md:rounded-md'></video>
        </div>
      </div>
    </section>
  );
};

export default Features;
