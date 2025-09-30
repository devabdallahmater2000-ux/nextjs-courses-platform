// app/contact/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock,
  FaPaperPlane,
  FaLinkedin,
  FaTwitter,
  FaFacebook
} from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowAlert(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl text-blue-600" />,
      title: 'Email Us',
      details: 'info@elearning.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <FaPhone className="text-2xl text-green-600" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon to Fri from 9am to 6pm'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-red-600" />,
      title: 'Visit Us',
      details: '123 Education St, Learning City',
      description: 'Visit our headquarters'
    },
    {
      icon: <FaClock className="text-2xl text-purple-600" />,
      title: 'Office Hours',
      details: 'Monday - Friday: 9:00 - 18:00',
      description: 'Weekend: Closed'
    }
  ];

  const Alert = ({ message }: { message: string }) => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(false);
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }, []);
    if (!visible) return null;
    return (
      <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-opacity duration-500">
        {message}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      {showAlert && (
        <Alert message="تم إرسال رسالتك بنجاح! سنقوم بالرد عليك قريباً." />
      )}
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form and our team will get back to you within 24 hours. 
                Or contact us using the details below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-800 font-medium mb-1">
                        {item.details}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                  <FaFacebook className="text-xl" />
                </a>
                <a href="#" className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300">
                  <FaTwitter className="text-xl" />
                </a>
                <a href="#" className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors duration-300">
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-lg" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-700 text-center">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How long does it take to get a response?
              </h3>
              <p className="text-gray-600">
                We respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer technical support?
              </h3>
              <p className="text-gray-600">
                Yes, we provide 24/7 technical support for all our courses and platform-related issues.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I schedule a demo?
              </h3>
              <p className="text-gray-600">
                Absolutely! Contact us to schedule a personalized demo of our platform and courses.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer enterprise solutions?
              </h3>
              <p className="text-gray-600">
                Yes, we provide customized enterprise solutions for organizations of all sizes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

