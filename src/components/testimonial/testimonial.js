"use client";
import React, { useState } from "react";
import ArrowLeft from "../icons/arrow-left";
import ArrowRight from "../icons/arrow-right";
import Image from "next/image";
import Quotation from "../icons/quotation";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      content:
        'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
      author: "John Doe",
      role: "CEO of Company A",
      image: "/customers.png",
    },
    {
      content: "Pellentesque habitant morbi tristique senectus et netus.",
      author: "Jane Smith",
      role: "Marketing Director at Company B",
      image: "/path-to-image-2.jpg",
    },
  ];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="p-[80px] flex flex-col items-center justify-center w-full">
      <div className="flex justify-between items-center w-full gap-[100px]">
        <button
          onClick={goToPrevious}
          className="rounded-full bg-white w-[42px] h-[42px] p-[15px]"
        >
          <ArrowLeft width={14} height={13} />
        </button>
        <div className="flex flex-col space-y-[60px] items-center">
          <div className="space-y-[22.5px] flex flex-col items-center">
            <div
              className="fpoint-text text-[56px] w-[551px]"
              style={{ textAlign: "center", lineHeight: "65.625px" }}
            >
              Why Customers Love Working With Us
            </div>
            <div>
              <Quotation width={32} height={26} />
            </div>
            <div
              className="fpoint-text text-[18px] h-[120px]"
              style={{ textAlign: "center", lineHeight: "33.375px" }}
            >
              {testimonials[currentIndex].content}
            </div>
          </div>
          <div className="flex flex-col items-center space-y-[7.5px]">
            <div>
              <Image
                src="/customers.png"
                width={75}
                height={75}
                alt="customer img"
              />
            </div>
            <div className="fpoint-text text-[18px]">
              {testimonials[currentIndex].author}
            </div>
            <div className="text-[12px]">{testimonials[currentIndex].role}</div>
          </div>
          <div className="flex space-x-[9.75px] mt-4">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`rounded-full w-3 h-3 ${
                  currentIndex === index ? "bg-[#2F58FF]" : "bg-[#C1CEF9]"
                }`}
              ></div>
            ))}
          </div>
        </div>
        <button
          onClick={goToNext}
          className="rounded-full bg-white w-[42px] h-[42px] p-[15px]"
        >
          <ArrowRight width={14} height={13} />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
