import React from "react";
import { useLoaderData } from "react-router";
import AppError from "../ErrorPages/AppError";
import downloadImage from "../../assets/icon-downloads.png";
import startImage from "../../assets/icon-ratings.png";
import reviewsImage from "../../assets/icon-review.png";

const AppsDetails = () => {
  const appsData = useLoaderData();

  if (!appsData) {
    return <AppError />;
  }
  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    description,
    size,
    reviews,
  } = appsData;
  return (
    <div className="mx-auto p-6 lg:p-10">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/4 shadow-sm">
          <img src={image} alt={title} className="p-8 w-full object-cover" />
        </div>

        <div className="flex-1 text-left">
          <div className="border-b border-gray-200">
            <h1 className="text-5xl font-extrabold">{title}</h1>
            <p className="py-2">
              Developed by
              <span className="text-purple-600 font-bold"> {companyName}</span>
            </p>
          </div>
          <div>
            <div className="stats gap-6">
              <div className="stat border-none">
                <img src={downloadImage} alt="" />
                <div className="stat-title my-2">Downloads</div>
                <div className="stat-value">{downloads}</div>
              </div>

              <div className="stat border-none">
                <img src={startImage} alt="" />
                <div className="stat-title my-2">Average Ratings</div>
                <div className="stat-value">{ratingAvg}</div>
              </div>

              <div className="stat border-none">
                <img src={reviewsImage} alt="" />
                <div className="stat-title my-2">Total Reviews</div>
                <div className="stat-value">{reviews}</div>
              </div>
            </div>
          </div>
          <button className="btn btn-success text-white btn-lg w-full md:w-auto px-10">
            Insatll Now ({size})
          </button>
        </div>
      </div>
      <div className="py-4 mt-6">
        <h4 className="font-bold text-2xl mb-4">Description</h4>
        <p className="text-gray-600 text-lg whitespace-pre-line">
          {description || "No description provided for this application yet."}
        </p>
      </div>
    </div>
  );
};

export default AppsDetails;
