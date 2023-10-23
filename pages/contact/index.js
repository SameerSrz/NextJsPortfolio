import Circles from "../../components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // const [state, handleSubmit] = useForm("https://formspree.io/f/mleynnon");

  const {state, register, handleSubmit, reset } = useForm("https://formspree.io/f/mleynnon"); // Initialize react-hook-form

  const handleFormSubmit = async (data, e) => {
    // e.preventDefault();

    if (!state.submitting) {
      try {
        // Send the form data to Formspree
        const response = await fetch("https://formspree.io/f/mleynnon", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Pass the form data as JSON
        });

        if (response.ok) {
          // Handle successful form submission
          toast("Form submitted successfully");
          // You can reset the form fields if needed
          reset();
        } else {
          // Handle Formspree submission error
          toast("Form submission failed");
        }
      } catch (error) {
        // Handle any unexpected errors
        console.error("Form submission error:", error);
        toast("An error occurred while submitting the form");
      }
    }
  };

  return (
    <div className="h-full bg-primary">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & forms */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">Connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
          action="https://formspree.io/f/mleynnon"
          method="POST"
            // onSubmit={handleFormSubmit}
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="email"
                className="input"
                name="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className="input"
              name="subject"
              value={subject}
              required
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              placeholder="message"
              className="textarea"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {/* <ValidationError prefix="Name" field="name" errors={state?.errors} /> */}
            {/* <ValidationError prefix="Email" field="email" errors={state?.errors} /> */}
            {/* Add similar validation errors for other fields */}
            <button
              type="submit" disabled={state?.submitting}
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};



export default Contact;
