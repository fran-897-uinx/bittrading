import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./public/Hero";
import Navbar from "./public/Navbar";
import WhyChooseUs from "./public/Whychooseus";
import About from "./public/About";
import Technology from "./public/Tech";
import Services from "./public/Service";
import CaseStudies from "./public/Casestudies";
import Industries from "./public/Industries";
import Blogs from "./public/Blog";
import Clients from "./public/Clients";
import Testimonials from "./public/Testiomonial";
import FAQ from "./public/Faq";
import Footer from "./public/Footer";
import Introduction from "./public/introduction";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Introduction />
      <Services />
      <WhyChooseUs />
      <CaseStudies />
      <Technology />
      <Industries />
      <Blogs />
      <Testimonials />
      <Clients />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
