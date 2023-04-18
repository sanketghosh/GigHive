import React from "react";
import {
  AiFillCamera,
  AiFillCode,
  FaDatabase,
  FaHandshake,
  FaPaintBrush,
  MdComputer,
  MdStyle,
  GiNotebook,
  ImMusic,
  ImVideoCamera,
} from "../../data/exploreMarketplaceIcons.js";

const iconStyles = "text-xl md:text-2xl lg:text-4xl";

const cardItems = [
  {
    id: 1,
    logo: <FaPaintBrush className={iconStyles} />,
    text: "Graphics & design",
  },
  {
    id: 2,
    logo: <MdComputer className={iconStyles} />,
    text: "Digital marketing",
  },
  {
    id: 3,
    logo: <GiNotebook className={iconStyles} />,
    text: "Writing & translation",
  },
  {
    id: 4,
    logo: <ImVideoCamera className={iconStyles} />,
    text: "Video & animation",
  },
  {
    id: 5,
    logo: <ImMusic className={iconStyles} />,
    text: "music & audio",
  },
  {
    id: 6,
    logo: <AiFillCode className={iconStyles} />,
    text: "programming & tech",
  },
  {
    id: 7,
    logo: <FaHandshake className={iconStyles} />,
    text: "business",
  },
  {
    id: 8,
    logo: <MdStyle className={iconStyles} />,
    text: "lifestyle",
  },
  {
    id: 9,
    logo: <FaDatabase className={iconStyles} />,
    text: "data",
  },
  {
    id: 10,
    logo: <AiFillCamera className={iconStyles} />,
    text: "photography",
  },
];

const SmallSectionCard = () => {
  return (
    <>
      {cardItems.map((data) => {
        return (
          <div
            className='flex flex-col justify-center bg-gray-50 hover:bg-sage-900 transition hover:text-sage-600 items-center px-2 py-4 mt-4 shadow-md hover:shadow-lg cursor-pointer rounded-md gap-2'
            key={data.id}>
            <span>{data.logo}</span>
            <span className='text-sm capitalize font-medium'>{data.text}</span>
          </div>
        );
      })}
    </>
  );
};

const ExploreMarketplace = () => {
  return (
    <section className='select-none'>
      <div className='max-w-7xl mx-auto px-3 py-5'>
        <h1 className='text-lg md:text-xl font-semibold text-sage-900'>
          Explore The Marketplace
        </h1>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-3'>
          <SmallSectionCard />
        </div>
      </div>
    </section>
  );
};

export default ExploreMarketplace;
