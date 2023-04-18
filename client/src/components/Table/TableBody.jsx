import React from "react";

const TableBody = ({ image, title, orders, price, icon, buyer, isOrder }) => {
  return (
    <tr className='bg-sage-300'>
      <td className='p-3 w-44'>
        <div className='flex items-center justify-center'>
          <img
            className='h-14 w-28 rounded-sm  object-cover'
            src={image}
            alt='unsplash image'
          />
        </div>
      </td>
      <td className='p-3 w-[38rem] text-center'>{title}</td>
      <td className='p-3 font-semibold w-48 text-center'>
        $ <span>{price}</span>
      </td>
      {isOrder ? (
        <td className='p-3 w-44 text-center font-medium'>
          <span className='px-2'>{buyer}</span>
        </td>
      ) : (
        <td className='p-3 w-44 text-center font-medium'>
          <span className='px-2'>{orders}</span>
        </td>
      )}
      <td className='p-3 w-24 text-center'>
        <button
          href='#'
          className={`${isOrder ? "bg-indigo-500" : "bg-red-500"}  ${
            isOrder ? "hover:bg-indigo-600" : "hover:bg-red-600"
          } transition text-sage-100 p-2 text-xl rounded-full ml-2`}>
          {icon}
        </button>
      </td>
    </tr>
  );
};

export default TableBody;
