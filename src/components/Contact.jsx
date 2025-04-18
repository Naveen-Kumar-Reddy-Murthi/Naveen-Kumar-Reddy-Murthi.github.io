import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import CustomAlert from "./CustomAlert";

import { linkedin } from "../assets";
import { styles } from "../styles";
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
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

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
    if(!form.name || !form.message || !form.email){
      setAlert({
        show: true,
        type: 'error',
        message: 'Please fill in all details!'
      });
      return;
    }
    setLoading(true);
    
    emailjs
      .send(
        "service_ejrhu05",
        "template_1wa1a4y",
        {
          from_name: form.name,
          to_name: "Work With Naveen",
          from_email: form.email,
          to_email: "work.with.naveen.reddy@gmail.com",
          message: form.message,
        },
        "ZAJTsIRJ2KZjxFS3w"
      )
      .then(
        () => {
          setLoading(false);
          setAlert({
            show: true,
            type: 'success',
            message: 'Thank you for reaching out! I will get back to you as soon as possible.'
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setAlert({
            show: true,
            type: 'error',
            message: 'Something went wrong. Please try again later.'
          });
        }
      );
  };

  return (
    <>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
        
        <div>
          <div className='flex flex-row items-center gap-4'>
            <h3 className={styles.sectionHeadText}>Connect</h3>
            <div
              onClick={() => window.open("https://www.linkedin.com/in/naveen-kumar-reddy7/", "_blank")}
              className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={linkedin}
                alt='source code'
                className='w-full h-full object-contain'
              />
            </div>
          </div>
        </div>
        <div>
        <p className={styles.sectionSubText}>Get in touch</p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
      
      <AnimatePresence>
        {alert.show && (
          <CustomAlert
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert({ show: false, type: '', message: '' })}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
