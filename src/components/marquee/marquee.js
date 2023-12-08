import React from "react";
import "./marquee.css"

const Marquee = ({ list }) => {
  return (
    <div className="marquee py-[40px] bg-[#4B08B4]">
      <div className="marquee-content">
        {list.map((src, index) => (
          <div key={index} className="inline-block mx-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              style={{ height: 50, objectFit: "contain" }}
              alt={`partner ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
