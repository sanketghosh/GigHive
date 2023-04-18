import React from "react";

const ProjectCard = ({ cardImage, profilePic, username, category }) => {
  return (
    <div className='w-72 h-52 bg-gray-50 border-[2px] shadow-sm hover:shadow-lg rounded-md overflow-hidden flex flex-col'>
      <img
        src={cardImage}
        alt='project img'
        className='w-full h-3/5 object-cover'
      />
      <div className='w-full h-full flex items-center px-2'>
        <div className='flex items-center gap-2'>
          <img
            src={profilePic}
            alt='freelancer'
            className='h-12 w-12 object-cover border border-sage-600 rounded-full'
          />
          <div className='flex flex-col font-medium text-sage-900'>
            <span className='text-sm'>{category}</span>
            <span className='text-xs'>{username}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
