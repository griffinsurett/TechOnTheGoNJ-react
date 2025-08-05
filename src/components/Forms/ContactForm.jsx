// src/components/ContactForm.jsx
import React from "react";
import Input from "./Input";
import { Textarea } from "./Textarea";

export default function ContactForm() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto mt-8 text-left">
      <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Schedule Your FREE Consultation
      </h4>

      <form action="https://formspree.io/f/mblkzode">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Input
            id="firstName"
            name="firstName"
            label="First Name"
            required={true}
            placeholder="Your first name"
          />

          <Input
            id="lastName"
            name="lastName"
            label="Last Name"
            required={true}
            placeholder="Your last name"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Input
            id="email"
            name="email"
            type="email"
            label="Email Address"
            required={true}
            placeholder="your.email@example.com"
          />

          <Input
            id="phone"
            name="phone"
            type="tel"
            label="Phone Number"
            required={true}
            placeholder="(732) 555-0123"
          />
        </div>

        <Input
          id="subject"
          name="subject"
          label="Subject"
          required={true}
          placeholder="Brief description of what you need help with"
          className="mb-6"
        />

        <Textarea
          id="message"
          name="message"
          label="Additional Details"
          placeholder="Tell us more about your tech challenges, what devices you have, or any specific questions..."
          className="mb-6"
        />

        {/* Hidden honeypot field for spam protection */}
        <input type="hidden" name="_gotcha" style={{ display: "none" }} />
        
        {/* Formspree will inject reCAPTCHA here automatically */}

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-primary-b-g-gradient text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center"
          >
            Schedule My FREE Consultation
          </button>
          <p className="text-sm text-gray-600 mt-3">
            We'll contact you within 24 hours to confirm your appointment
          </p>
        </div>
      </form>
    </div>
  );
}