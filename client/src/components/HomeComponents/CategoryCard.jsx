import { Link } from "react-router-dom";

const CategoryCard = ({ image, desc, title }) => {
  return (
    <Link to='/gigs/'>
      <div className='w-44 h-52 relative cursor-pointer text-sunset-200'>
        <img
          src={image}
          alt='category image'
          className='w-full h-full object-cover rounded-md filter brightness-50 overflow-auto hover:contrast-50'
        />
        <h2 className='absolute top-3 left-3 font-bold text-lg'>{title}</h2>
        <p className='absolute top-10 left-3 text-xs'>{desc}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
