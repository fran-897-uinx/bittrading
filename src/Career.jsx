import React from "react";
import Navbar from "./public/Navbar";
import Clients from "./public/Clients";
import FAQ from "./public/Faq";
import Footer from "./public/Footer";

const Career = () => {
  const slide = {
    img: "./plant.jpg",
  };

  const Career = [
    {
      title: "Modern IT Infrastructure",
      img: "/concept.jpg",
      dec: "We helped a global enterprise upgrade its legacy infrastructure to a modern cloud-native environment — increasing scalability and cutting costs by 40%.",
    },
    {
      title: "Digital Banking Solutions",
      img: "/plant.jpg",
      dec: "Developed a secure and user-friendly mobile banking app that supports millions of users daily with real-time transaction analytics.",
    },
    {
      title: "Insurance Automation",
      img: "/profit.jpg",
      dec: "Automated claims processing and data verification, improving workflow efficiency by 70% for a top-tier insurance provider.",
    },
    {
      title: "Insurance Automation",
      img: "/profit.jpg",
      dec: "Automated claims processing and data verification, improving workflow efficiency by 70% for a top-tier insurance provider.",
    },
    {
      title: "Insurance Automation",
      img: "/profit.jpg",
      dec: "Automated claims processing and data verification, improving workflow efficiency by 70% for a top-tier insurance provider.",
    },
    {
      title: "Insurance Automation",
      img: "/profit.jpg",
      dec: "Automated claims processing and data verification, improving workflow efficiency by 70% for a top-tier insurance provider.",
    },
  ];
  const aboutcareer = {
    details:
      "OrieMark is a forward-thinking digital solutions company committed to helping businesses, creators, and organizations thrive in today’s tech-driven world. Our name is rooted in the Igbo culture “Orie” — symbolizing community, marketplace, and collective growth and combined with “Mark,” it represents our mission: to help every client leave a lasting mark in the digital space.",
  };
  const detabo = {
    details:
      "From web development and mobile app development, to graphic/product design, online advertising, and smart gadget sales, OrieMark is more than a service provider,  we are a tech growth partner. We work closely with brands and businesses to craft digital experiences that are user-focused, visually appealing, and performance-driven.",
  };
  return (
    <>
      <Navbar />
      <main
        className="relative w-full h-70 flex flex-col justify-center text-white px-6 md:px-36 bg-no-repeat"
        style={{
          backgroundImage: `url(${slide.img})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <h1 className="text-6xl font-semibold text-green-700">Careers</h1>
      </main>
      <section className="py-13 md:px-14 p-9">
        <div className="grid md:grid-cols-3 gap-8">
          {Career.map((c, i) => (
            <div
              key={i}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-lg group"
              style={{
                backgroundImage: `url(${c.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{c.title}</h3>
                <p className="text-sm text-gray-200">{c.dec}</p>
              </div>

              {/* Title always visible */}
              <div className="absolute bottom-6 left-6 text-white font-bold text-lg group-hover:opacity-0 transition duration-500">
                {c.title}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-15 bg-white md:px-17 place-items-center w-full px-5 ">
        <div className="px-2 grid md:grid-cols-2 grid-cols-1 gap-11 justify-center">
          <div>
            <h6 className="text-indigo-500 font-bold capitalize mb-3 text-start text-xl">
              Discover Your Next Move, with OrieMark Leading Software Development Company
            </h6>
            <h2 className="font-bold text-4xl text-start pb-1.5">Careers</h2>
                <p className="text-gray-600 text-start pb-7">{aboutcareer.details}</p>
          </div>
          <div
            className="relative pt-2 pb-20 md:pt-20 bg-purple-800 text-white md:h-92  h-92 "
            style={{
              backgroundImage: `url(${slide.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        
            <p className="px-2 text-gray-600 text-center pb-3 pt-5">
              {detabo.details}
            </p>
          </section>
          <Clients />
          <FAQ />
          <Footer/>
    </>
  );
};

export default Career;
