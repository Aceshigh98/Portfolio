import { useState } from 'react';

type Props = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const useSubmit = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (props: Props) => {
    setLoading(true);
    try {
      const res = await fetch('https://localhost:3000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(props)
      });
      setLoading(false);
      if (!res.ok) {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred while submitting the form');
      setLoading(false);
    }
  };

  return { loading, error, submitForm };
};



