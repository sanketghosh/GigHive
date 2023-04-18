import {
  BreadcrumbsNavigator,
  GigCard,
  GigSearchFilter,
  GigSortDropdown,
} from "../components";
import { gigs } from "../data/data";

const Gigs = () => {
  return (
    <section className='select-none text-sage-900 mt-10'>
      <div className='max-w-7xl mx-auto px-3 py-4'>
        {/* gig header and details */}
        <div className='flex flex-col my-3 md:px-2 lg:px-0'>
          <BreadcrumbsNavigator root='home' current='graphics & design' />
          <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold capitalize mt-2'>
            AI artists
          </h1>
          <p className='text-xs md:text-sm'>
            Explore the boundaries of art and technology with Gigger's AI
            artists
          </p>
        </div>
        {/* search sort filters  */}
        <div className='my-3 md:px-2 lg:px-0 flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
          <GigSearchFilter
            label='budget'
            placeholder1='min'
            placeholder2='max'
            buttonText='apply'
          />
          <GigSortDropdown />
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 justify-items-center mt-2 md:mt-4'>
          {gigs.map((data) => {
            return (
              <GigCard
                key={data.id}
                cardImage={data.img}
                profilePic={data.pp}
                description={data.desc}
                price={data.price}
                username={data.username}
                star={data.star}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gigs;
