"use client";

import { FaGraduationCap, FaUserTie, FaRocket, FaBolt, FaWhatsapp, FaCheckCircle, FaStar, FaArrowRight } from "react-icons/fa";

export default function Courses() {
  const courses = [
    {
      level: "Basic Level",
      icon: <FaGraduationCap className="text-4xl" />,
      description: "Designed for absolute beginners, this program helps learners form correct sentences, introduce themselves, ask and answer simple questions, and use everyday vocabulary with confidence. It focuses on basic grammar, pronunciation, and reducing hesitation through regular speaking practice and personalised support.",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      btnColor: "hover:bg-emerald-600"
    },
    {
      level: "Intermediate Level",
      icon: <FaUserTie className="text-4xl" />,
      description: "This level helps you speak more fluently and naturally in real-life situations. Learn to describe, explain, and express ideas clearly while improving your grammar, vocabulary, and listening skills. Build confidence through conversations, role-plays, and structured speaking activities.",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      btnColor: "hover:bg-blue-600"
    },
    {
      level: "Advanced Level",
      icon: <FaRocket className="text-4xl" />,
      description: "Ideal for professionals and advanced learners, this program focuses on public speaking, group discussions, presentations, and business communication. Master advanced grammar, persuasive speaking, and fluency techniques to communicate with clarity and impact in both personal and professional settings.",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      btnColor: "hover:bg-purple-600"
    },
    {
      level: "Crash Course",
      icon: <FaBolt className="text-4xl" />,
      description: "A short-term intensive program designed for job seekers, interview preparation, and urgent fluency needs. It provides focused training in grammar, vocabulary development, and real-time speaking improvement within a condensed time frame.",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      btnColor: "hover:bg-orange-600"
    }
  ];

  const features = [
    "100% Satisfaction or full refund within 7 days",
    "Personalized learning system",
    "Real-time speaking practice",
    "Expert trainers with years of experience"
  ];

  return (
    <section id="courses" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-50 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
            <span className="text-rose-600 text-sm font-medium">Our Programs</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="text-rose-600">Learning Path</span>
          </h1>
          <p className="text-gray-600 text-lg">
            From beginner to advanced, we have the perfect course for your English learning journey
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Card Header with Gradient */}
              <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    {course.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{course.level}</h3>
                    <p className="text-white/80 text-sm">Complete Training Program</p>
                  </div>
                </div>
              </div>
              
              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {course.description}
                </p>
                
                {/* Features List */}
                <div className="mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaCheckCircle className="text-green-500 text-xs" />
                    <span>Certificate upon completion</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaCheckCircle className="text-green-500 text-xs" />
                    <span>Personal mentor support</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaCheckCircle className="text-green-500 text-xs" />
                    <span>Lifetime access to materials</span>
                  </div>
                </div>
                
                {/* Enquiry Button - WhatsApp Link Updated */}
                <a 
                  href="https://wa.me/917025191020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold ${course.btnColor} transition-all duration-300 hover:shadow-lg group`}
                >
                  ENQUIRY NOW
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Free Demo */}
        <div className="bg-gradient-to-r from-rose-600 to-rose-700 rounded-3xl p-10 md:p-12 text-center mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Speak English Fluently?
            </h2>
            <p className="text-white/90 text-lg mb-6">
              👉 Book your Free Demo Session now and experience our unique learning system.
            </p>
            <p className="text-white/80 text-md mb-8">
              👉 100% satisfaction or full refund within 7 days — no questions asked.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#contact" 
                className="px-8 py-3.5 bg-white text-rose-600 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Free Demo
              </a>
              <a 
                href="https://wa.me/917025191020"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <FaWhatsapp className="text-xl" />
                Join on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Why <span className="text-rose-600">SKILLON?</span>
            </h3>
            <div className="w-16 h-1 bg-rose-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                  <FaStar className="text-rose-600 text-sm" />
                </div>
                <span className="text-gray-700 text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}