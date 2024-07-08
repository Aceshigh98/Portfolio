'use client';

import React, { useRef, useState } from 'react';
import { useSubmit } from '@/app/hooks/useSubmit';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const { loading, error, status, submitForm } = useSubmit();



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      submitForm({ form: form.current });
    }  
  };

  return (
    <div className="w-full h-full p-8">
      <form ref={form} onSubmit={handleSubmit}>
        <div className="mb-10 flex flex-row w-full">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="mt-1 p-2 mr-4 w-full border bg-black dark:bg-slate-300 border-gray-300 shadow-lg focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="mt-1 p-2 ml-4 w-full border bg-black dark:bg-slate-300 border-gray-300 shadow-lg focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="mb-10">
          <input
            id="subject"
            name="subject"
            placeholder="Subject"
            className="mt-1 p-2 w-full border bg-black dark:bg-slate-300 border-gray-300 shadow-lg focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="mb-10">
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows={4}
            className="mt-1 p-2 w-full border bg-black dark:bg-slate-300 border-gray-300 shadow-lg focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="mb-10 flex">
          <button
            disabled={loading}
            type="submit"
            className="w-[10%] bg-primary text-white p-2 rounded-2xl lg:w-[100px]"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
        {status && <p className="text-green-500">Message sent successfully!</p>}
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default ContactForm;

