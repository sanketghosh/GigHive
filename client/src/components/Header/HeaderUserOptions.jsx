import { Link } from "react-router-dom";

const HeaderUserOptions = ({ userOptions }) => {
  return (
    <div className="absolute top-10 right-0 bg-gray-50 rounded-md border shadow-lg flex flex-col py-5 px-3 text-sm w-44 font-medium gap-2 z-20">
      {userOptions.map((opts) => (
        <Link
          to={opts.link}
          className="cursor-pointer text-sage-600 hover:text-sage-700 border-b-[0.5px] hover:border-sage-400 hover:shadow-md px-3 py-3 rounded-md"
          key={opts.id}
        >
          {opts.text}
        </Link>
      ))}
    </div>
  );
};

export default HeaderUserOptions;
