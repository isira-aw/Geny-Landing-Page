import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "", // Added mobile field
    message: ""
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");
    
    const formDataObject = {
      ...formData,
      access_key: "8dea2d54-fd26-4c17-affd-4ad99bcf9c30"
    };

    const json = JSON.stringify(formDataObject);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setStatus("Thank you! We've received your message and will be in touch with you shortly.");
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus("Error submitting the form. Please try again later.");
    }
  };

  return (
    <div className="space-y-6 animate-slide-in">
      <div className="flex items-center space-x-3 mb-6">
        {/* <Mail className="w-8 h-8 text-blue-300" /> */}
        <h2 className="text-4xl font-bold mb-4 font-mono">Contact Us</h2>
      </div>
      
      <p className="text-lg text-white/90 leading-relaxed">
        Discover how our IoT device can elevate your next project, reach out to us for more details, and let's create something amazing together!
      </p>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-blue-300" />
          <span className="text-white/90">osanda7525@gmail.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-blue-300" />
          <span className="text-white/90">+94 70 433 8698</span>
        </div>
        <div className="flex items-center space-x-3">
          <MapPin className="w-5 h-5 text-blue-300" />
          <span className="text-white/90">Panadura, Sri Lanka</span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="bg-white/10 rounded-lg p-4 space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:border-blue-300 transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:border-blue-300 transition-colors"
        />
        <input
          type="text"
          name="mobile"
          placeholder="Your Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:border-blue-300 transition-colors"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:border-blue-300 transition-colors resize-none"
        />
        
        <button
          type="submit"
          className="w-full bg-blue-600/80 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center justify-center space-x-2"
        >
          <Send className="w-4 h-4" />
          <span>Send Message</span>
        </button>
      </form>

      {status && <p className="text-white mt-4">{status}</p>}
    </div>
  );
};
