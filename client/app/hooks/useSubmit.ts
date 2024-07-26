'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

type Props = {
  form: HTMLFormElement;
}

export const useSubmit = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState(false);


  const submitForm = async (props: Props) => {

    // These values are set in the .env file
    const serviceId = "service_uhnoh8g"
    const templateId = "template_msi8g4l"
    const userId = "Cxiuqam0ddovJ4uSe"

    if (!serviceId || !templateId || !userId) {
      console.error('EmailJS is not configured properly.');
      return;
    }

    setLoading(true);
    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        props.form,
        userId
      );
      console.log('SUCCESS!');
      setStatus(true);
      setError(null);
    } catch (error: unknown) {
      console.log('FAILED...', error);
      setError('Failed to send the message. Please try again.');
    } finally {
      setLoading(false);
    }
  } 

  return { loading, error, status, submitForm };
};
  



