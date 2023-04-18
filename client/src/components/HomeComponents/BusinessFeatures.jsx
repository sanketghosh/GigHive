import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import img from "/business_feature.webp";

const businessFeaturePointsData = [
  {
    id: 1,
    icon: <FiCheckCircle className='text-lg md:text-xl text-sunset-700' />,
    point: "Connect to freelancers with proven business experience",
  },
  {
    id: 2,
    icon: <FiCheckCircle className='text-lg md:text-xl text-sunset-700' />,
    point: "Get matched with the perfect talent by customer success manager",
  },
  {
    id: 3,
    icon: <FiCheckCircle className='text-lg md:text-xl text-sunset-700' />,
    point: "Manage teamwork and boost productivity with one powerful workspace",
  },
];

const BusinessFeaturePointsContainer = () => {
  return (
    <>
      {/* single point container  */}
      {businessFeaturePointsData.map((data) => {
        return (
          <div key={data.id} className='flex flex-col gap-1'>
            {/* wrapper for check point and point header  */}
            <div className='flex items-center gap-2'>
              <span>{data.icon}</span>
              <span className='text-base font-medium text-sage-600'>
                {data.point}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

const BusinessFeatures = () => {
  return (
    <section className='bg-sage-900 mt-5 select-none'>
      {/* wrapper  */}
      <div className='max-w-7xl mx-auto px-3 py-10 flex flex-col lg:flex-row items-center gap-10 md:gap-16'>
        {/* left container  */}
        <div className='flex-1'>
          {/* feature headers  */}
          <div className='flex flex-col gap-3 text-xl md:text-2xl lg:text-3xl font-bold text-sunset-500'>
            <h1>
              GigHive <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
          </div>
          <p className='mt-3 text-sm text-sage-500'>
            Upgrade to a curated experience packed wit tools and benefits
            dedicated to business
          </p>
          {/* points container  */}
          <div className='flex flex-col gap-6 mt-6'>
            <BusinessFeaturePointsContainer />
            <button className='px-6 py-2 border-none rounded-sm bg-tomato-500 transition hover:bg-tomato-550 text-sage-100 font-medium md:self-start'>
              Explore GigHive Business
            </button>
          </div>
        </div>

        {/* right container  */}
        <div className='flex-1 justify-center flex'>
          <img
            src={img}
            className='w-full sm:w-5/6 lg:w-full rounded-sm md:rounded-md'
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessFeatures;
