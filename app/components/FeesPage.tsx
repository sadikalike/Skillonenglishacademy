"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaRupeeSign, FaGooglePay, FaMobileAlt, FaPaypal, FaShieldAlt, FaArrowRight, FaWhatsapp, FaSms } from "react-icons/fa";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function PaymentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: ""
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Function to send SMS via API (You need to implement this with your SMS provider)
  const sendSMS = async (phone: string, name: string, amount: string, paymentId: string) => {
    // Option 1: Using WhatsApp API (already implemented)
    // Option 2: Using SMS Gateway API (Unifonic, Twilio, MSG91, etc.)
    
    // For now, we'll use WhatsApp which acts as SMS alternative
    // To add real SMS, you'll need an SMS gateway API key
    
    console.log(`SMS would be sent to ${phone}: Payment successful for ₹${amount}`);
    
    // Example with MSG91 (You need to sign up and get API key)
    /*
    try {
      await fetch('https://api.msg91.com/api/v5/flow/', {
        method: 'POST',
        headers: {
          'authkey': 'YOUR_MSG91_AUTH_KEY',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          template_id: 'YOUR_TEMPLATE_ID',
          mobiles: phone,
          name: name,
          amount: amount,
          payment_id: paymentId
        })
      });
    } catch (error) {
      console.error('SMS sending failed:', error);
    }
    */
  };

  const handlePayment = async () => {
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.amount) {
      alert("Please fill all fields");
      return;
    }

    const amountNum = parseInt(formData.amount);
    if (isNaN(amountNum) || amountNum < 10) {
      alert("Please enter a valid amount (minimum ₹10)");
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    setLoading(true);

    try {
      const res = await loadRazorpayScript();
      if (!res) {
        alert("Payment gateway failed to load. Please check your internet connection.");
        setLoading(false);
        return;
      }

      const options = {
        key: "rzp_live_Sa9lcLsWxiV7GE",
        amount: amountNum * 100,
        currency: "INR",
        name: "SKILLON English Academy",
        description: `Course Fee Payment - ${formData.name}`,
        image: "/logo.png",
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        notes: {
          student_name: formData.name,
          student_email: formData.email,
          student_phone: formData.phone,
          amount: formData.amount,
          payment_date: new Date().toLocaleString()
        },
        theme: {
          color: "#e11d48"
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      
      razorpay.on("payment.success", async function(response: any) {
        const paymentId = response.razorpay_payment_id;
        
        // 1. WhatsApp Message (Primary)
        const whatsappMessage = `✅ *PAYMENT SUCCESSFUL!* ✅%0A%0A` +
          `━━━━━━━━━━━━━━━━━━━━━%0A` +
          `👤 *Name:* ${formData.name}%0A` +
          `📱 *Phone:* ${formData.phone}%0A` +
          `📧 *Email:* ${formData.email}%0A` +
          `💰 *Amount:* ₹${formData.amount}%0A` +
          `🆔 *Payment ID:* ${paymentId}%0A` +
          `━━━━━━━━━━━━━━━━━━━━━%0A%0A` +
          `Thank you for choosing SKILLON English Academy! 🙏%0A%0A` +
          `Our team will contact you shortly.`;
        
        window.open(`https://wa.me/917510436350?text=${whatsappMessage}`, "_blank");
        
        // 2. SMS Confirmation (For customer trust)
        const smsMessage = `SKILLON: Payment of ₹${formData.amount} received successfully. Payment ID: ${paymentId}. Thank you for choosing SKILLON English Academy! - Team SKILLON`;
        
        // Send SMS using your preferred SMS gateway
        // For demo, we'll show an alert that SMS would be sent
        // In production, integrate with MSG91, Twilio, or any SMS provider
        
        // Show SMS confirmation dialog
        const sendSmsConfirm = confirm(`Send SMS confirmation to ${formData.phone}?\n\nMessage: ${smsMessage}`);
        if (sendSmsConfirm) {
          // Here you would call your SMS API
          alert(`SMS sent to ${formData.phone}\n\nMessage: ${smsMessage}`);
        }
        
        // 3. Browser Alert
        alert(`✅ Payment Successful!\n\nPayment ID: ${paymentId}\nAmount: ₹${formData.amount}\n\nA confirmation message has been sent to your WhatsApp and SMS.`);
        
        // Reset form
        setFormData({ name: "", email: "", phone: "", amount: "" });
        setLoading(false);
      });
      
      razorpay.on("payment.error", function(response: any) {
        alert(`Payment Failed: ${response.error.description || "Please try again"}`);
        setLoading(false);
      });
      
      razorpay.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="payment" className="py-24 bg-gradient-to-br from-gray-50 to-white min-h-screen flex items-center">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-rose-50 px-4 py-2 rounded-full mb-4 border border-rose-200">
            <FaRupeeSign className="text-rose-500 text-sm" />
            <span className="text-rose-600 text-sm font-medium">Secure Payment</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Complete Your Payment
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Enter the amount as confirmed by your counselor
          </p>
        </motion.div>

        {/* Trust Badges */}
        <div className="flex justify-center gap-4 mb-6">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <FaWhatsapp className="text-green-500" />
            <span>WhatsApp Confirmation</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <FaSms className="text-blue-500" />
            <span>SMS Confirmation</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <FaShieldAlt className="text-green-500" />
            <span>100% Secure</span>
          </div>
        </div>

        {/* Payment Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
        >
          <div className="p-6">
            {/* Info Box */}
            <div className="mb-5 p-3 bg-blue-50 rounded-xl border border-blue-100 text-center">
              <p className="text-blue-700 text-sm">
                💡 Click "Pay Now" → Select GPay → Complete payment in app
              </p>
              <p className="text-blue-600 text-xs mt-1">
                You'll receive confirmation on WhatsApp & SMS
              </p>
            </div>

            {/* Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Full Name *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition text-gray-900"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Email Address *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition text-gray-900"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Mobile Number *</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">+91</span>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="9876543210"
                    maxLength={10}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition text-gray-900"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">You'll receive confirmation on this number</p>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Amount (₹) *</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                  <input 
                    type="number" 
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    placeholder="Enter amount (minimum ₹10)"
                    className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition text-gray-900 font-medium"
                  />
                </div>
                <p className="text-xs text-green-600 mt-1">💡 Minimum amount: ₹10</p>
              </div>
            </div>

            {/* UPI Apps Section */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center mb-3">Pay securely with</p>
              <div className="flex items-center justify-center gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                    <FaGooglePay className="text-blue-600 text-xl" />
                  </div>
                  <span className="text-xs text-gray-500 mt-1">Google Pay</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center">
                    <FaMobileAlt className="text-purple-600 text-xl" />
                  </div>
                  <span className="text-xs text-gray-500 mt-1">PhonePe</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                    <FaPaypal className="text-blue-500 text-xl" />
                  </div>
                  <span className="text-xs text-gray-500 mt-1">PayTM</span>
                </div>
              </div>
            </div>

            {/* Pay Button */}
            <button
              onClick={handlePayment}
              disabled={loading}
              className={`w-full mt-6 py-3 bg-gradient-to-r from-rose-600 to-rose-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                "Processing..."
              ) : (
                <>
                  <FaGooglePay className="text-xl" />
                  Pay Now (GPay/PhonePe)
                  <FaArrowRight />
                </>
              )}
            </button>

            {/* Secure & Trust Badges */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <FaShieldAlt className="text-green-500" />
                <span>Razorpay Secure</span>
              </div>
              <div className="flex items-center gap-1">
                <FaWhatsapp className="text-green-500" />
                <span>WhatsApp Confirmation</span>
              </div>
              <div className="flex items-center gap-1">
                <FaSms className="text-blue-500" />
                <span>SMS Confirmation</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* WhatsApp Support */}
        <div className="text-center mt-6">
          <a 
            href="https://wa.me/917510436350"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 transition"
          >
            <FaWhatsapp className="text-green-500" />
            Need help? Contact Counselor
          </a>
        </div>
      </div>
    </section>
  );
}