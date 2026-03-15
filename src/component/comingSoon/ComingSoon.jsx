import allImages from "@/helper/imagesProvider";
import React, { useEffect, useState } from "react";

const ComingSoon = () => {
  const { notFoundPage } = allImages;

  const [timeLeft, setTimeLeft] = useState({
    days: "05",
    hours: "07",
    mins: "09",
    secs: "03",
  });
  const [email, setEmail] = useState("");

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 5);
    target.setHours(target.getHours() + 7);
    target.setMinutes(target.getMinutes() + 9);
    target.setSeconds(target.getSeconds() + 3);
    const pad = (n) => String(Math.floor(n)).padStart(2, "0");
    const interval = setInterval(() => {
      const diff = target - new Date();
      if (diff <= 0) return clearInterval(interval);
      setTimeLeft({
        days: pad(diff / 86400000),
        hours: pad((diff % 86400000) / 3600000),
        mins: pad((diff % 3600000) / 60000),
        secs: pad((diff % 60000) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="lg:h-screen object-cover flex flex-col items-center justify-center "
      style={{ backgroundImage: `url(${notFoundPage})` }}
    >
      {/* Main Card */}
      <div className="   flex flex-col items-center justify-center ">
        {/* Title */}
        <h1 className="font-bold text-[100px] text-head">COMING SOON</h1>

        {/* Subtitle */}
        <p className="head_14_regular text-head max-w-[520px] text-center pb-[45px]">
          Sorry, we couldn't find the page you where looking for. We suggest
          that you return to home page.
        </p>

        {/* Countdown */}
        <div className="flex items-start mb-[49px] gap-x-2">
          <TimeBlock value={timeLeft.days} label="Days" />
          <Colon />
          <TimeBlock value={timeLeft.hours} label="Hours" />
          <Colon />
          <TimeBlock value={timeLeft.mins} label="Mins" />
          <Colon />
          <TimeBlock value={timeLeft.secs} label="Sec" />
        </div>

        {/* Email Row */}
        <div className="flex gap-x-5 items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1  p-[18px]  w-[300px] lg:w-[550px] border  border-footer rounded  texts_14_regular  text-second placeholder:text-second bg-white "
          />
          <button className="bg-head   rounded  py-5  px-[61px] text-white px-8 text-[13px] font-semibold tracking-[1.5px] uppercase hover:bg-[#d6001c] transition-colors duration-200 flex-shrink-0 cursor-pointer">
            JOIN
          </button>
        </div>
      </div>
    </div>
  );
};

const TimeBlock = ({ value, label }) => (
  <div className="flex flex-col items-center min-w-[72px]">
    <span className="font-normal text-[30px]/[30px]  text-head ">{value}</span>
    <span className="font-medium text-[16px]/[30px] text-second uppercase mt-[6px]">
      {label}
    </span>
  </div>
);

const Colon = () => (
  <span className="text-[34px] font-normal text-head ">:</span>
);

export default ComingSoon;
