import React from "react";
import AppErrorImage from "../../assets/App-Error.png";
import { Link } from "react-router";

const AppError = () => {
  return (
    <div className="text-center py-20">
      <img
        src={AppErrorImage}
        alt="App Error Image"
        className="justify-center mx-auto p-5"
      />
      <h2 className="text-3xl font-bold ">OPPS!! APP NOT FOUND</h2>
      <p className="text-gray-400">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <Link to="/apps" className="btn bg-purple-600 text-white mt-4">
        Go Back!
      </Link>
    </div>
  );
};

export default AppError;
