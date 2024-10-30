"use client";

import Link from "next/link";
import plus from "../../../public/plus.png";
import Image from "next/image";
const services = [
  {
          icon:plus,

    title: "Orthodontic Treatments",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
    link: "/service-detail",
  },
  {
          icon:plus,

    title: "Restorative Treatments",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
    link: "/service-detail",
  },
  {
          icon:plus,

    title: "Root Canal Treatments",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
    link: "/service-detail",
  },
  {
          icon:plus,

    title: "Root Canal Treatments",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
    link: "/service-detail",
  },
  {
          icon:plus,

    title: "Root Canal Treatments",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
    link: "/service-detail",
  },
  {
          icon:plus,

    title: "Root Canal Treatments",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
    link: "/service-detail",
  },
];

export default function Hospitals({activeTab}) {
  return (
    <div className="">
      {activeTab === "Hospitals" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <div key={i} className="bg-white">
              <div className="bg-[#4CB6B6] p-6 max-w-fit m-auto mt-12	">
                <Image className="m-auto" src={service.icon} alt="service2" width={60} />
              </div>
              <div key={service.title} className="card">
                <h3 className="text-[#4CB6B6] text-2xl lg:text-4xl m-auto max-w-48	pt-6">
                  {service.title}
                </h3>
                <p className="text-[#000000] px-6 text-lg m-auto pt-6 max-w-[360px]	">
                  {service.para}
                </p>
                <Link href={service.link}>
                  <button className="flex m-auto mt-10 mb-10 items-center gap-4 px-5 py-3 text-xl lg:text-2xl bg-gradient-to-r from-custom-blue to-custom-teal text-white rounded-lg">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
