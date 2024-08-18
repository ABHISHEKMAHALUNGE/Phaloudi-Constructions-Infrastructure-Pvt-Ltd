import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send data to Google Sheets via Google Forms
    fetch('https://docs.google.com/spreadsheets/d/12xaga6EtmsAHbayNvisfUyLm7rCRS-zkro0oDS1rQHw/edit?usp=sharing', {
      method: 'POST',
      body: new URLSearchParams(formData),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(response => {
      if (response.ok) {
        alert('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('There was a problem sending your message.');
      }
    });
  };

  return (
    <div className="p-8 bg-gray-100">
      <div className="flex flex-col lg:flex-row">
        {/* Google Map Embed */}
        <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.840378007141!2d-122.42194048468148!3d37.774929279759665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a8e58c4af%3A0x3b11a67cc88a37b0!2s1600%20Amphitheatre%20Parkway%2C%20Mountain%20View%2C%20CA%2094070!5e0!3m2!1sen!2sus!4v1617889097877!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
