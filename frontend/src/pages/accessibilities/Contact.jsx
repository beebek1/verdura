import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
            Get in <span className="text-emerald-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Have questions about our platform? Want to partner with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Send Us a Message
              </h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Organization Partnership</option>
                    <option value="technical">Technical Support</option>
                    <option value="campaign">Campaign Questions</option>
                    <option value="feedback">Platform Feedback</option>
                    <option value="press">Press/Media</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 transition-colors resize-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-4 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Contact Information
              </h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-emerald-600 pl-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                    General Inquiries
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                    info@verdu.com
                  </p>
                </div>

                <div className="border-l-4 border-emerald-600 pl-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Technical Support
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                    support@verdu.com
                  </p>
                </div>

                <div className="border-l-4 border-emerald-600 pl-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Organization Partnerships
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                    partnerships@verdu.com
                  </p>
                </div>

                <div className="border-l-4 border-emerald-600 pl-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Press & Media
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                    press@verdu.com
                  </p>
                </div>

                <div className="border-l-4 border-emerald-600 pl-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Office Hours
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>

                <div className="border-l-4 border-emerald-600 pl-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Response Time
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                    We typically respond to all inquiries within 24-48 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
            Other Ways to Connect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                For Organizations
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                If you represent an NGO or INGO interested in launching campaigns on our platform, please reach out to partnerships@verdu.com. We'll guide you through the verification process and help you get started with creating impactful environmental initiatives.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Technical Issues
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Experiencing technical difficulties with the platform? Contact support@verdu.com with details about the issue you're facing. Our technical team will work to resolve your concerns as quickly as possible.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Feedback & Suggestions
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                We're constantly working to improve Verdu. If you have suggestions for new features, improvements, or general feedback about your experience, we'd love to hear from you. Your input helps us build a better platform for everyone.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Frequently Asked Questions
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Before reaching out, you might find answers to common questions in our FAQ section. Visit our Help Center for detailed guides on using the platform, understanding your impact metrics, and participating in campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
            Our Location
          </h2>
          <p className="text-lg text-gray-600 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            Kathmandu, Bagmati Province, Nepal
          </p>
          <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
            While we operate primarily as a digital platform, we're based in Kathmandu and committed to creating environmental impact both locally and globally.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;