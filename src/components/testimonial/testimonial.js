"use client";
import React, { useState } from "react";
import ArrowLeft from "../icons/arrow-left";
import ArrowRight from "../icons/arrow-right";
import Image from "next/image";
import Quotation from "../icons/quotation";
import { useTranslation } from "react-i18next";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      content:
        "Comprehensive cyber security solutions by STASEC have become Our main choice to safeguard Our digital assets. Their meticulous penetration testing service identified and addressed critical vulnerabilities in Our system before they could be exploited. Additionally, their secure code development tools provide ongoing security assessments, ensuring Our code remains robust and secure. This dual-pronged approach has dramatically enhanced my online security posture, allowing us to operate with a newfound confidence and peace of mind.",
      role: "PT Tigapilar Maju Mandiri",
      image: "/tiga-pilar-circle.png",
    },
    {
      content:
        "STASEC's cyber security services have been a game-changer for Our SAAS business. Their penetration test service unearthed critical vulnerabilities in my system, and their security monitoring tool provides peace of mind knowing my system is constantly under security watch. With STASEC, I feel confident that my data is safe and secure, allowing me to focus on growing my business without cybersecurity worries.",
      role: "Rekruit.site",
      image: "/rekruit-circle.png",
    },
  ];

  const testimonial_img = [
    {
      image: "/partner-1.png",
      width: 123,
      height: 91
    },
    {
      image: "/partner-2.png",
      width: 235,
      height: 47
    },
  ]

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

  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center justify-center w-full p-2 py-10 xl:p-28 lg-p:24">
      <div className="flex items-center justify-between gap-2 sm:gap-8 md:gap-16">
        <button
          onClick={goToPrevious}
          className="rounded-full bg-white px-1.5 py-1.5 sm:px-3 sm:py-3"
        >
          <ArrowLeft width={14} height={13} />
        </button>
        <div className="flex flex-col space-y-[16px] items-center">
          <div className="flex flex-col items-center gap-3 sm:gap-7">
            <h2 className="text-3xl text-center sm:text-6xl mb-10">
              {t("component:testimonial.title")}
            </h2>
            <div
              className="leading-7 tracking-wide fpoint-text sm:text-sm min-h-[100px]"
              style={{ textAlign: "center" }}
            >
              {'"' + testimonials[currentIndex].content + '"'}
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div>
              <Image
                src={testimonials[currentIndex].image}
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
          className="rounded-full bg-white px-1.5 py-1.5 sm:px-3 sm:py-3"
        >
          <ArrowRight width={14} height={13} />
        </button>
      </div>
      <div className="flex flex-row items-center space-y-2 gap-10 pt-14">
        {testimonial_img.map((testimonial, index) => (
          <div key={index}>
            <Image
              src={testimonial.image}
              width={testimonial.width}
              height={testimonial.height}
              alt={`customer img ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;