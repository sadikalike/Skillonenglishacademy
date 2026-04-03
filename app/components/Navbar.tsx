"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#courses", label: "Courses" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "courses", "testimonials", "contact"];
      const scrollPos = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
      
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-black/95 backdrop-blur-md shadow-[0_20px_40px_-15px_rgba(220,38,38,0.3)] py-3" 
          : "bg-black shadow-[0_4px_20px_-5px_rgba(220,38,38,0.2)] py-5"
      }`}
    >
      {/* Premium Red Gradient Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Only - No Text */}
          <a 
            href="#home" 
            className="relative flex items-center group"
          >
            {/* Logo Glow Effect on Hover */}
            <div className="absolute inset-0 bg-red-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<Image
  src="/logok.png"
  alt="SKILLON Logo"
  width={0}
  height={0}
  sizes="100vw"
  className="h-10 w-auto object-contain"
  priority
/>
            
            {/* Premium Red Pulse Dot */}
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                      activeSection === link.href.slice(1)
                        ? "text-red-500 drop-shadow-[0_0_4px_rgba(220,38,38,0.5)]"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                    
                    {/* Active Indicator with Red Glow */}
                    {activeSection === link.href.slice(1) && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-red-500 rounded-full shadow-[0_0_4px_rgba(220,38,38,0.6)]"></span>
                    )}
                    
                    {/* Hover Glow Effect */}
                    <span className="absolute inset-0 bg-red-600/10 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Premium Divider with Red Glow */}
            <div className="w-px h-6 bg-gradient-to-b from-transparent via-red-600/50 to-transparent"></div>
            
            {/* Auth Buttons */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="px-5 py-2 text-gray-400 hover:text-white hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] transition-all duration-300 font-medium text-sm"
              >
                Login
              </a>
              <a 
                href="#" 
                className="px-5 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg text-sm font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-[0_4px_12px_rgba(220,38,38,0.4)] hover:shadow-[0_6px_16px_rgba(220,38,38,0.6)] hover:-translate-y-0.5"
              >
                Sign Up
              </a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-red-600/20 transition-all duration-300 border border-white/10 hover:border-red-600/50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FaTimes className="text-red-500 text-lg" />
            ) : (
              <FaBars className="text-white text-lg" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu - Premium Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-5 rounded-2xl bg-black/95 backdrop-blur-md border border-red-600/20 shadow-[0_20px_40px_-15px_rgba(220,38,38,0.3)]">
            <ul className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeSection === link.href.slice(1)
                        ? "text-red-500 bg-red-600/10"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <div className="pt-3 mt-2 border-t border-red-600/20">
                <a 
                  href="#" 
                  className="block w-full text-center px-4 py-3 text-gray-400 hover:text-white transition"
                >
                  Login
                </a>
                <a 
                  href="#" 
                  className="block w-full text-center px-4 py-3 mt-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md"
                >
                  Sign Up
                </a>
              </div>
            </ul>
          </div>
        )}
      </div>
      
      {/* Premium Shadow Effects */}
      <div className="absolute -bottom-4 left-0 right-0 h-12 bg-gradient-to-t from-red-600/10 to-transparent blur-xl pointer-events-none"></div>
    </nav>
  );
}