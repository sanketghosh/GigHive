import React from "react";
import { BreadcrumbsNavigator, GigSliderCard, Slide } from "../components";
import { BiLike, BiDislike } from "react-icons/bi";
import { AiFillStar, AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineRestartAlt } from "react-icons/md";
import { HiBadgeCheck } from "react-icons/hi";

import { Slider } from "infinite-react-carousel/lib";

const Gig = () => {
  /* 
   <img src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />

*/

  const reviewsData = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Jane Fox",
      country: "United States",
      reviewDesc:
        "Hi this is a dummy review text, we are using here in this section to generate dummy review comments about the gigger user's gig. This is just for temporary test purposes, soon we are going to delete it and replace with dynamically generated stuffs from API",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Daniel Taylor",
      country: "United Kingdom",
      reviewDesc:
        "Hi this is a dummy review text, we are using here in this section to generate dummy review comments about the gigger user's gig. This is just for temporary test purposes, soon we are going to delete it and replace with dynamically generated stuffs from API",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Oliver Torres",
      country: "Spain",
      reviewDesc:
        "Hi this is a dummy review text, we are using here in this section to generate dummy review comments about the gigger user's gig. This is just for temporary test purposes, soon we are going to delete it and replace with dynamically generated stuffs from API",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Raul Cuadrado",
      country: "Mexico",
      reviewDesc:
        "Hi this is a dummy review text, we are using here in this section to generate dummy review comments about the gigger user's gig. This is just for temporary test purposes, soon we are going to delete it and replace with dynamically generated stuffs from API",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Rafael de Silva",
      country: "Brazil",
      reviewDesc:
        "Hi this is a dummy review text, we are using here in this section to generate dummy review comments about the gigger user's gig. This is just for temporary test purposes, soon we are going to delete it and replace with dynamically generated stuffs from API",
    },
  ];

  const gigImages = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  const boxItems = [
    {
      id: 1,
      title: "From",
      answers: "USA",
    },
    {
      id: 2,
      title: "Avg. response time",
      answers: "4 hours",
    },
    {
      id: 3,
      title: "Language",
      answers: "English",
    },
    {
      id: 4,
      title: "Member since",
      answers: "Aug. 2022",
    },
    {
      id: 5,
      title: "Last delivery",
      answers: "1 day",
    },
  ];

  const rightBoxPoints = [
    {
      id: 1,
      text: "Prompt writing",
    },
    {
      id: 2,
      text: "Artwork delivery",
    },
    {
      id: 3,
      text: "Image upscaling",
    },
    {
      id: 4,
      text: "Additional design",
    },
  ];

  return (
    <main className='select-none text-sage-900 mt-10'>
      <div className='max-w-7xl mx-auto px-3 py-4'>
        <BreadcrumbsNavigator root='home' current='ai generated art' />
        {/* wrapper  */}
        <div className='flex gap-10'>
          {/* left part  */}
          <div className='flex-[1.5]'>
            {/* about user and his/her gig details  */}
            <h1 className='text-2xl font-bold mt-3'>
              I will create AI generated art for you
            </h1>
            <div className='flex gap-3 mt-2'>
              {/* image and name  */}
              <div className='flex gap-1 items-center'>
                <img
                  src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  alt='profile pic'
                  className='h-10 w-10 object-cover rounded-full'
                />
                <span className='font-medium'>John Doe</span>
              </div>
              <div className='flex items-center text-amber-500'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
            <Slide slidesToShow={1} arrowsScroll={1}>
              {gigImages.map((card) => (
                <div className='object-contain' key={card.id}>
                  <GigSliderCard img={card.img} />
                </div>
              ))}
            </Slide>
            {/* about container  */}
            <div className='mt-10'>
              <h2 className='text-lg font-medium mb-4'>About this gig</h2>
              <p className='text-sm'>
                I will create AI generated images based on text prompts. This
                means I can help you to create a vision you have through textual
                description of your scene requiring any reference images. Some
                things I have found ot often excels at are: Character portraits,
                landscapes, logos etc. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Consequatur facilis architecto nisi dolorum
                soluta commodi perspiciatis ad voluptatibus quos possimus!
              </p>
            </div>
            {/* about seller  */}
            <div className='mt-10'>
              <h2 className='text-lg font-medium mb-4'>About the seller</h2>
              <div className='flex items-center gap-2 mt-2'>
                <img
                  src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  alt='user image'
                  className='h-14 w-14 object-cover rounded-full'
                />
                <div className='flex flex-col gap-1.5'>
                  <span className='font-medium'>John Doe</span>
                  <div className='text-amber-500 flex'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <button className='px-4 py-2 text-sm border border-sage-900 rounded-sm hover:bg-sage-900 transition text-sage-900 hover:text-sage-200'>
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
            {/* box  */}
            <div className='w-full py-5 px-4 border border-sage-500 mt-10 rounded-md flex flex-col items-center justify-between'>
              <div className='w-full grid grid-cols-3 gap-14'>
                {boxItems.map((item) => (
                  <div key={item.id} className='flex flex-col'>
                    <span className='text-sm text-sage-700'>{item.title}</span>
                    <span className='text-[15px] font-medium'>
                      {item.answers}
                    </span>
                  </div>
                ))}
              </div>
              <hr />
              <div className='mt-10'>
                <p className='text-sm'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                  vel nobis asperiores aperiam veritatis dolore minima modi
                  consequuntur nulla consequatur?
                </p>
              </div>
            </div>

            {/* reviews  */}
            <div className='mt-10 w-full'>
              <h2 className='text-lg font-medium mb-4'>Reviews</h2>
              <div className='flex flex-col gap-8 w-full'>
                {reviewsData.map((data) => {
                  return (
                    <div
                      className='flex flex-col gap-3 w-full bg-sage-300 px-3 py-4 rounded-sm shadow-sm shadow-sage-600'
                      key={data.id}>
                      {/* user details  */}
                      <div className='flex gap-3 items-center'>
                        <img
                          src={data.img}
                          alt=''
                          className='w-10 h-10 rounded-full border border-sage-600'
                        />
                        <div>
                          <h3 className='font-medium text-sm'>
                            {data.username}
                          </h3>
                          <p className='text-xs opacity-70'>{data.country}</p>
                        </div>
                      </div>
                      {/* stars rating  */}
                      <div className='flex items-center text-amber-500 gap-1 text-sm'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                      {/* review desc  */}
                      <div>
                        <p className='text-[13px]'>{data.reviewDesc}</p>
                      </div>
                      {/* like / dislike review */}
                      <div className='flex items-center gap-2 font-medium text-sm'>
                        <span className=''>Helpful ?</span>
                        <div className='flex items-center gap-1'>
                          <BiLike />
                          <span>Yes</span>
                        </div>
                        <div className='flex items-center gap-1'>
                          <BiDislike />
                          <span>No</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* right part  */}
          <div className='flex-1'>
            {/* price details summary box  */}
            <div className='w-full bg-sage-300 sticky top-32 rounded-sm shadow-sm shadow-sage-600 text-sm px-4 py-5 flex flex-col gap-5'>
              {/* price  */}
              <div className='flex justify-between items-center text-base font-semibold'>
                <h2>1 AI Generated Image</h2>
                <h2>
                  $ <span>55.66</span>
                </h2>
              </div>
              {/* details  */}
              <p className='text-xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, ex necessitatibus cum minima excepturi recusandae
                vitae sit illum sunt quas!
              </p>
              {/* more features */}
              <div className='flex justify-between items-center font-medium'>
                <span className='flex items-center gap-1'>
                  <AiOutlineClockCircle className='text-lg' />
                  <span>2 days delivery</span>
                </span>

                <span className='flex items-center gap-1'>
                  <MdOutlineRestartAlt className='text-lg' />
                  <span>2 revisions</span>
                </span>
              </div>
              {/* points  */}
              <div>
                {rightBoxPoints.map((point) => (
                  <div key={point.id} className='flex items-center gap-1 mt-3'>
                    <HiBadgeCheck className='text-lg text-tomato-600' />
                    <p>{point.text}</p>
                  </div>
                ))}
              </div>
              {/* button  */}
              <button className='py-3 bg-sage-800 hover:bg-sage-900 transition rounded-sm text-sage-200 capitalize'>
                continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Gig;
