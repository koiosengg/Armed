import React from "react";
import Extinguisher from "../assets/Contact/Extinguisher.png";

function Contact() {
  return (
    <section className="contact" id="Contact">
      <div className="contact-container">
        <div className="contact-left">
          <header>
            <h2>Contact Me</h2>
            <p>
              <strong>We’d love to hear from you.</strong> Share your details
              and requirements, and our team will get back to you within 48
              hours to continue the conversation and explore the right solutions
              together.
            </p>
          </header>
          <img src={Extinguisher} alt="Fire Extinguisher" className="desktop" />
        </div>
        <form
          className="contact-form"
          action="https://formspree.io/f/xykkbnrp"
          method="POST"
        >
          <div className="contact-form-inputs">
            <div className="contact-form-inputs-container">
              <div className="contact-form-input-container">
                <label htmlFor="firstName">First name*</label>
                <input
                  id="firstName"
                  name="First name"
                  type="text"
                  placeholder="John"
                  required
                />
              </div>

              <div className="contact-form-input-container">
                <label htmlFor="lastName">Last name*</label>
                <input
                  id="lastName"
                  name="Last name"
                  type="text"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div className="contact-form-input-container">
              <label htmlFor="email">Email Id*</label>
              <input
                id="email"
                name="Email"
                type="email"
                placeholder="Enter email address"
                required
              />
            </div>

            <div className="contact-form-input-container">
              <label htmlFor="mobile">Mobile number*</label>
              <input
                id="mobile"
                name="Mobile number"
                type="tel"
                placeholder="Enter mobile number"
                required
              />
            </div>

            <div className="contact-form-input-container">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="Message" placeholder="Type here" />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
