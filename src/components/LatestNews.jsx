import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
        <p className="font-bold">
          The Oklahoma City Thunder won a double-overtime thriller against the
          Houston Rockets on banner-raising night.
        </p>
        <p className="font-semibold">
          NBA Commissioner Adam Silver has announced that WNBA players will
          receive a "big" pay increase in their new collective bargaining
          agreement.
        </p>
        <p className="font-semibold">
          The New York Kicks faced the Cleveland Cavaliers with both teams
          missing key players due to injury.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
