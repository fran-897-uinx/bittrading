import Clients from "./public/Clients";
import FAQ from "./public/Faq";
import Footer from "./public/Footer";
import Navbar from "./public/Navbar";
import {
  GraduationCapIcon,
  AntennaIcon,
  ViewIcon,
  GroupIcon,
  Joystick,
  BriefcaseBusiness,
  ThumbsUpIcon,
  Users,
  TerminalSquareIcon,
} from "lucide-react";

const About = () => {
  const slide = {
    img: "/profit.jpg",
  };

  const test = [
    {
      icon: BriefcaseBusiness,
      count: 14,
      title: "Years of Experience",
      desc: "We build fast, scalable, and secure websites tailored to your business.",
    },
    {
      icon: TerminalSquareIcon,
      count: 350,
      title: "Completed Projects",
      desc: "Comprehensive testing for bug-free and stable product releases.",
    },
    {
      icon: ThumbsUpIcon,
      count: 100,
      title: "Customers Satisfaction",
      desc: "Data-driven campaigns that boost your visibility and growth.",
    },
    {
      icon: Users,
      count: 40,
      title: "Partnership ",
      desc: "Intuitive and powerful mobile apps for Android and iOS platforms.",
    },
  ];

  const team = [
    {
      img: "",
      title: "Adamu",
      subtitle: "Co-Founder",
      desc: "We build fast, scalable, and secure websites tailored to your business.",
    },
    {
      img: "",
      title: "Johnson ",
      subtitle: "Secetory",
      desc: "Comprehensive testing for bug-free and stable product releases.",
    },
    {
      img: "",
      title: "Ben",
      subtitle: "Admin",
      desc: "Data-driven campaigns that boost your visibility and growth.",
    },
    {
      img: "",
      title: "Tobi ",
      subtitle: "Organizera",
      desc: "Intuitive and powerful mobile apps for Android and iOS platforms.",
    },
    {
      img: "",
      title: "Henry",
      subtitle: "Technicain",
      desc: "Seamless migration and optimization on top cloud platforms.",
    },
    // {
    //   icon: TextAlignStart,
    //   title: "Governance, Risk & Compliance",
    //   desc: "Ensuring compliance, data protection, and IT governance.",
    // },
  ];
  const advices = [
    {
      img: "",
      title: "Adamu",
      subtitle: "Co-Founder",
      desc: "We build fast, scalable, and secure websites tailored to your business.",
    },
    {
      img: "",
      title: "Johnson ",
      subtitle: "Secetory",
      desc: "Comprehensive testing for bug-free and stable product releases.",
    },
    {
      img: "",
      title: "Ben",
      subtitle: "Admin",
      desc: "Data-driven campaigns that boost your visibility and growth.",
    },
  ];
  const ser = [
    {
      icon: AntennaIcon,
      title: "Innovation",
      desc: "We build fast, scalable, and secure websites tailored to your business.",
    },
    {
      icon: GraduationCapIcon,
      title: "Excellence ",
      desc: "Comprehensive testing for bug-free and stable product releases.",
    },
    {
      icon: ViewIcon,
      title: "Culture",
      desc: "Data-driven campaigns that boost your visibility and growth.",
    },
    {
      icon: GroupIcon,
      title: "Partnership ",
      desc: "Intuitive and powerful mobile apps for Android and iOS platforms.",
    },
    {
      icon: Joystick,
      title: "Impact",
      desc: "Seamless migration and optimization on top cloud platforms.",
    },
    // {
    //   icon: TextAlignStart,
    //   title: "Governance, Risk & Compliance",
    //   desc: "Ensuring compliance, data protection, and IT governance.",
    // },
  ];

  const detailsabout = [
    {
      details:
        "OrieMark is a forward-thinking digital solutions company committed to helping businesses, creators, and organizations thrive in today’s tech-driven world. Our name is rooted in the Igbo culture “Orie” — symbolizing community, marketplace, and collective growth and combined with “Mark,” it represents our mission: to help every client leave a lasting mark in the digital space.",
    },
    {
      details:
        "Founded with a deep understanding of African creativity and global innovation, OrieMark bridges the gap between culture and technology. We are passionate about providing premium tech solutions that are not only modern and effective but also reflect the unique identity of our clients.",
    },
    {
      details:
        "From web development and mobile app development, to graphic/product design, online advertising, and smart gadget sales, OrieMark is more than a service provider,  we are a tech growth partner. We work closely with brands and businesses to craft digital experiences that are user-focused, visually appealing, and performance-driven.",
    },
  ];
  const services = [
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
  ];
  const detabo = [
    {
      details:
        "Our approach is simple: listen, innovate, and deliver. We take pride in understanding each client’s vision, then using the right blend of creativity and technology to make that vision a digital reality. Every project we execute is marked by excellence, cultural relevance, and future-ready solutions.",
    },
    {
      details:
        "We believe that tech is the new currency, and every brand whether small or large deserves to be seen, heard, and respected in the digital world. That’s why we’re here: to empower our people, elevate African excellence, and build solutions that speak louder than words.",
    },
  ];
  return (
    <>
      <Navbar />
      <main
        className="relative w-full h-70 flex flex-col justify-center text-white px-6 md:px-36"
        style={{
          backgroundImage: `url(${slide.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-6xl font-semibold text-green-700">About Us</h1>
      </main>
      <section className="py-15 bg-white md:px-14 w-full px-5 ">
        <div className="px-2 grid  md:grid-cols-2 grid-cols-1">
          <div>
            <h6 className="text-indigo-500 font-bold capitalize mb-3 text-start text-sm">
              Who We Are
            </h6>
            <h2 className="text-4xl font-bold mb-4 text-start">
              OrieMark Technologies
            </h2>
            {detailsabout.map((bout) => {
              return (
                <p className="text-gray-600 text-start pb-7">{bout.details}</p>
              );
            })}
          </div>
          <div
            className="relative pt-2 pb-20 md:pt-20 bg-purple-800 text-white md:h-full h-92"
            style={{
              backgroundImage: `url(${slide.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        {detabo.map((b) => {
          return (
            <p className="px-2 text-gray-600 text-start pb-3 pt-5">
              {b.details}
            </p>
          );
        })}
      </section>

      {/* { About Services } */}
      <div className="relative grid md:grid-cols-3 md:gap-8 gap-12 top-1 px-20">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative rounded-2xl shadow-2xl group hover:scale-105 transition-transform duration-300 h-40  md:top-2`}
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
          </div>
        ))}
      </div>

      <section className="bg-indigo-950 md:mt-30 mt-13">
        <h2 className="text-4xl font-bold mb-4 pt-5 text-gray-100">
          Our Core Value
        </h2>
        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 px-9 gap-12 relative py-9">
          {ser.map((s, i) => {
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
                    <Icon
                      size={36}
                      className="text-indigo-400 group-hover:text-white transition"
                    />
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-white">
                  {s.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <main className="bg-gray-500">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 px-9 gap-12 relative py-9">
          {test.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="relative group  border-r-2 border-gray-700 rounded-2xl p-8 backdrop-blur-md 
                           hover:-translate-y-2 hover:bg-indigo-700/60 hover:border-indigo-500 
                           transition-all duration-300 ease-in-out h-70"
              >
                {/* Icon */}
                <div className="flex justify-center mb-5 ">
                  <div className="bg-indigo-600/20 p-4 rounded-full group-hover:bg-indigo-600/40 transition ">
                    <Icon
                      size={36}
                      className="text-indigo-400 group-hover:text-white transition"
                    />
                  </div>
                </div>
                {/* {Count} */}
                <h3 className="text-3xl font-semibold mb-3 group-hover:text-white rounded-full  text-center align-middle">
                  {s.count}
                </h3>
                {/* Text */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-white">
                  {s.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </main>

      <section className="pt-7">
        <h6 className="text-indigo-500 font-bold capitalize mb-3 text-center text-sm">
          Meet The Team
        </h6>
        <h2 className="text-4xl font-bold mb-4 text-center">Team Members</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 px-9 gap-12 relative py-9">
          {team.map((s, i) => {
            return (
              <div
                key={i}
                className="relative group bg-gray-800/60 border border-gray-700 p-8 shadow-2xl backdrop-blur-md 
                           hover:-translate-y-2 hover:bg-indigo-700/60 hover:border-indigo-500 
                           transition-all duration-300 ease-in-out h-70"
              >
                {/* Icon */}
                <div className="flex justify-center mb-5 ">
                  <div className="bg-indigo-600/20 p-4 rounded-full group-hover:bg-indigo-600/40 transition ">
                    <img src={s.img} alt={s.title} />
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-white">
                  {s.title}
                </h3>
                <h4 className="text-sm mb-3 group-hover:text-white text-gray-300">
                  {s.subtitle}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <main className="bg-gray-300 py-7 ">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Advisors</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 px-9 gap-12 relative py-9">
          {advices.map((s, i) => {
            return (
              <div
                key={i}
                className="relative group bg-gray-800/60 border border-gray-700 p-8 shadow-2xl backdrop-blur-md 
                           hover:-translate-y-2 hover:bg-indigo-700/60 hover:border-indigo-500 
                           transition-all duration-300 ease-in-out h-70"
              >
                {/* Icon */}
                <div className="flex justify-center mb-5 ">
                  <div className="bg-indigo-600/20 p-4 rounded-full group-hover:bg-indigo-600/40 transition ">
                    <img src={s.img} alt={s.title} />
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-white">
                  {s.title}
                </h3>
                <h4 className="text-sm mb-3 group-hover:text-white text-gray-300">
                  {s.subtitle}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
          </main>
          <Clients />
          <FAQ />
          <Footer/>
    </>
  );
};

export default About;
