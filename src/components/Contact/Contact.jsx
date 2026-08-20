import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.includes("@") ||
      formData.message.trim().length < 10
    ) {
      alert("Please enter a valid name, email and message.");
      return;
    }

    setSent(true);

    setTimeout(() => {
      setSent(false);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 3000);
  }

  return (
    <section id="contact" className="contact-section">

      <h2>Contact Me</h2>

      <p>
        Have a project in mind? Feel free to contact me!
      </p>

      <form
        id="contact-form"
        onSubmit={handleSubmit}
      >

        <div className="form-group">
          <label htmlFor="name">Your Name</label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>


        <div className="form-group">
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>


        <div className="form-group">
          <label htmlFor="subject">Subject</label>

          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="">
              Select a topic
            </option>

            <option value="hire">
              I want to hire you
            </option>

            <option value="collab">
              I want to collaborate
            </option>

            <option value="other">
              Others
            </option>
          </select>
        </div>


        <div className="form-group">
          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>


        <button type="submit">
          {sent ? "✅ Message Sent" : "Send Message"}
        </button>

      </form>


      <div className="contact-details">

        <p>Phone: 9741806493</p>

        <p>
          Email:{" "}
          <a href="mailto:anagha.venkatesh7@gmail.com">
            anagha.venkatesh7@gmail.com
          </a>
        </p>

      </div>

    </section>
  );
}

export default Contact;