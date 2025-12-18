"use client";
import { useState } from "react";

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = {
    experience: {
      title: "Our Mission",
      desc: "To empower businesses and individuals with impactful digital solutions that inspire growth, drive visibility, and leave a mark of excellence.",
      // img: "/choose1.jpg", // 🔹 replace with your image
    },
    innovation: {
      title: "Our Vision",
      desc: "To become Africa’s most trusted and culturally grounded tech brand helping both local and global businesses dominate their digital space with innovation and identity.",
      // img: "/choose2.jpg", // 🔹 replace with your image
    },
    // excellence: {
    //   title: "Commitment to Excellence",
    //   desc: "To become Africa’s most trusted and culturally grounded tech brand helping both local and global businesses dominate their digital space with innovation and identity.",
    //   img: "/choose3.jpg", // 🔹 replace with your image
    // },
  };

  const active = tabs[activeTab];

  return (
    <section id="why-choose-us" className="py-20 bg-white md:px-14 w-full px-5">
      <div className="md:max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:px-6">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-8 text-start">
          <div>
            <h6 className="text-indigo-500 font-bold capitalize mb-3 text-start text-sm">
              Company Benefits
            </h6>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug capitalize text-start">
              why you should choose OrieMark?
            </h2>
          </div>
          {/* Tabs / Buttons */}
          <div className="md:flex md:flex-wrap gap-3 grid grid-cols-2">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-5 py-2.5  font-semibold transition cursor-pointer ${
                activeTab === "experience"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "border-t-2 border-indigo-600"
              }`}
            >
              Our Mission
            </button>
            <button
              onClick={() => setActiveTab("innovation")}
              className={`px-5 py-2.5 font-semibold transition cursor-pointer ${
                activeTab === "innovation"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "border-t-2 border-indigo-600"
              }`}
            >
              Our Vision
            </button>
          </div>
          <p className="text-gray-600 mb-3">{active.desc}</p>
        </div>
        {/* RIGHT SIDE IMAGE */}
        <section className="text-start md:pt-7 flex flex-col gap-6">
          <p>
            We believe that tech is the new currency, and every brand whether
            small or large deserves to be seen, heard, and respected in the
            digital world. That’s why we’re here: to empower our people, elevate
            African excellence, and build solutions that speak louder than
            words.{" "}
          </p>
          <div className="md:flex gap-9 grid pl-3">
            <img src="/plant.jpg" alt="" className="w-40 h-30" />
            <ol className="text-xl font-light list-disc">
              <h3 className="px-5 py-2.5  font-semibold transition text-gray-700">
                Our Core Values
              </h3>
              <li>Innovation – we don’t copy, we create!</li>
              <li>Excellence – we deliver with quality and integrity!</li>
              <li>
                Culture – we stay true to our roots while thinking globally!
              </li>
              <li>Partnership – your goals become our mission!</li>
              <li>Impact – every solution must solve, serve, and elevate!</li>
            </ol>
          </div>
        </section>
      </div>

      <div className="bg-indigo-900 items-center w-full md:p-20 mt-12 align-middle p-10">
        <h1 className="font-bold text-green-700 md:text-4xl text-xl">
          Always Delivering Quality Service
        </h1>
        <button className="bg-gray-50 px-8 py-3 font-semibold hover:bg-gray-200 transition text-black cursor-pointer mt-12">
          Get In Touch
        </button>
      </div>
    </section>
  );
}
