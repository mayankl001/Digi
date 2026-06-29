import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { db } from "../../firebase"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; msg: string }>({
    type: null,
    msg: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, msg: "" });

    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp(),
      });

      setStatus({
        type: "success",
        msg: "🎉 Thank you! Your message has been sent successfully. Our team will get back to you shortly.",
      });

      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Firebase Submit Error:", error);
      setStatus({
        type: "error",
        msg: "❌ Something went wrong. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div 
      className="min-h-screen bg-[#FAFAFA] pt-28 pb-16 px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className="text-xs font-bold tracking-[4px] uppercase px-3 py-1 rounded-full mb-4 inline-block"
            style={{ background: "rgba(153,27,27,0.08)", color: "#991B1B" }}
          >
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#111827] mt-2 tracking-tight">
            We’d Love to <span style={{ color: "#991B1B" }}>Hear From You</span>
          </h1>
          <p className="text-base text-[#6B7280] mt-4 leading-relaxed">
            Have any questions about DigiSaloon? Whether you are a customer looking for premium services or a salon owner wanting to partner with us, our team is here to help.
          </p>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div 
              className="p-8 rounded-3xl bg-white border border-gray-100 space-y-8"
              style={{ boxShadow: "0 10px 40px rgba(153,27,27,0.02)" }}
            >
              <h3 className="text-xl font-bold text-[#111827]">Contact Information</h3>
              
              {/* Phone info (WORKING LINK) */}
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-2xl bg-red-50 text-[#991B1B]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Call Us</h4>
                  <a 
                    href="tel:+919876543210" 
                    className="block text-base font-bold text-[#374151] mt-1 transition-colors duration-200 hover:text-[#991B1B]"
                    style={{ textDecoration: 'none' }}
                  >
                    +91 98765 43210
                  </a>
                  <p className="text-xs text-gray-400 mt-0.5">Mon-Sat from 9am to 7pm</p>
                </div>
              </div>

              {/* Email info (WORKING LINK) */}
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-2xl bg-red-50 text-[#991B1B]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Email Us</h4>
                  <a 
                    href="mailto:support@digisaloon.in" 
                    className="block text-base font-bold text-[#374151] mt-1 transition-colors duration-200 hover:text-[#991B1B]"
                    style={{ textDecoration: 'none' }}
                  >
                    support@digisaloon.in
                  </a>
                  <p className="text-xs text-gray-400 mt-0.5">We reply within 24 hours</p>
                </div>
              </div>

              {/* Location info */}
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-2xl bg-red-50 text-[#991B1B]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Location</h4>
                  <p className="text-base font-bold text-[#374151] mt-1">Lalpur, Ranchi</p>
                  <p className="text-xs text-gray-400 mt-0.5">Jharkhand, India</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="pt-6 border-t border-gray-100 flex gap-4 items-start">
                <div className="p-3 rounded-2xl bg-red-50 text-[#991B1B]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Operating Hours</h4>
                  <p className="text-sm text-[#374151] mt-1 font-medium">
                    <span className="font-bold">Everyday:</span> 08:00 AM - 09:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit}
              className="p-8 md:p-10 rounded-3xl bg-white border border-gray-100 space-y-6"
              style={{ boxShadow: "0 20px 50px rgba(153,27,27,0.04)" }}
            >
              <h3 className="text-2xl font-bold text-[#111827]">Send us a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none transition-all duration-200 text-sm focus:border-[#991B1B]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none transition-all duration-200 text-sm focus:border-[#991B1B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none transition-all duration-200 text-sm focus:border-[#991B1B]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Partnership, Support, Query..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none transition-all duration-200 text-sm focus:border-[#991B1B]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Your Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none transition-all duration-200 text-sm resize-none focus:border-[#991B1B]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold text-sm transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #991B1B 0%, #B91C1C 100%)",
                  boxShadow: "0 4px 14px rgba(153,27,27,0.3)",
                }}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {status.type && (
                <div 
                  className={`p-4 rounded-xl text-center text-sm font-medium transition-all duration-300 ${
                    status.type === "success" 
                      ? "bg-green-50 border border-green-200 text-green-800" 
                      : "bg-red-50 border border-red-200 text-red-800"
                  }`}
                >
                  {status.msg}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}