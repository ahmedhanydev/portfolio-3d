import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { BsWhatsapp } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

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

    e.preventDefault();

    emailjs
      .sendForm(
        "service_9iqqd48",
        "template_tfppqop",
        formRef.current,
        "L0pxnfcxjn1VwRpwd"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
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
        className="flex-[0.75] border-2 border-gray-800 bg-transparent dark:bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className="flex justify-center flex-col lg:flex-row gap-10  mt-3">
          <a
            href="https://www.linkedin.com/in/ahemd-hany-9bb233214"
            target="_blank"
          >
            <article
              className="flex flex-col justify-center py-4 px-10   rounded "
              style={{ backgroundColor: "#0e76a8 " }}
            >
              <div
                className="flex justify-between xs:justify-center items-center
              "
              >
                <GrLinkedinOption className="me-2" />
                <h4>LinkedIn</h4>
              </div>
            </article>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=01033151009"
            target="_blank"
          >
            <article
              className="flex flex-col justify-center lg:p-4 p-4  rounded "
              style={{ backgroundColor: "#075E54" }}
            >
              <div
                className="flex justify-between xs:justify-center items-center
              "
              >
                <BsWhatsapp className="me-2" />
                {/* <h4>WhatsApp</h4> */}
                <h5>+201033151009</h5>
              </div>
            </article>
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-gray-700 dark:text-white font-medium mb-4">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="What's your good name?"
              className="bg-transparent  border-gray-500 border-2 dark:bg-tertiary  py-4 px-6 placeholder:text-secondary text-gray-600 dark:text-white rounded-lg outline-none  font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-gray-700 dark:text-white font-medium mb-4">
              Your email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="What's your web address?"
              className="bg-transparent  border-gray-500 border-2 dark:bg-tertiary  py-4 px-6 placeholder:text-secondary text-gray-600 dark:text-white rounded-lg outline-none  font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-gray-700 dark:text-white font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="What you want to say?"
              className="bg-transparent  border-gray-500 border-2 dark:bg-tertiary py-4 px-6 placeholder:text-secondary text-gray-600 dark:text-white rounded-lg outline-none  font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto   md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
