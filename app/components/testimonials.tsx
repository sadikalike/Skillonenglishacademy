"use client";

import { useState } from "react";
import { FaQuoteLeft, FaStar, FaChevronDown, FaChevronUp, FaGoogle, FaBusinessTime } from "react-icons/fa";

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
      source: "Google"
    },
    {
      name: "Priya S.",
      role: "Student",
      text: "The 25 fluency tips are amazing! I never thought learning English could be this easy. The instructors are very supportive and patient.",
      rating: 5,
      date: "1 month ago",
      source: "Google"
    },
    {
      name: "Amit V.",
      role: "Business Owner",
      text: "Best decision I made for my English learning journey. The practical approach and real-life conversations helped me speak fluently in meetings.",
      rating: 5,
      date: "3 weeks ago",
      source: "Google"
    },
    {
      name: "Sneha M.",
      role: "Homemaker",
      text: "Very flexible timings and personalized attention. I can now speak English confidently with my children's teachers and at social gatherings.",
      rating: 5,
      date: "2 months ago",
      source: "Google"
    },
    {
      name: "Vikram G.",
      role: "Marketing Professional",
      text: "The crash course was exactly what I needed for my interview preparation. Within 4 weeks, I saw remarkable improvement in my speaking skills.",
      rating: 5,
      date: "1 week ago",
      source: "Google"
    },
    {
      name: "Kavita R.",
      role: "Teacher",
      text: "Outstanding support from personal tutors. The psychological techniques helped me overcome my fear of speaking English. Highly recommended!",
      rating: 5,
      date: "3 months ago",
      source: "Google"
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

        {/* Google My Business Link */}
        <div className="flex justify-center mb-12">
          <a 
            href="https://g.co/kgs/your-business-id" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <FaGoogle className="text-2xl text-blue-600" />
            <span className="text-gray-700 font-medium">Review us on</span>
            <span className="text-blue-600 font-bold">Google</span>
            <FaBusinessTime className="text-gray-400 group-hover:text-green-500 transition" />
          </a>
        </div>

        {/* Google Reviews Grid */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
              <FaGoogle className="text-green-600" />
              <span className="text-green-700 text-sm font-medium">Google Reviews</span>
              <div className="flex items-center gap-1 ml-2">
                <FaStar className="text-yellow-400 text-sm" />
                <span className="text-green-700 font-bold">5.0</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {googleReviews.map((review, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-green-200"
              >
                {/* Google Badge */}
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
                
                {/* Quote Icon */}
                <FaQuoteLeft className="text-rose-200 text-2xl mb-3 group-hover:text-rose-300 transition" />
                
                {/* Review Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  "{review.text}"
                </p>
                
                {/* Student Info */}
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Reviews Button */}
          <div className="text-center mt-8">
            <a 
              href="https://g.co/kgs/your-business-id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <FaGoogle />
              View All Google Reviews
            </a>
          </div>
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