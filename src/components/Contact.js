import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        'service_q0pue4q', // Your Service ID
        'template_zgugo9f', // Your Template ID
        templateParams,
        'd-Um2C5wR1eIkx8k5' // Your Public Key
      )
  
      .then(
        (result) => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          alert('Error sending message. Please try again later.');
          console.error('EmailJS Error:', error);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;