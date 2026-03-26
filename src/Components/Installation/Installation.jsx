import React from "react";
import { useOutletContext } from "react-router";
import AppsCard from "../AppsPage/AppsCard";

const Installation = () => {
  const { installedApps } = useOutletContext();

  return (
    <div className="p-10 bg-base-200 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">My Installed Apps</h1>

      {installedApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {installedApps.map((app) => (
            <AppsCard key={app.id} {...app} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-20 text-gray-500">
          <p className="text-xl font-bold">Your storage is empty.</p>
          <p>Go to the Apps page to install something!</p>
        </div>
      )}
    </div>
  );
};

export default Installation;
