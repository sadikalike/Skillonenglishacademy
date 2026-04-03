"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaChevronDown, FaChevronUp, FaGoogle, FaExternalLinkAlt } from "react-icons/fa";

export default function Testimonials() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Google Reviews Data
  const googleReviews = [
    {
      name: "Rajesh K.",
      role: "Software Engineer",
      text: "Excellent teaching methodology! The mind-mapping technique really helped me grasp English grammar quickly. My confidence has improved significantly.",
      rating: 5,
      date: "2 weeks ago",
    },
    {
      name: "Priya S.",
      role: "Student",
      text: "The 25 fluency tips are amazing! I never thought learning English could be this easy. The instructors are very supportive and patient.",
      rating: 5,
      date: "1 month ago",
    },
    {
      name: "Amit V.",
      role: "Business Owner",
      text: "Best decision I made for my English learning journey. The practical approach and real-life conversations helped me speak fluently in meetings.",
      rating: 5,
      date: "3 weeks ago",
    },
    {
      name: "Sneha M.",
      role: "Homemaker",
      text: "Very flexible timings and personalized attention. I can now speak English confidently with my children's teachers and at social gatherings.",
      rating: 5,
      date: "2 months ago",
    },
    {
      name: "Vikram G.",
      role: "Marketing Professional",
      text: "The crash course was exactly what I needed for my interview preparation. Within 4 weeks, I saw remarkable improvement in my speaking skills.",
      rating: 5,
      date: "1 week ago",
    },
    {
      name: "Kavita R.",
      role: "Teacher",
      text: "Outstanding support from personal tutors. The psychological techniques helped me overcome my fear of speaking English. Highly recommended!",
      rating: 5,
      date: "3 months ago",
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

  // ✅ Correct Google Maps Link from your shared URL
  const googleMapsLink = "https://maps.app.goo.gl/3PybXkj7FSMmuCCH6";
  const googleReviewLink = "https://search.google.com/local/writereview?placeid=3PybXkj7FSMmuCCH6";

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-rose-100 px-4 py-2 rounded-full mb-6 border border-rose-200">
            <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
            <span className="text-rose-600 text-sm font-medium">Student Success Stories</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our <span className="bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">Successful Students</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Hear what our students have to say about their journey with SKILLON
          </p>
        </motion.div>

        {/* Google Business Links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a 
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg hover:border-rose-300 transition-all duration-300 group"
          >
            <FaGoogle className="text-2xl text-blue-600" />
            <span className="text-gray-700 font-medium">Find us on</span>
            <span className="text-blue-600 font-bold">Google Maps</span>
            <FaExternalLinkAlt className="text-gray-400 text-sm group-hover:text-rose-500 transition" />
          </a>
          <a 
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-rose-50 to-rose-100 border border-rose-200 rounded-full shadow-md hover:shadow-lg hover:border-rose-300 transition-all duration-300 group"
          >
            <FaStar className="text-yellow-500" />
            <span className="text-gray-700 font-medium">Write a Review</span>
            <FaExternalLinkAlt className="text-gray-400 text-sm group-hover:text-rose-500 transition" />
          </a>
        </motion.div>

        {/* Google Reviews Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-full border border-green-200">
              <FaGoogle className="text-green-600" />
              <span className="text-green-700 text-sm font-medium">Google Reviews</span>
              <div className="flex items-center gap-1 ml-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
                <span className="text-green-700 font-bold ml-1">4.9</span>
              </div>
            </div>
          </div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {googleReviews.map((review, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-rose-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FaGoogle className="text-blue-500" />
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xs" />
                    ))}
                  </div>
                </div>
                
                <FaQuoteLeft className="text-rose-200 text-2xl mb-3 group-hover:text-rose-300 transition" />
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  "{review.text}"
                </p>
                
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-8">
            <a 
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-rose-600 to-rose-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              <FaGoogle />
              View All Google Reviews
              <FaExternalLinkAlt className="text-sm" />
            </a>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-rose-100 px-4 py-2 rounded-full mb-6 border border-rose-200">
              <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
              <span className="text-rose-600 text-sm font-medium">Got Questions?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Frequently Asked <span className="bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about our courses and learning process
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
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
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help!
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-600 to-rose-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}