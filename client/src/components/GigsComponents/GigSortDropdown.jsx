import React from "react";

const GigSortDropdown = () => {
  return (
    <div className='text-sm'>
      <span>Sort By</span>
      <select className='bg-transparent border-none outline-none font-medium'>
        <option value='' className='bg-gray-50 border-none'>
          Newest
        </option>
        <option value=''>Best Selling</option>
      </select>
    </div>
  );
};

export default GigSortDropdown;
