import React, { useRef, useState } from 'react';
import { Send, Phone, MapPin, Mail, Download} from 'lucide-react';
import { CONTACT } from '../constants';
import BuddhimaCV from '../assets/BuddhimaCV.pdf';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

// Initialize EmailJS
emailjs.init("-2plUivn1vfBwR-nT");

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const form = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        'service_rr135xi',
        'template_0ksn2tf',
        templateParams,
        '-2plUivn1vfBwR-nT'
      );
      
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again.' 
      });
    }
  };

  const ContactInfo = ({ icon: Icon, title, value, href, download }) => (
    <div className="flex items-center space-x-4">
      <div className={`p-3 ${
        title === 'Address' ? 'bg-sky-900/50' :
        title === 'Phone' ? 'bg-cyan-900/50' :
        title === 'Email' ? 'bg-teal-900/50' :
        'bg-emerald-900/50'
      } rounded-lg`}>
        {href ? (
          <a
            href={href}
            download={download}
            className={`hover:text-${
              title === 'Phone' ? 'cyan' :
              title === 'Email' ? 'teal' :
              'emerald'
            }-400 transition-colors`}
          >
            <Icon className={`w-6 h-6 text-${
              title === 'Phone' ? 'cyan' :
              title === 'Email' ? 'teal' :
              'emerald'
            }-400 cursor-pointer`} />
          </a>
        ) : (
          <Icon className="w-6 h-6 text-sky-400" />
        )}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <span className="opacity-80">{value}</span>
      </div>
    </div>
  );

  const SocialLinks = () => (
    <div className="mt-4"> {/* Changed from mt-8 to mt-4 */}
      <div className="p-4 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
        <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent">
          Connect With Me
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          
        </div>

        <div className="mt-0 p-4 rounded-lg bg-gradient-to-r from-sky-900/50 to-teal-900/50">
          <p className="text-sm text-center text-gray-200">
            Feel free to reach out for collaborations or just to say Hi!
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-min py-12 px-4 font-[Poppins]">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <motion.h1 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="text-3xl lg:text-4xl text-center font-bold text-white" 
            style={{
              marginTop: "-10px",
              background: "linear-gradient(to right, #0ea5e9, #06b6d4, #14b8a6)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent"
            }}>
              Get In Touch
          </motion.h1>

          <p className="text-center max-w-2xl mx-auto text-neutral-400">
            Have a question or want to work together? Drop me a message below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 text-white">
          <div className="space-y-4"> {/* Changed from space-y-8 to space-y-4 */}
            <div className="p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
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
                  href={BuddhimaCV}
                  download
                />
              </div>
            </div>
            <SocialLinks />
          </div>

          <div className="p-8 rounded-xl border border-gray-700">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-m font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-m font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-m font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                  placeholder="Your message"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-sky-700 via-cyan-700 to-teal-500 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{status.type === 'loading' ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-4 h-4" />
              </button>

              {status.message && (
                <div className={`text-center p-2 rounded ${
                  status.type === 'success' ? 'text-green-400' : 
                  status.type === 'error' ? 'text-red-400' : 
                  'text-blue-400'
                }`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;