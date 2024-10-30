import Contactus from "@/Components/Home/Contactus";
import Footer from "@/Components/Home/Footer";
import Navbar from "@/Components/Home/Navbar";
import CardsTab from "@/Components/Services/CardsTab";
import OurSpecialties from "@/Components/Services/OurSpecialties";
import ServicesTabs from "@/Components/Services/ServiceTabs";
import TeamSlider from "@/Components/Services/TeamMembers";
import React from "react";

export default function Service() {
  return (
    <div>
      <div className="bg-[#F6FBFF] pb-36">
        <Navbar />
        <h1 className="text-center font-bold pt-24 text-2xl lg:text-5xl text-[#4CB6B6]">
          Service 
        </h1>
      </div>
      <ServicesTabs />
      <CardsTab />
      <OurSpecialties />
      <TeamSlider />
      <Contactus/>
    </div>
  );
}
