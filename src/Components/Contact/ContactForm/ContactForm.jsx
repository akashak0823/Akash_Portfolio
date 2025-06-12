import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: null })); // Clear error on input change
  };

  const validateForm = () => {
    const formErrors = {};
    if (!formData.firstname.trim()) formErrors.firstname = 'First name is required';
    if (!formData.lastname.trim()) formErrors.lastname = 'Last name is required';

    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) formErrors.email = 'Invalid email address';
    }

    if (!formData.message.trim()) formErrors.message = 'Message is required';

    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length) {
      setErrors(formErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const params = new URLSearchParams(formData).toString();
      const url = `https://script.google.com/macros/s/AKfycbxGC7ZUl-Q3yC1lw2kdVt53q4xsU9EYscqBjcVAE8evrmd-8SAiKSXA6haMo7UKq1IIRA/exec?${params}`;

      const response = await fetch(url, {
        method: 'GET',
        mode: 'no-cors', // NOTE: this prevents reading the response but avoids CORS errors
      });

      // Since mode: no-cors, can't check response status, so assume success
      toast.success('Form submitted successfully!');
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        message: '',
      });
    } catch (error) {
      toast.error('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={handleSubmit} noValidate>
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.firstname && <span className="error">{errors.firstname}</span>}

          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.lastname && <span className="error">{errors.lastname}</span>}
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'SEND'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
