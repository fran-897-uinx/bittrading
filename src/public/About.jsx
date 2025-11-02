"use client";
import { motion } from "framer-motion";

export default function About() {
  const content = {
    backimg: "/profit.jpg",
    heading: "IT Strategy Partners",
    subheading: "Why Choose Us",
    description:
      "Customized solutions meticulously crafted to meet each business's demands. Proven track record of successful projects and satisfied clients. Agile and adaptive approach to stay ahead of technological trends.",
    services: [
      {
        img: "/profit.jpg",
        title: "Perfect Solution Every",
        desc: "Business Demands",
        color: "from-red-500 to-pink-500",
      },
      {
        img: "/concept.jpg",
        title: "Helping Business",
        desc: "Around the World",
        color: "from-blue-500 to-cyan-500",
      },
      {
        img: "/plant.jpg",
        title: "Proven Track Record &",
        desc: "Commitment to Excellence",
        color: "from-purple-500 to-indigo-500",
      },
    ],
  };

  return (
    <main className="h-screen mb-36 sm:mb-40 md:h-120">
      <section
        id="about"
        className="relative pt-2 pb-20 md:py-20 bg-purple-800 text-white h-92"
        style={{
          backgroundImage: `url(${content.backimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/70"></div>

        {/* Content Section */}
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          {/* Top Text */}
          <div className="grid md:grid-cols-2 gap-6 items-center mb-8">
            <div className="text-start">
              <h6 className="font-semibold uppercase text-purple-200">
                {content.subheading}
              </h6>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {content.heading}
              </h2>
            </div>

            <p className="text-start text-gray-200 leading-relaxed">
              {content.description}
            </p>
          </div>

          {/* Service Cards */}
          <div className="relative grid md:grid-cols-3 md:gap-8 gap-12 top-1">
            {content.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative rounded-2xl shadow-2xl group hover:scale-105 transition-transform duration-300 h-40  md:top-20`}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${service.img})`,
                  }}
                ></div>

                {/* Overlay */}
                <div className="absolute from-black/50 to-black/80 group-hover:from-black/60 group-hover:to-black/90 transition-all duration-300 -z-50"></div>

                {/* Content */}
                <div className="relative hover:z-10 z-10 p-4  text-center text-black bg-white mx-4 top-23 md:top-30 ">
                  <h3 className="font-bold mb-2 text-xl">{service.title}</h3>
                  <p className="text-black text-xl font-bold">{service.desc}</p>
                </div>

                {/* Bottom gradient border */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
