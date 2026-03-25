import React from "react";

const States = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-[linear-gradient(135deg,#632EE3,#9F62F2)] -mt-4">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 font-inter">
        Trusted by Millions, Built for You
      </h1>

      <div className="stats stats-vertical lg:stats-horizontal  text-white  w-full max-w-4xl">
        <div className="stat place-items-center py-6">
          <div className="stat-title text-white/70">Total Downloads</div>
          <div className="stat-value text-white font-extrabold text-5xl my-5">
            29.6M
          </div>
          <div className="stat-desc text-white/60">
            21% more than last month
          </div>
        </div>

        <div className="stat place-items-center py-6">
          <div className="stat-title text-white/70">Total Reviews</div>
          <div className="stat-value text-white font-extrabold text-5xl my-5">
            906K
          </div>
          <div className="stat-desc text-white/60">
            46% more than last month
          </div>
        </div>

        <div className="stat place-items-center py-6">
          <div className="stat-title text-white/70">Active Apps</div>
          <div className="stat-value text-white font-extrabold text-5xl my-5">
            132+
          </div>
          <div className="stat-desc text-white/60">31 more will Launch</div>
        </div>
      </div>
    </div>
  );
};

export default States;
