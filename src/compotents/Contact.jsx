import React, { useRef, useState } from "react";
import { Send, Phone, MapPin, Mail, Download } from "lucide-react";

// Mock constants - replace with your actual imports
const CONTACT = {
  address: "Malabe, Sri Lanka",
  phoneNo: "+94 76 583 1021",
  email: "agbvilochana@gmail.com"
};

// IMPORTANT: Place your CV in the public folder as /public/BuddhimaCV.pdf
// Or replace this with a direct URL to your hosted CV
const CV_URL = "/BuddhimaCV.pdf";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const form = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    // Replace with your actual emailjs implementation
    setTimeout(() => {
      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const handleDownloadCV = () => {
    try {
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = CV_URL;
      link.download = 'Buddhima_Vilochana_CV.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show success message
      setStatus({ type: "success", message: "CV download started!" });
      setTimeout(() => setStatus({ type: "", message: "" }), 3000);
    } catch (error) {
      console.error('Download error:', error);
      setStatus({ type: "error", message: "Failed to download CV. Please try again." });
    }
  };

  const ContactInfo = ({ icon: Icon, title, value, href, onClick }) => (
    <div className="flex items-center space-x-4">
      <div
        className={`p-3 ${
          title === "Address"
            ? "bg-cyan-500/10"
            : title === "Phone"
            ? "bg-cyan-500/10"
            : title === "Email"
            ? "bg-teal-500/10"
            : "bg-teal-500/10"
        } rounded-lg border border-cyan-400/20`}
      >
        {onClick ? (
          <button
            onClick={onClick}
            className="hover:text-cyan-300 transition-colors focus:outline-none"
          >
            <Icon className="w-6 h-6 text-cyan-400 cursor-pointer" />
          </button>
        ) : href ? (
          <a
            href={href}
            className="hover:text-cyan-300 transition-colors"
          >
            <Icon className="w-6 h-6 text-cyan-400 cursor-pointer" />
          </a>
        ) : (
          <Icon className="w-6 h-6 text-cyan-400" />
        )}
      </div>
      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        {onClick ? (
          <button
            onClick={onClick}
            className="opacity-80 text-neutral-400 hover:text-cyan-400 transition-colors focus:outline-none"
          >
            {value}
          </button>
        ) : (
          <span className="opacity-80 text-neutral-400">{value}</span>
        )}
      </div>
    </div>
  );

  const SocialLinks = () => (
    <div className="mt-4">
      <div className="p-4 rounded-xl border border-neutral-800 hover:border-cyan-400/50 transition-colors bg-neutral-900">
        <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
          Connect With Me
        </h3>

        <div className="grid grid-cols-2 gap-4"></div>

        <div className="mt-0 p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-400/20">
          <p className="text-sm text-center text-neutral-300">
            Feel free to reach out for collaborations or just to say Hi!
          </p>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-cyan-400">Available for freelance</span>
        </div>
      </div>
    </div>
  );

  return (
    <div id="contact" className="min-h-min py-8 px-4 mb-4 font-sans"
    style={{ fontFamily: "'Poppins', sans-serif", marginTop:"50px" }}>
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-4">
          <div className="text-center mb-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
              Get{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                In Touch
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full"></div>
          </div>

          <p className="text-center max-w-2xl mx-auto text-neutral-400">
            Have a question or want to work together? Drop me a message below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 text-white">
          <div className="space-y-4">
            <div className="p-6 rounded-xl border border-neutral-800 hover:border-cyan-400/50 transition-colors bg-neutral-900">
              <div className="space-y-6">
                <ContactInfo
                  icon={MapPin}
                  title="Address"
                  value={CONTACT.address}
                />
                <ContactInfo
                  icon={Phone}
                  title="Phone"
                  value={CONTACT.phoneNo}
                  href={`tel:${CONTACT.phoneNo}`}
                />
                <ContactInfo
                  icon={Mail}
                  title="Email"
                  value={CONTACT.email}
                  href={`mailto:${CONTACT.email}`}
                />
                <ContactInfo
                  icon={Download}
                  title="Resume"
                  value="Download CV"
                  onClick={handleDownloadCV}
                />
              </div>
            </div>
            <SocialLinks />
          </div>

          <div className="p-8 rounded-xl border border-neutral-800 hover:border-cyan-400/50 transition-colors bg-neutral-900">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-m font-medium mb-1 text-neutral-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-neutral-950 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all text-white placeholder-neutral-500 outline-none"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-m font-medium mb-1 text-neutral-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-neutral-950 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all text-white placeholder-neutral-500 outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-m font-medium mb-1 text-neutral-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-neutral-950 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all text-white placeholder-neutral-500 outline-none resize-none"
                  placeholder="Your message"
                  required
                />
              </div>

              <button
                type="button"
                onClick={sendEmail}
                disabled={status.type === "loading"}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-teal-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>
                  {status.type === "loading" ? "Sending..." : "Send Message"}
                </span>
                <Send className="w-4 h-4" />
              </button>

              {status.message && (
                <div
                  className={`text-center p-2 rounded ${
                    status.type === "success"
                      ? "text-green-400 bg-green-500/10 border border-green-500/20"
                      : status.type === "error"
                      ? "text-red-400 bg-red-500/10 border border-red-500/20"
                      : "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;