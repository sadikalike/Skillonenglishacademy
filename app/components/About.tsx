"use client";

import { motion } from "framer-motion";
import { 
  FaChalkboardTeacher, FaUserGraduate, FaClock, FaBrain, 
  FaCode, FaComments, FaUsers, FaHeart, FaCheckCircle, 
  FaArrowRight, FaGraduationCap, FaLanguage, FaMicrophone,
  FaChartLine, FaTrophy, FaRocket, FaInstagram, FaMapMarkerAlt
} from "react-icons/fa";

export default function About() {
  const features = [
    {
      icon: <FaUserGraduate className="text-3xl" />,
      title: "One-on-One Coaching",
      description: "Individual attention for faster progress",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: "25 Codes",
      description: "A unique system designed for easy understanding",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaBrain className="text-3xl" />,
      title: "Mind Mapping System",
      description: "Learn the natural way your brain remembers",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Psychological Support",
      description: "Build confidence from within",
      gradient: "from-rose-500 to-red-500"
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Flexible Timings",
      description: "Learn anytime, from anywhere",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: <FaComments className="text-3xl" />,
      title: "Practical Approach",
      description: "Focused on speaking, listening, and real conversation",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const courses = [
    {
      title: "Online Courses",
      description: "Online courses offer flexible and affordable learning, allowing you to study anytime, anywhere, and gain expert knowledge at your own pace.",
      icon: <FaChalkboardTeacher className="text-4xl" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Learn with Experts",
      description: "Learn from industry experts, gaining practical knowledge, insights, and guidance to help you succeed and grow in your field.",
      icon: <FaUsers className="text-4xl" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Personal Tutor",
      description: "Our English course provides a personal tutor to help with homework, clear your doubts, and offer continuous support to enhance your learning experience.",
      icon: <FaUserGraduate className="text-4xl" />,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const learnTopics = [
    { name: "Grammar Made Simple", icon: <FaGraduationCap />, color: "from-emerald-500 to-teal-500" },
    { name: "Vocabulary for Everyday Situations", icon: <FaLanguage />, color: "from-blue-500 to-indigo-500" },
    { name: "Real-World Speaking Practice", icon: <FaMicrophone />, color: "from-purple-500 to-pink-500" },
    { name: "Pronunciation & Accent Training", icon: <FaMicrophone />, color: "from-rose-500 to-red-500" },
    { name: "Confidence-Building Exercises", icon: <FaHeart />, color: "from-pink-500 to-rose-500" },
    { name: "Listening & Response Skills", icon: <FaComments />, color: "from-cyan-500 to-blue-500" },
    { name: "Interview & Presentation Training", icon: <FaChartLine />, color: "from-indigo-500 to-purple-500" }
  ];

  // States Data
  const states = [
    {
      name: "Kerala",
      language: "Malayalam",
      flag: "🇮🇳",
      color: "from-yellow-500 to-orange-500",
      instagram: "https://www.instagram.com/skillonenglishacademy",
      instagramHandle: "@skillonenglishacademy",
      description: "മലയാളത്തിൽ ഇംഗ്ലീഷ് പഠിക്കൂ | Learn English in Malayalam"
    },
    {
      name: "Karnataka",
      language: "Kannada",
      flag: "🇮🇳",
      color: "from-red-500 to-rose-500",
      instagram: "https://www.instagram.com/skillon_kannada",
      instagramHandle: "@skillon_kannada",
      description: "ಕನ್ನಡದಲ್ಲಿ ಇಂಗ್ಲೀಷ್ ಕಲಿಯಿರಿ | Learn English in Kannada"
    },
    {
      name: "Tamil Nadu",
      language: "Tamil",
      flag: "🇮🇳",
      color: "from-blue-500 to-indigo-500",
      instagram: "https://www.instagram.com/skillon_tamil",
      instagramHandle: "@skillon_tamil",
      description: "தமிழில் ஆங்கிலம் கற்றுக்கொள்ளுங்கள் | Learn English in Tamil"
    }
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
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Welcome Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-50 to-rose-100 px-4 py-2 rounded-full mb-6 border border-rose-200 shadow-sm">
            <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
            <span className="text-rose-600 text-sm font-medium">Welcome to SKILLON</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Welcome to</span>
            <br />
            <span className="bg-gradient-to-r from-rose-600 to-rose-700 bg-clip-text text-transparent">
              SKILLON English Academy
            </span>
          </h1>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-transparent blur-2xl"></div>
            <p className="text-gray-600 text-lg leading-relaxed relative">
              At SKILLON, we believe learning English should be simple, practical, and powerful. 
              Our mission is to help learners overcome fear and speak confidently in real-life situations 
              using our proven <span className="text-rose-600 font-semibold">25-Code Learning System</span>, 
              <span className="text-rose-600 font-semibold"> Mind Mapping Learning Method</span>, and 
              <span className="text-rose-600 font-semibold"> Psychology-Based Coaching</span>. 
              Whether you're a student, professional, or homemaker — we tailor your learning journey based on your goals.
            </p>
          </div>
        </motion.div>

        {/* States Section - Before Why Choose SKILLON */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full mb-4 border border-blue-200">
              <FaMapMarkerAlt className="text-blue-500 text-sm" />
              <span className="text-blue-600 text-sm font-medium">Our Presence</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We're <span className="bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">Pan India</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-600 to-rose-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-4">Learn English in your mother tongue across 3 states</p>
          </div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {states.map((state, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 bg-white rounded-2xl border border-gray-200 hover:border-rose-300 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${state.color} opacity-5 rounded-full blur-2xl`}></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-14 h-14 bg-gradient-to-br ${state.color} rounded-xl flex items-center justify-center text-white text-2xl shadow-lg`}>
                      {state.flag}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{state.name}</h3>
                      <p className="text-sm text-rose-600 font-medium">{state.language}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {state.description}
                  </p>
                  <motion.a
                    href={state.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300"
                  >
                    <FaInstagram className="text-sm" />
                    {state.instagramHandle}
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Why Choose SKILLON Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-rose-600">SKILLON?</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-600 to-rose-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-4">Experience the difference with our unique approach</p>
          </div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 bg-white rounded-2xl border border-gray-200 hover:border-rose-300 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-full blur-2xl`}></div>
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg`}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* What We Offer Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What <span className="text-rose-600">We Offer</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-600 to-rose-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-4">Comprehensive learning solutions for your success</p>
          </div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {courses.map((course, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-rose-300 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`relative h-40 bg-gradient-to-r ${course.gradient} flex items-center justify-center`}>
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <div className="text-5xl text-white">
                      {course.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{course.description}</p>
                  <motion.a
                    href="#courses"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 mt-4 text-rose-600 font-semibold group-hover:text-rose-700 transition"
                  >
                    Learn More <FaArrowRight className="text-sm" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* What You'll Learn Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll <span className="text-rose-600">Learn</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-600 to-rose-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-4">Master essential skills for real-world success</p>
          </div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {learnTopics.map((topic, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ x: 8, scale: 1.02 }}
                className={`group relative p-5 rounded-xl bg-white border border-gray-200 hover:border-rose-300 hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div className={`w-full h-full bg-gradient-to-br ${topic.color}`}></div>
                </div>
                <div className="flex items-center gap-4 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                    className={`w-12 h-12 bg-gradient-to-br ${topic.color} rounded-xl flex items-center justify-center text-white shadow-md`}
                  >
                    {topic.icon}
                  </motion.div>
                  <span className="text-gray-800 font-semibold group-hover:text-rose-600 transition-colors">
                    {topic.name}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-rose-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          className="relative bg-gradient-to-r from-rose-600 via-rose-500 to-rose-700 rounded-3xl p-12 text-center shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <FaRocket className="text-4xl text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of successful learners who have transformed their English speaking skills with SKILLON
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="#courses"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-white text-rose-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Courses
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 border-2 border-white/50 text-white rounded-full font-semibold hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}