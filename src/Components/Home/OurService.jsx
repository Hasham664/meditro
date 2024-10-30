"use client";

import Image from "next/image";
import serviceImage1 from "../../../public/service-1.png"; // Replace with your image paths
import serviceImage2 from "../../../public/service-2.png";
import medical from "../../../public/medical.png";
import heart2 from "../../../public/heart-2.png";
import medical_plus from "../../../public/medical-plus.png";
import suppor from "../../../public/suppor-icon.png";
import Link from "next/link";
import { useState } from "react";
export default function OurService() {
    const [activeTab, setActiveTab] = useState(0);
const services = [
  { name: "Consultations", icon: medical },
  { name: "Travel", icon: heart2 },
  { name: "Treatment", icon: medical_plus },
  { name: "Post Care Support", icon: suppor },
];
  return (
    <div className="bg-[#4CB6B60D] mt-24 pb-12">
      <section className="Mycontainer">
        <h2 className="text-center text-4xl font-semibold text-teal-600 mb-8 pt-24 pb-12">
          Our Services
        </h2>

        <div className="flex flex-col lg:flex-row items-start ">
          {/* Sidebar with Services */}
          <div className="m-auto">
            <div className=" justify-center ">
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex flex-col items-center p-6 rounded-sm cursor-pointer transition duration-200 mb-4 ${
                    activeTab === index
                      ? "bg-[#0069AB] text-white"
                      : "text-black hover:bg-[#0069AB] hover:text-white"
                  }`}
                >
                  <Image src={service.icon} alt="service4" width={50} />
                  <span className="text-lg max-w-[90px] m-auto text-center pt-4">
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
            <button className="px-14 py-4 mb-12 text-white bg-[#0069AB] rounded-lg">
              View All
            </button>
          </div>
          {/* Main Content Section */}

          {activeTab === 0 && (
            <>
              <div className="flex-1 px-0 lg:px-12 md:px-6 sm:px-4">
                <h3 className="text-2xl pb-2 font-semibold text-gray-800">
                  A passion for putting patients first.
                </h3>

                {/* Points */}
                <ul className="grid grid-cols-2 gap-6 text-gray-700 mt-6">
                  {[
                    "A Passion for Healing",
                    "All our best",
                    "A Legacy of Excellence",
                    "5-Star Care",
                    "Believe in Us",
                    "Always Caring",
                  ].map((point, index) => (
                    <li
                      key={index}
                      className="flex items-center text-[#000000] space-x-2"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Description */}
                <p className="mt-24 text-xl max-w-[628px] text-[#212124]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque tortor ornare ornare. Quisque
                  placerat scelerisque tortor ornare ornare Convallis felis
                  vitae tortor augue. Velit nascetur proin massa in. Consequat
                  faucibus porttitor enim et.
                </p>
                <p className="mt-12 pb-12 text-xl text-[#212124]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque. Convallis felis vitae tortor
                  augue. Velit nascetur proin massa in.
                </p>
              </div>
              <div className=" ">
                <Image
                  src={serviceImage1}
                  alt="Service Image 1"
                  className="rounded-lg"
                />
                <Image
                  src={serviceImage2}
                  alt="Service Image 2"
                  className="rounded-lg mt-6"
                />
              </div>
            </>
          )}
          {activeTab === 1 && (
            <>
              <div className="flex-1 px-0 lg:px-12 md:px-6 sm:px-4">
                <h3 className="text-2xl pb-2 font-semibold text-gray-800">
                  b passion for putting patients first.
                </h3>

                {/* Points */}
                <ul className="grid grid-cols-2 gap-6 text-gray-700 mt-6">
                  {[
                    "A Passion for Healing",
                    "All our best",
                    "A Legacy of Excellence",
                    "5-Star Care",
                    "Believe in Us",
                    "Always Caring",
                  ].map((point, index) => (
                    <li
                      key={index}
                      className="flex items-center text-[#000000] space-x-2"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Description */}
                <p className="mt-24 text-xl max-w-[628px] text-[#212124]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque tortor ornare ornare. Quisque
                  placerat scelerisque tortor ornare ornare Convallis felis
                  vitae tortor augue. Velit nascetur proin massa in. Consequat
                  faucibus porttitor enim et.
                </p>
                <p className="mt-12 pb-12 text-xl text-[#212124]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque. Convallis felis vitae tortor
                  augue. Velit nascetur proin massa in.
                </p>
              </div>
              <div className=" ">
                <Image
                  src={serviceImage1}
                  alt="Service Image 1"
                  className="rounded-lg"
                />
                <Image
                  src={serviceImage2}
                  alt="Service Image 2"
                  className="rounded-lg mt-6"
                />
              </div>
            </>
          )}
          {activeTab === 2 && (
            <>
              <div className="flex-1 px-0 lg:px-12 md:px-6 sm:px-4">
                <h3 className="text-2xl pb-2 font-semibold text-gray-800">
                  C passion for putting patients first.
                </h3>

                {/* Points */}
                <ul className="grid grid-cols-2 gap-6 text-gray-700 mt-6">
                  {[
                    "A Passion for Healing",
                    "All our best",
                    "A Legacy of Excellence",
                    "5-Star Care",
                    "Believe in Us",
                    "Always Caring",
                  ].map((point, index) => (
                    <li
                      key={index}
                      className="flex items-center text-[#000000] space-x-2"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Description */}
                <p className="mt-24 text-xl max-w-[628px] text-[#212124]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque tortor ornare ornare. Quisque
                  placerat scelerisque tortor ornare ornare Convallis felis
                  vitae tortor augue. Velit nascetur proin massa in. Consequat
                  faucibus porttitor enim et.
                </p>
                <p className="mt-12 pb-12 text-xl text-[#212124]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque. Convallis felis vitae tortor
                  augue. Velit nascetur proin massa in.
                </p>
              </div>
              <div className=" ">
                <Image
                  src={serviceImage1}
                  alt="Service Image 1"
                  className="rounded-lg"
                />
                <Image
                  src={serviceImage2}
                  alt="Service Image 2"
                  className="rounded-lg mt-6"
                />
              </div>
            </>
          )}
          {activeTab === 3 && (
            <>
              <div className="flex-1 px-0 lg:px-12 md:px-6 sm:px-4">
                <h3 className="text-2xl pb-2 font-semibold text-gray-800">
                  D passion for putting patients first.
                </h3>

                {/* Points */}
                <ul className="grid grid-cols-2 gap-6 text-gray-700 mt-6">
                  {[
                    "A Passion for Healing",
                    "All our best",
                    "A Legacy of Excellence",
                    "5-Star Care",
                    "Believe in Us",
                    "Always Caring",
                  ].map((point, index) => (
                    <li
                      key={index}
                      className="flex items-center text-[#000000] space-x-2"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Description */}
                <p className="mt-24 text-xl max-w-[628px] text-[#212124]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque tortor ornare ornare. Quisque
                  placerat scelerisque tortor ornare ornare Convallis felis
                  vitae tortor augue. Velit nascetur proin massa in. Consequat
                  faucibus porttitor enim et.
                </p>
                <p className="mt-12 pb-12 text-xl text-[#212124]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque. Convallis felis vitae tortor
                  augue. Velit nascetur proin massa in.
                </p>
              </div>
              <div className=" ">
                <Image
                  src={serviceImage1}
                  alt="Service Image 1"
                  className="rounded-lg"
                />
                <Image
                  src={serviceImage2}
                  alt="Service Image 2"
                  className="rounded-lg mt-6"
                />
              </div>
            </>
          )}
        </div>
        <div className="mt-6 flex justify-center pb-10">
          <Link href="/service">
            <button className=" bg-gradient-to-r from-custom-blue to-custom-teal flex items-center text-lg gap-4 text-white font-semibold px-6 py-4 rounded-lg hover:bg-teal-600 transition">
              Book Now
              <img src="/check.png" alt="" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
