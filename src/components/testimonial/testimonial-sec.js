"use client";
import React, { useState } from "react";
import Image from "next/image";

const Testimonial_Sec = () => {
  const testimonials = {
      content: "Our commitment to your security is backed by our accreditations & certifications.",
    };

  const testimonial_img = [
    {
      image: "/logo-bssn.png",
      width: 116,
      height: 116
    },
    {
      image: "/logo-oscp.png",
      width: 116,
      height: 116
    },
    {
      image: "/logo-ceh.png",
      width: 156,
      height: 116
    },
    {
      image: "/logo-bsi.png",
      width: 243,
      height: 116
    },
  ]

  return (
    <section className="flex flex-col items-center justify-center w-full p-2 py-10 xl:p-28 lg-p:24">
        <h2 className="text-3xl text-center sm:text-6xl mb-10">
          {testimonials.content}
        </h2>
      <div className="flex flex-row items-center space-y-2 gap-20 pt-12">
        {testimonial_img.map((testimonial, index) => (
          <div key={index}>
            <Image
              src={testimonial.image}
              width={testimonial.width}
              height={testimonial.height}
              alt={`testimonial img ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial_Sec;

