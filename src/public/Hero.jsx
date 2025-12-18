"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"
import { Card, CardContent } from "../components/ui/card"

export default function Hero() {
  const slides = [
    {
      title: "We Are ISO/IEC 27001:2022 Certified",
      subtitle: "Trusted IT Strategy Partner delivering excellence globally.",
      img: "/plant.jpg",
      cta1: "Get In Touch",
      cta2: "Get Started",
    },
    {
      title: "Innovating Tomorrow, Today",
      subtitle: "We build secure, scalable, and intelligent solutions.",
      img: "/profit.jpg",
      cta1: "Get In Touch",
      cta2: "Contact Us",
    },
    {
      title: "Your Success Is Our Priority",
      subtitle: "Empowering enterprises with technology that transforms.",
      img: "/concept.jpg",
      cta1: "Get In Touch",
      cta2: "Join Us",
    },
    {
      title: "Digital Transformation Experts",
      subtitle: "We create technology ecosystems that drive results.",
      img: "/plant.jpg",
      cta1: "Get In Touch",
      cta2: "Schedule Demo",
    },
  ];

  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [api]);

  // Update current index
  useEffect(() => {
    if (!api) return;
    const handleSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", handleSelect);
    handleSelect();
  }, [api]);

  // Progress bar animation
  useEffect(() => {
    let start = Date.now();
    const duration = 6000;
    const tick = () => {
      const elapsed = Date.now() - start;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
      if (elapsed < duration) requestAnimationFrame(tick);
    };
    tick();
  }, [current]);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden py-5">
      <Carousel setApi={setApi} className="w-full h-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 shadow-none w-full h-[90vh]">
                <CardContent
                  className="relative w-full h-full flex flex-col justify-center items-start text-start text-white md:px-36"
                  style={{
                    backgroundImage: `url(${slide.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent"></div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.8 }}
                      className="relative z-10 max-w-3xl px-6"
                    >
                      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl mb-8 text-gray-200">
                        {slide.subtitle}
                      </p>

                      <div className="flex flex-wrap justify-start gap-4">
                        <button className="bg-gray-50 px-8 py-3 font-semibold hover:bg-gray-700 transition text-black cursor-pointer">
                          {slide.cta1}
                        </button>
                        {/* <button className="border border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-700 transition">
                          {slide.cta2}
                        </button> */}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows */}
        <CarouselPrevious className="left-6 bg-white/20 hover:bg-white/40" />
        <CarouselNext className="right-6 bg-white/20 hover:bg-white/40" />

        {/* Indicators & progress bar */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3 z-20">
          {/* Progress bar */}
          <div className="w-40 h-1 bg-white/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-blue-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          {/* Dots */}
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === i
                    ? "bg-blue-600 scale-110"
                    : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </section>
  );
}
