'use client';

import React, { useState } from 'react';
import { useSubmit } from '../../../hooks/useSubmit';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { loading, error, submitForm } = useSubmit();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formData);
  };

  return (
    <div className="w-full h-full p-8">
      <form onSubmit={handleSubmit}>
        <div className="mb-10 flex flex-row w-full">
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="mt-1 p-2 mr-4 w-full border bg-black border-gray-300 shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="mt-1 p-2 ml-4 w-full border bg-black border-gray-300 shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="mb-10">
          <input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="mt-1 p-2 w-full border bg-black border-gray-300 shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="mb-10">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows={4}
            className="mt-1 p-2 w-full border bg-black border-gray-300 shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="mb-10 flex">
          <button
            disabled={loading}
            type="submit"
            className="w-[10%] bg-primary text-white p-2 rounded-2xl lg:w-[100px]"
          >
            Send
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
