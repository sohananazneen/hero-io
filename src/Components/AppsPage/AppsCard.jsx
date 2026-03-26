import React from "react";
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const AppsCard = ({ id, image, title, downloads, ratingAvg }) => {
  return (
    <Link to={`/appsdetails/${id}`}>
      <div
        className="card bg-base-100 shadow-xl
             hover:shadow-2xl transition-all duration-300 p-6 border border-base-200"
      >
        <figure className="px-4 pt-4">
          <img
            src={image}
            alt={title}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="size-full object-cover object-top rounded-2xl hover:scale-105 transition-all duration-500"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-between">
            <div className="btn bg-gray-200 text-green-500">
              <LuDownload />
              {downloads}
            </div>
            <div className="btn bg-gray-100 text-orange-500">
              <FaStar />
              {ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;
