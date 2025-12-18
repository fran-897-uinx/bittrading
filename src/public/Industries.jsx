"use client";
import {
  Banknote,
  BookCopyIcon,
  BuildingIcon,
  HeartPlusIcon,
  Factory,
} from "lucide-react";

export default function Industries() {
  const industries = [
    { title: "Healthcare", icon: HeartPlusIcon },
    { title: "Finance", icon: Banknote },
    { title: "Education", icon: BookCopyIcon },
    { title: "Retail", icon: BuildingIcon },
    { title: "Manufacturing", icon: Factory },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white text-start">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6">
        <div>
          <h6 className="text-indigo-400 font-semibold text-sm capitalize mb-3">
            Industries We Serve
          </h6>
          <h2 className="text-2xl font-bold mb-4">
            IT Services Customized for Your Industry
          </h2>
        </div>
        <img
          src="/plant.jpg"
          alt="Industries illustration"
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      {/* Industries Grid */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 px-6">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <div
              key={industry.title}
              className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Icon className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-lg font-semibold">{industry.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
