import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocalPhone } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";


const Contact = () => {

  const [result, setResult] = useState('');

  const submitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();

    if (!name || !email) {
      toast.error('All fields are required!');
      return;
    }

    formData.append('access_key', 'ef22ba34-a6a3-4bea-be88-5eb492186289');

    
    const promise = new Promise(async (resolve, reject) => {
      try {
        await new Promise((res) => setTimeout(res, 1000));

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();

        if (data.success) {
          setResult('Form submitted successfully!');
          setTimeout(() => setResult(''), 2000);
          event.target.reset();
          resolve(data.message);
        } else {
          setResult(data.message);
          setTimeout(() => setResult(''), 2000);
          reject(new Error(data.message));
        }
      } catch (error) {
        reject(error);
      }
    });

    toast.promise(promise, {
      loading: 'Submitting...', 
      success: 'Form submitted successfully!',
      error: (err) => err.message || 'Form submission failed!',
    });
  };



  return (
    <div id="contact" className="flex items-center justify-center bg-gradient-to-b from-gray-100 to-white p-6">
      <div className="max-w-5xl w-full shadow-md rounded-lg p-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Contact Me
        </h2>
        <p className="text-center text-gray-400 font-ovo">Let's Talk About Ideas</p>

        <div className="grid md:grid-cols-2 gap-10 mt-8">
          {/* Contact Info Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-200 rounded-full">
                <span className="text-gray-700"><IoLocationOutline className="text-2xl" /></span>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-700 ">Address</h4>
                <p className="text-gray-500">Bokaro, Jharkhand, India</p>
              </div>
            </div>
 
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-200 rounded-full">
                <span className="text-gray-700"><HiOutlineMail className="text-2xl" /></span>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-700">Email</h4>
                <p className="text-gray-500">abdalqamar10@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-200 rounded-full">
                <span className="text-gray-700"><MdLocalPhone className="text-2xl" /></span>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-700">Phone</h4>
                <p className="text-gray-500">+91 7091315565</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="space-y-4">
            <form onSubmit={submitHandler}>
              <div className="grid lg:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />

              <button className="mt-4 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-300 hover:text-black  transition">
                Send Message
              </button>

              {result && (
                <div className="mt-4 text-green-700 bg-green-100 border border-green-400 px-4 py-2 rounded">
                  {result}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
