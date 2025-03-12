import React from "react";
import webDevelop from '../assets/web-development.png'
import webDesign from '../assets/web-design.png'
import { motion } from "framer-motion";


const WhatIDo = () => {
  const services = [
    {
      title: "Web Design",
      description: "Creating visually appealing and user-friendly website designs.",
      icon: webDesign,
    },
    {
      title: "Web Development",
      description: "Building responsive and dynamic websites with modern tech.",
      icon: webDevelop,
    },
    {
      title: "App Development",
      description: "Developing mobile applications with seamless user experience.",
      icon: webDevelop,
    },
  ];
  return (


    <section id="services" className="py-12 ">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-500 flex items-center justify-center gap-2">
          <span className="text-black">⦿</span> What I Offer?
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 ">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1 }}
            className="bg-white p-6 rounded-lg shadow-md text-center border border-orange-200 cursor-pointer hover:shadow-2xl transition duration-300"
          >
            <div className="text-4xl mb-3 ">
              <img src={webDesign} width={150} className="mx-auto" />
            </div>
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>


  )
};

export default WhatIDo;

