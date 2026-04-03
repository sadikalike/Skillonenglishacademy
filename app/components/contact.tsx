"use client";

import { useState } from "react";
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaWhatsapp, 
  FaInstagram, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaYoutube,
  FaPaperPlane,
  FaCheckCircle
} from "react-icons/fa";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    message: string;
    type: "success" | "error" | null;
  }>({ submitted: false, message: "", type: null });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      message: "Thank you! We'll get back to you within 24 hours.",
      type: "success"
    });
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormStatus({ submitted: false, message: "", type: null });
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Visit Us",
      details: ["Bangalore, Karnataka", "India - 560001"],
      color: "bg-rose-100 text-rose-600"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Us",
      details: ["info@skillon.com", "support@skillon.com"],
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: Closed"],
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const socialLinks = [
    { icon: <FaWhatsapp />, name: "WhatsApp", color: "bg-green-500", link: "https://wa.me/917510436350" },
    { icon: <FaInstagram />, name: "Instagram", color: "bg-pink-500", link: "https://instagram.com" },
    { icon: <FaFacebookF />, name: "Facebook", color: "bg-blue-600", link: "https://facebook.com" },
    { icon: <FaLinkedinIn />, name: "LinkedIn", color: "bg-blue-700", link: "https://linkedin.com" },
    { icon: <FaYoutube />, name: "YouTube", color: "bg-red-600", link: "https://youtube.com" }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-50 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
            <span className="text-rose-600 text-sm font-medium">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-rose-600">Connect</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          
          {/* Contact Info Cards */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 ${info.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-500 text-sm">{detail}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a <span className="text-rose-600">Message</span>
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Subject *</label>
                <select 
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition bg-white"
                >
                  <option value="">Select a subject</option>
                  <option value="Course Inquiry">Course Inquiry</option>
                  <option value="Demo Session">Book a Demo Session</option>
                  <option value="Support">Support</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Message *</label>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-rose-600 text-white rounded-xl font-semibold hover:bg-rose-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <FaPaperPlane />
                Send Message
              </button>
              
              {formStatus.submitted && formStatus.type === "success" && (
                <div className="flex items-center gap-2 p-3 bg-green-50 text-green-600 rounded-lg">
                  <FaCheckCircle />
                  <span className="text-sm">{formStatus.message}</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Social Media & Map Section */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Social Media Links */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Connect on <span className="text-rose-600">Social Media</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300 group"
                >
                  <div className={`w-8 h-8 ${social.color} rounded-lg flex items-center justify-center text-white text-sm`}>
                    {social.icon}
                  </div>
                  <span className="text-gray-700 text-sm font-medium group-hover:text-rose-600 transition">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
            
            {/* WhatsApp CTA */}
            <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100">
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-3xl text-green-500" />
                <div>
                  <p className="text-gray-700 font-medium">Quick Support on WhatsApp</p>
                  <p className="text-sm text-gray-500">Click to chat with our team</p>
                </div>
                <a 
                  href="https://wa.me/917510436350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition"
                >
                  Chat Now
                </a>
              </div>
            </div>
          </div>

          {/* Map / Location */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Find <span className="text-rose-600">Us</span>
            </h3>
            <div className="bg-gray-100 rounded-xl overflow-hidden h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.514887675688!2d77.5945630747778!3d12.971999687307676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e1417e2a0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SKILLON Location"
              ></iframe>
            </div>
            <p className="text-gray-500 text-sm mt-4 text-center">
              📍 Bangalore, Karnataka, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}