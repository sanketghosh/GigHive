import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen bg-sunset-300">
      <div className="flex items-center justify-center h-full flex-col text-gray-600 gap-2">
        <span className="text-9xl font-extrabold">Oops!</span>
        <span className="mt-4 text-3xl font-semibold">Page Not Found !</span>
        <p className="text-center max-w-lg text-sm mt-3">
          The page your are looking for might have been removed, has changed
          it's name or temporarily unavailable
        </p>
        <Link to="/">
          {" "}
          <button className="bg-tomato-600 text-sunset-400 mt-3 px-5 py-2 rounded-full hover:bg-tomato-700 transition">
            Go Back To Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
