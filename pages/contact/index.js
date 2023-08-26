import Circles from "../../components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("first")
    const formData = {
      name,
      email,
      subject,
      message,
    };

    try {
      const response = await fetch('/api/hello', { // Use the correct API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(response)
    
      if (response.ok) {
        const data = await response.json();
        // Handle success, show a success message or perform other actions
        toast('mail has been sent successfully');

        console.log('Success:', data.message);
      } else {
        // Handle error, show an error message or perform other actions
        toast('Failed to send mail');

        console.log('Error:', response.statusText);
      }
    } catch (error) {
      // Handle fetch error
      console.error('Fetch Error:', error);
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
            Let's <span className="text-accent">Connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className="input"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              placeholder="message"
              className="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
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
