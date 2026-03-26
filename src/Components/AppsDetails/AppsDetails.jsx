import React from "react";
import { useLoaderData, Link } from "react-router";
import AppError from "../ErrorPages/AppError";

const AppsDetails = () => {
  const app = useLoaderData();

  if (!app) {
    return <AppError />;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-10">
      <Link to="/apps" className="btn btn-ghost mb-6">
        ← Back to Apps
      </Link>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/3">
          <img
            src={app.image}
            alt={app.title}
            className="rounded-3xl shadow-2xl w-full object-cover aspect-square"
          />
        </div>

        <div className="flex-1 text-left">
          <h1 className="text-5xl font-extrabold mb-2">{app.title}</h1>
          <div className="flex gap-4 mb-6">
            <span className="badge badge-success gap-2 p-4 font-bold text-white">
              ⭐ {app.ratingAvg} Rating
            </span>
            <span className="badge badge-ghost gap-2 p-4 font-bold">
              ⬇️ {app.downloads} Downloads
            </span>
          </div>

          <h3 className="text-xl font-bold mb-2">About this App</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            {app.description ||
              "No description provided for this application yet."}
          </p>

          <button className="btn btn-primary btn-lg mt-8 w-full md:w-auto px-10">
            Insatll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppsDetails;
