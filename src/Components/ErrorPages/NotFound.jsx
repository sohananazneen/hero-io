import React from "react";
import ErrorImage from "../../assets/error-404.png";
import { Link } from "react-router";
const NotFound = () => {
  return (
    <div className="text-center py-20">
      <img
        src={ErrorImage}
        alt="App Error Image"
        className="justify-center mx-auto p-5"
      />
      <h2 className="text-3xl font-bold ">Oops, page not found!</h2>
      <p className="text-gray-400">
        The page you are looking for is not available.
      </p>
      <Link to="/" className="btn bg-purple-600 text-white mt-4">
        Go Back!
      </Link>
    </div>
  );
};

export default NotFound;
