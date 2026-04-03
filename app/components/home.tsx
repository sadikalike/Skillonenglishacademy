"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden"
    >
      {/* Background - Different for Mobile and Desktop */}
      {isMobile ? (
        // Mobile: Celebration Image as Background
        <>
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-full scale-100">
              <Image
                src="/hero.jpg"
                alt="Celebration Background"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-black/70" />
          </div>
        </>
      ) : (
        // Desktop: Dark Solid Background + Image on Right
        <>
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-black to-gray-900" />
          
          {/* Celebration Image - Right Side (Desktop only) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-40">
            <div className="relative w-full h-full">
              <Image
                src="/hero.jpg"
                alt="Celebration"
                fill
                className="object-contain object-right"
                priority
              />
            </div>
          </div>
        </>
      )}

      {/* Top Center Badge - Full Top */}
      <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 z-20 w-full px-4">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 md:px-5 py-1.5 md:py-2 rounded-full border border-white/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <span className="text-white text-xs md:text-sm font-medium tracking-wide whitespace-nowrap">
              Join 1000+ Premium Learners
            </span>
          </div>
        </div>
      </div>

      {/* Main Content - More Down */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center ${isMobile ? 'pt-28' : ''}`}>
        <div className={`w-full ${isMobile ? 'py-36' : 'py-20 md:py-24 lg:py-28'}`}>
          
          {/* Main Heading - Larger Font & More Down */}
          <div className="text-left">
            <h1 className={`font-bold leading-tight tracking-tight ${
              isMobile 
                ? 'text-3xl mt-20' 
                : 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
            }`}>
              <span className="text-white">Speak English with</span>
              <br />
              <span className="text-red-500">
                confidence
              </span>
              <br />
              <span className="text-white">learn with</span>
              <br />
              <span className="text-white">
                SKILL<span className="text-red-500">ON</span>
              </span>
            </h1>
          </div>

          {/* Description - Larger Font & More Down */}
          <div className={`${isMobile ? 'mt-4' : 'mt-6 md:mt-8'} text-left`}>
            <p className={`text-gray-300 leading-relaxed max-w-lg ${
              isMobile ? 'text-base' : 'text-sm sm:text-base md:text-lg lg:text-xl'
            }`}>
              Join 1000+ learners on a journey to fluency with our personalized,
              brain based training system.
            </p>

            {/* CTA Buttons - More Down */}
            <div className={`flex flex-col gap-3 ${isMobile ? 'mt-6' : 'md:gap-4 mt-6 md:mt-8'} ${isMobile ? 'w-full' : 'sm:flex-row'}`}>
              <a
                href="#courses"
                className={`group bg-red-600 text-white rounded-full font-semibold shadow-lg hover:shadow-red-600/30 hover:bg-red-500 transition-all duration-300 inline-flex items-center justify-center gap-2 ${
                  isMobile 
                    ? 'px-5 py-3 text-sm w-full' 
                    : 'px-5 md:px-8 py-2.5 md:py-3.5 text-sm md:text-base w-full sm:w-auto'
                }`}
              >
                Start Learning Now
                <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm md:text-base" />
              </a>

              <a
                href="#about"
                className={`border-2 border-white/40 text-white rounded-full font-semibold hover:border-red-500 hover:text-red-400 transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm ${
                  isMobile 
                    ? 'px-5 py-3 text-sm w-full' 
                    : 'px-5 md:px-8 py-2.5 md:py-3.5 text-sm md:text-base w-full sm:w-auto'
                }`}
              >
                Learn More
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator - Desktop only */}
      {!isMobile && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/40 text-xs tracking-wider">SCROLL</span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-white/30 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}