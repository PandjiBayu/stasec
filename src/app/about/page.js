"use client";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import HeadVector from "@/components/icons/head-vector";
import Testimonial from "@/components/testimonial/testimonial";
import Image from "next/image";
import Marquee from "@/components/marquee/marquee";
import { images } from "@/data/marquee/marqueeData";
import { useState } from "react";
import FooterContainer from "@/components/footer/footer-container";

export default function About() {
  const imagesRepeated = images.concat(images, images, images);
  const [activeTab, setActiveTab] = useState("vision");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section>
      <div class="head-vector gradient bg-cover ">
        <div className="top-0 left-0 hidden lg:block lg:absolute">
          <HeadVector />
        </div>
        <Header />
        <div className="sm:px-10 px-1 xl:px-[118px] pt-1 sm:pt-[100px]">
          <div className="flex md:flex-row flex-col items-start md:items-center space-x-5 lg:space-x-[250px]">
            <div>
              <Image
                src={"/about-content-1.png"}
                width={1500}
                height={1200}
                alt="about-content-1"
              />
            </div>
            <div className="flex flex-col space-y-12">
              <h3 className="content-title">A Stellar Path to Security</h3>
              <p className="text-[18px]">
                STASEC is the amalgamation of two fundamental concepts:
                “Stellar” and “Security”. Just as stars light up the night sky
                and act as a guilding beacons. We help you embarking on a
                journey towards a more secure, resilient, and thriving digital
                future. STASEC is registered and operates under PT. Digital
                Berkah Mandiri.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center px-4 mt-12 space-y-5 md:flex-row md:space-y-0 md:px-0">
            <div className="flex flex-col w-full space-y-6">
              {" "}
              {/* Ensure full width on small screens */}
              <div className="text-sm font-medium text-center text-gray-100 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                  <li className="cursor-pointer me-2">
                    <span
                      onClick={() => handleTabClick("vision")}
                      className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-blue-500 hover:border-[#366BE9]   ${
                        activeTab === "vision"
                          ? "text-blue-500 border-[#366BE9]"
                          : ""
                      }`}
                    >
                      Our Vision
                    </span>
                  </li>
                  <li className="cursor-pointer me-2">
                    <span
                      onClick={() => handleTabClick("mission")}
                      className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-blue-500 hover:border-[#366BE9] ${
                        activeTab === "mission"
                          ? "text-blue-500 border-[#366BE9]"
                          : ""
                      }`}
                    >
                      Our Mission
                    </span>
                  </li>
                </ul>
              </div>
              <div className="text-[18px] h-[200px] overflow-y-auto">
                {" "}
                {/* Set a fixed height */}
                {activeTab === "vision"
                  ? // Content for Vision tab
                    "Become a leading company in the field of cybersecurity by delivering innovative solutions that empower businesses to grow securely in the digital era."
                  : // Content for Mission tab
                    "Providing cybersecurity integrated solutions for comprehensive, integrative, and adaptive protection of digital assets against evolving threats."}
              </div>
            </div>
            <div>
              <Image
                src={"/about-content-2.png"}
                width={1200}
                height={1200}
                alt="about-content-2"
              />
            </div>
          </div>
        </div>
        <div className="py-[100px] overflow-hidden">
          <Marquee list={imagesRepeated} />
        </div>
      </div>

      <div className="about-bg-2">
        <Testimonial />
      </div>

      <FooterContainer />
    </section>
  );
}
