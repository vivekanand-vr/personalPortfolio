import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Vivekanand Vernekar",
          from_email: form.email,
          to_email: "vivekvernekar21@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-white p-6 rounded-2xl'
      >
        <p className="sm:text-[18px] text-[14px] text-slate-700 uppercase tracking-wider">Get in touch</p>
        <h3 className="text-black font-dmsans font-extrabold md:text-[75px] tracking-wide sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
          <label className="flex flex-col">
            <span className="text-gray-700 font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-gray-100 py-3 px-4 text-gray-900 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-gray-700 font-medium mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-gray-100 py-3 px-4 text-gray-900 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-gray-700 font-medium mb-2">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="bg-gray-100 py-3 px-4 text-gray-900 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </label>

          <button
            type="submit"
            className="bg-black text-white py-3 px-6 rounded-md font-semibold hover:bg-gray-800 transition-all"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[500px] h-[300px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
