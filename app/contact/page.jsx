"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+90 111 111 11 11",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "gulzadevni@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Turkey",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 xl:pl-8 xl:pr-8 pl-4 pr-4 pt-24 flex justify-center items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] justify-center items-center">
          {/* Form */}
          <div className="xl:w-[50%] xl:h-[25%] order-2 xl:order-none">
            <form className="flex flex-col xl:flex-row gap-6 p-10 bg-zinc-800 rounded-xl">
              {/* Sol Taraf */}
              <div className="xl:w-1/2 flex flex-col justify-center items-start text-center xl:text-left gap-6">
                <h3 className="text-4xl text-amber-300">Let's Work Together</h3>
                <p className="text-white/60">Contact Me</p>
                <p className="text-7xl mt-4">🙋🏽‍♀️</p>
              </div>

              {/* Sağ Taraf */}
              <div className="xl:w-1/2 flex flex-col justify-center items-center">
                <ul className="flex flex-col gap-6">
                  {info.map((item, index) => (
                    <li key={index} className="flex items-center gap-7">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-amber-300 rounded-md flex items-center justify-center">
                        <p className="text-[40px] xl:text-[50px]">{item.icon}</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
