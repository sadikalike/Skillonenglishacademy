"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaWhatsapp, 
  FaInstagram, 
  FaFacebookF, 
  FaYoutube,
  FaPaperPlane,
  FaCheckCircle,
  FaHeadset,
  FaShieldAlt,
  FaRocket
} from "react-icons/fa";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    message: string;
    type: "success" | "error" | null;
  }>({ submitted: false, message: "", type: null });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setFormStatus({
      submitted: true,
      message: "Thank you! We'll get back to you within 24 hours.",
      type: "success"
    });
    
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
      gradient: "from-rose-500 to-rose-600",
      delay: 0.1
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Call Us",
      details: ["+91 70251 91020", "+91 75104 36350"],
      gradient: "from-rose-500 to-rose-600",
      delay: 0.2
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Us",
      details: ["info@skillon.com", "support@skillon.com"],
      gradient: "from-rose-500 to-rose-600",
      delay: 0.3
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 11:00 PM", "Sunday: Closed"],
      gradient: "from-rose-500 to-rose-600",
      delay: 0.4
    }
  ];

  const socialLinks = [
    { icon: <FaWhatsapp />, name: "WhatsApp 1", color: "from-green-500 to-green-600", link: "https://wa.me/917025191020", number: "70251 91020" },
    { icon: <FaWhatsapp />, name: "WhatsApp 2", color: "from-green-500 to-green-600", link: "https://wa.me/917510436350", number: "75104 36350" },
    { icon: <FaInstagram />, name: "Instagram", color: "from-pink-500 to-rose-500", link: "https://instagram.com" },
    { icon: <FaFacebookF />, name: "Facebook", color: "from-blue-600 to-blue-700", link: "https://facebook.com" },
    { icon: <FaYoutube />, name: "YouTube", color: "from-red-600 to-red-700", link: "https://youtube.com" }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Centered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-rose-100 px-4 py-2 rounded-full mb-6 border border-rose-200">
            <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
            <span className="text-rose-600 text-sm font-medium">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Let's <span className="bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          
          {/* Contact Info Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${info.gradient} opacity-5 rounded-full blur-2xl`}></div>
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg`}
                  >
                    {info.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Send us a <span className="bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">Message</span>
            </h2>
            <p className="text-gray-500 text-sm mb-6 text-center">Fill out the form and we'll get back to you shortly</p>
            
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
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-rose-600 to-rose-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                <FaPaperPlane />
                Send Message
              </motion.button>
              
              {formStatus.submitted && formStatus.type === "success" && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 bg-green-50 text-green-600 rounded-lg"
                >
                  <FaCheckCircle />
                  <span className="text-sm">{formStatus.message}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Social Media Section - Full Width (Map Removed) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Connect on <span className="bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">Social Media</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                className="flex flex-col items-center gap-2 px-4 py-3 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300 group text-center"
              >
                <div className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center text-white text-lg`}>
                  {social.icon}
                </div>
                <span className="text-gray-700 text-xs font-medium group-hover:text-rose-600 transition">
                  {social.name}
                </span>
                {social.number && (
                  <span className="text-gray-400 text-[10px]">{social.number}</span>
                )}
              </motion.a>
            ))}
          </div>
          
          {/* WhatsApp CTA - Two Numbers */}
          <div className="mt-6 space-y-3">
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <FaHeadset className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Quick Support on WhatsApp</p>
                  <p className="text-sm text-gray-500">Click to chat with our team</p>
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <motion.a 
                  href="https://wa.me/917025191020"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg text-sm font-medium hover:shadow-lg transition text-center"
                >
                  📱 70251 91020
                </motion.a>
                <motion.a 
                  href="https://wa.me/917510436350"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg text-sm font-medium hover:shadow-lg transition text-center"
                >
                  📱 75104 36350
                </motion.a>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-rose-500 text-sm" />
              <span>100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRocket className="text-rose-500 text-sm" />
              <span>Fast Response</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-rose-500 text-sm" />
              <span>24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}