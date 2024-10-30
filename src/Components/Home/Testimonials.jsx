"use client";

import React from "react";
import "./Custom.css";
export default function Testimonials() {
  return (
    <div className="Mycontainer">
      <div className="text-center mt-24 relative ">
        <h1 className="text-3xl lg:text-4xl md:text-4xl  mt-8 text-[#3D3D3D] font-semibold">
          <span className="text-[#4CB6B6]">Patient Testimonials:</span>
          <br /> Hear from Those We’ve Cared For
        </h1>
        <p className="pt-4  text-[#B0B0B0]">
          Discover the difference we make through the voices of those we’ve
          served:
        </p>
        <div className="absolute left-[20%] top-[15%]">
          <img src="/dots-2.png" alt="" />
        </div>
      </div>
      {/* BOXES  */}
      <div className="relative">
        <div className="flex flex-wrap items-center justify-between gap-8 mt-24 relative z-10 ">
          <div>
            <div className="flex flex-wrap items-center	 border-4 border-blue-400 gap-4 bg-gradient-to-r from-testimonial-1 to-testimonial-2 p-8 rounded-xl">
              <img src="/testimonial-1.png" alt="" />
              <p className="max-w-[400px]">
                “After my knee surgery, the convenience of online consultations
                made my recovery smoother than I could have imagined.”
                <br />
                <span className="text-[#5D5D5D] font-bold">- Linda A.</span>
              </p>
            </div>
            <div className="mt-24 flex text-center justify-start lg:justify-end md:justify-start gap-10 lg:gap-24 md::gap-24">
              <div>
                <h1 className="text-3xl lg:text-5xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0179B4] to-[#4CB6B6]">
                  10,000+
                </h1>
                <p className="text-[#6D6D6D]">Successful Consultations</p>
              </div>
              <div>
                <h1 className="text-3xl lg:text-5xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0179B4] to-[#4CB6B6]">
                  2,500+
                </h1>
                <p className="text-[#6D6D6D]">Healthcare Professionals</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap items-center border-4 border-blue-400	 gap-4 bg-gradient-to-r from-testimonial-1 to-testimonial-2 p-8 rounded-xl">
              <img src="/testimonial-2.png" alt="" />
              <p className="max-w-[380px]">
                “Managing chronic conditions like diabetes requires a lot of
                vigilance, but the medicine refill system has simplified my
                life.”
                <br />
                <span className="text-[#5D5D5D] font-bold">- Henry B.</span>
              </p>
            </div>
            <div className="mt-24 text-center flex justify-start gap-24">
              <div>
                <h1 className="text-4xl lg:text-5xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0179B4] to-[#4CB6B6]">
                  98%
                </h1>
                <p className="text-[#6D6D6D]">Patient Satisfaction Rate</p>
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0179B4] to-[#4CB6B6]">
                  200+
                </h1>
                <p className="text-[#6D6D6D]">Top Specialists</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[-5%] top-[-10%] lg:top-[-20%] md:top-[-17%]">
          <img src="/dots-3.png" alt="" />
        </div>
      </div>
      {/* Again  */}
      <div className="relative">
        <div className="flex flex-wrap items-center justify-between gap-8 mt-24 relative z-10 ">
          {/* First Testimonial */}
          <div className="flex flex-wrap items-center border-4 border-blue-400 gap-4 bg-gradient-to-r from-testimonial-1 to-testimonial-2 p-8 rounded-xl">
            <img src="/testimonial-3.png" alt="" />
            <p className="max-w-[400px]">
              “After my knee surgery, the convenience of online consultations
              made my recovery smoother than I could have imagined.”
              <br />
              <span className="text-[#5D5D5D] font-bold">- Linda A.</span>
            </p>
          </div>

          {/* Second Testimonial */}
          <div className="flex flex-wrap items-center border-4 border-blue-400 gap-4 bg-gradient-to-r from-testimonial-1 to-testimonial-2 p-8 rounded-xl relative">
            <img src="/testimonial-4.png" alt="" />
            <p className="max-w-[380px]">
              “Managing chronic conditions like diabetes requires a lot of
              vigilance, but the medicine refill system has simplified my life.”
              <br />
              <span className="text-[#5D5D5D] font-bold">- Henry B.</span>
            </p>

            {/* Dots Image Positioned */}
            <div
              className=" position-issue-ha absolute -right-8 top-[97%] transform -translate-y-1/2 lg:right-[-9%] lg:top-[85%]"
              style={{ zIndex: "-1" }}
            >
              <img src="/dots-3.png" alt="dots" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
