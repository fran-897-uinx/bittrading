"use client";
import { Cloud, Code2, Phone, SortAscIcon, TestTubeDiagonalIcon, TextAlignCenterIcon, TextAlignStart } from "lucide-react";

export default function Services() {
  const services = [
    { icon: Code2, title: "Web Development", desc: "We build fast, scalable, and secure websites tailored to your business." },
    { icon: TestTubeDiagonalIcon, title: "Software Testing", desc: "Comprehensive testing for bug-free and stable product releases." },
    { icon: SortAscIcon, title: "Digital Marketing", desc: "Data-driven campaigns that boost your visibility and growth." },
    { icon: Code2, title: "Mobile App Development", desc: "Intuitive and powerful mobile apps for Android and iOS platforms." },
    { icon: Cloud, title: "Cloud Integration", desc: "Seamless migration and optimization on top cloud platforms." },
    { icon: TextAlignStart, title: "Governance, Risk & Compliance", desc: "Ensuring compliance, data protection, and IT governance." },
  ];

  return (
    <section id="services" className="relative bg-gray-900 text-white py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h6 className="text-indigo-500 font-semibold tracking-wide uppercase mb-2">
          What we're offering
        </h6>
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-indigo-50">
          Services we're providing to our customers
        </h2>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 relative">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="relative group bg-gray-800/60 border border-gray-700 rounded-2xl p-8 shadow-lg backdrop-blur-md 
                           hover:-translate-y-2 hover:bg-indigo-700/60 hover:border-indigo-500 
                           transition-all duration-300 ease-in-out h-70"
              >
                {/* Icon */}
                <div className="flex justify-center mb-5 ">
                  <div className="bg-indigo-600/20 p-4 rounded-full group-hover:bg-indigo-600/40 transition ">
                    <Icon size={36} className="text-indigo-400 group-hover:text-white transition" />
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-white">{s.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>

                {/* Half-out floating effect */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-5 py-2 rounded-xl shadow-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all cursor-pointer">
                  Learn More →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
