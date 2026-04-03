"use client";

import { useState } from "react";
import { FaQuoteLeft, FaStar, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Testimonials() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const testimonials = [
    {
      name: "ROGER SCOTT",
      role: "MARKETING MANAGER",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "ROGER SCOTT",
      role: "MARKETING MANAGER",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      name: "ROGER SCOTT",
      role: "MARKETING MANAGER",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      name: "ROGER SCOTT",
      role: "MARKETING MANAGER",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      name: "ROGER SCOTT",
      role: "MARKETING MANAGER",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      name: "ROGER SCOTT",
      role: "MARKETING MANAGER",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/6.jpg"
    }
  ];

  const faqs = [
    {
      question: "How to Enroll This Online Courses?",
      answer: "Enrolling in our courses is simple! Just click on the 'ENQUIRY NOW' button on your desired course, fill out the form, and our team will contact you within 24 hours with enrollment details and payment options."
    },
    {
      question: "What levels of English courses do you offer?",
      answer: "We offer four main levels: Basic Level (for beginners), Intermediate Level (for fluency), Advanced Level (for professionals), and Crash Course (for interview preparation). Each level is designed to match your current proficiency and goals."
    },
    {
      question: "Are there courses for beginners?",
      answer: "Yes! Our Basic Level course is specifically designed for absolute beginners. You'll learn how to form correct sentences, introduce yourself, ask and answer simple questions, and use everyday vocabulary confidently."
    },
    {
      question: "How long do the courses take to complete?",
      answer: "Course duration varies by level: Basic Level (3 months), Intermediate Level (4 months), Advanced Level (4 months), and Crash Course (1 month). However, you can learn at your own pace with flexible timings."
    },
    {
      question: "Can kids join the courses?",
      answer: "Yes, we have special programs for young learners aged 12 and above. Our courses are designed to be engaging and age-appropriate for teenagers who want to improve their English skills."
    },
    {
      question: "What learning materials are included in the PDF bundle?",
      answer: "Our PDF bundle includes comprehensive study materials, practice exercises, grammar guides, vocabulary lists, conversation scripts, and worksheets that complement your learning journey."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-50 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
            <span className="text-rose-600 text-sm font-medium">Student Success Stories</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-rose-600">Successful Students</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Hear what our students have to say about their journey with SKILLON
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-rose-200 text-3xl mb-4 group-hover:text-rose-300 transition" />
              
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              {/* Student Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-rose-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-rose-50 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
              <span className="text-rose-600 text-sm font-medium">Got Questions?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-rose-600">Questions</span>
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about our courses and learning process
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:border-rose-200 transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left font-semibold text-gray-900 hover:text-rose-600 transition"
                >
                  <span className="text-lg">{faq.question}</span>
                  {openFaq === index ? (
                    <FaChevronUp className="text-rose-600" />
                  ) : (
                    <FaChevronDown className="text-gray-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* FAQ CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help!
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 text-white rounded-full font-semibold hover:bg-rose-700 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}