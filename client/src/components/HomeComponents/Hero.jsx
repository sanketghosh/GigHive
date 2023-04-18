import { ImSearch } from "react-icons/im";
import heroImage from "/man.png";

const Hero = () => {
  const popularButtonItems = [
    {
      id: 1,
      text: "Web Design",
    },

    {
      id: 2,
      text: "Wordpress",
    },

    {
      id: 3,
      text: "Logo Design",
    },

    {
      id: 4,
      text: "AI Services",
    },
  ];

  return (
    <div className='bg-tomato-600 text-sunset-400 select-none'>
      {/* container  */}
      <div className='max-w-7xl mx-auto px-3 py-4 flex h-96 items-center justify-evenly'>
        {/* left  */}
        <div className='flex flex-col gap-3 max-w-xl'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl text-center sm:text-left font-bold'>
            GigHive: The hive of{" "}
            <i className='font-semibold'>talented freelancers </i> for your next
            project.
          </h1>

          {/* search box  */}
          <div className='mt-2 flex items-center w-full justify-center md:justify-start'>
            {/* for icon and input  */}
            <div className='flex items-center bg-sunset-100 gap-2 px-3 py-2 w-3/4 text-gray-400 rounded-l-sm'>
              <ImSearch />
              <input
                type='text'
                placeholder='search here...'
                className='bg-transparent placeholder:text-sm placeholder:text-gray-400 text-gray-700 focus:outline-none w-full'
              />
            </div>
            {/* search button  */}
            <button className='bg-sunset-400 px-4 py-2 text-tomato-600 font-medium rounded-r-sm hover:bg-sunset-500 transition'>
              Search
            </button>
          </div>
          {/* popular  */}
          <div className='flex gap-2 mt-2 items-center flex-col md:flex-row'>
            <span className='hidden sm:block'>Popular :</span>
            <div className='flex gap-2 flex-wrap'>
              {popularButtonItems.map((btn) => {
                return (
                  <button
                    key={btn.id}
                    className='text-xs px-3 py-1 rounded-full border border-sunset-400 hover:bg-sunset-400 hover:text-tomato-600 transition font-medium'>
                    {btn.text}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* right  */}

        <div className='hidden lg:block relative'>
          <img
            src={heroImage}
            alt=''
            className='h-full w-[20rem] object-contain'
          />
          <span className='text-tomato-600 absolute bottom-2 right-3 bg-sunset-300 border px-3 py-1 rounded-md hover:shadow-lg text-lg font-medium'>
            Aaron Williams
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
