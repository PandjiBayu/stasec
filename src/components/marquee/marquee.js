import React from "react";
import "./marquee.css"

const Marquee = ({ list }) => {
  return (
    <div className="marquee py-[40px] bg-[#4B08B4]">
      <div className="marquee-content">
        {list.map((src, index) => (
          <div key={index} className="inline-block mx-10">
            <h3 className="text-2xl text-white">{src}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
