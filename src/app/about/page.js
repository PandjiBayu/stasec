"use client";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import HeadVector from "@/components/icons/head-vector";
import Testimonial from "@/components/testimonial/testimonial";
import Image from "next/image";
import Marquee from "@/components/marquee/marquee";
import { images } from "@/data/marquee/marqueeData";
import { useState } from "react";

export default function About() {
  const imagesRepeated = images.concat(images, images, images);
  const [activeTab, setActiveTab] = useState("vision");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="main">
      <div className="gradient-image"></div>
      <div className="headers">
        <HeadVector />
      </div>
      <div class="head-vector">
        <Header />
        <div className="px-[118px] pt-[100px]">
          <div className="flex items-center space-x-[250px]">
            <div>
              <Image
                src={"/about-content-1.png"}
                width={1500}
                height={1200}
                alt="about-content-1"
              />
            </div>
            <div className="flex flex-col space-y-12">
              <div className="content-title">A Stellar Path to Security</div>
              <div className="text-[18px]">
                STASEC is the amalgamation of two fundamental concepts:
                “Stellar” and “Security”. Just as stars light up the night sky
                and act as a guilding beacons. We help you embarking on a
                journey towards a more secure, resilient, and thriving digital
                future. STASEC is registered and operates under PT. Digital
                Berkah Mandiri.
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-[250px]">
            <div className="flex flex-col space-y-6">
              <div className="fpoint-text text-[24px] flex">
                <div
                  className={`flex-1 border-b-2 ${
                    activeTab === "vision"
                      ? "border-[#366BE9] text-blue-500"
                      : ""
                  }`}
                  onClick={() => handleTabClick("vision")}
                >
                  <span
                    className={`inline-block w-full ${
                      activeTab === "vision" ? "text-blue-500" : ""
                    }`}
                  >
                    Our Vision
                  </span>
                </div>
                <div
                  className={`border-b-2 flex-1 ${
                    activeTab === "mission"
                      ? "border-[#366BE9] text-blue-500"
                      : ""
                  }`}
                  onClick={() => handleTabClick("mission")}
                >
                  <span
                    className={`inline-block w-full ${
                      activeTab === "mission" ? "text-blue-500" : ""
                    }`}
                  >
                    Our Mission
                  </span>
                </div>
                <div className="flex-1 border-b-2"></div>
              </div>
              <div className="text-[18px]">
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
        <div className="py-[100px]">
          <Marquee list={imagesRepeated} />
        </div>
      </div>
      <div className="about-bg-2">
        <Testimonial />
      </div>
      <div className="flex items-center justify-center about-bg-3">
        <div className="flex flex-col items-center">
          <div className="fpoint-text text-[46px]">
            Fortify Your Digital Future with Our Security Solution
          </div>
          <div
            className="fpoint-text text-[18px] w-[700px] pt-4"
            style={{ textAlign: "center" }}
          >
            Ensures a proactive defense againts evolving threats, providing
            peace of mind for your digital landscape.
          </div>
          <div className="w-[230px] px-[36px] py-[20px] flex items-center justify-center rounded-[8px] bg-[#1A57FF] mt-[50px]">
            <div className="text-[24px]">Get In Touch</div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
