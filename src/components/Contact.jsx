import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocalPhone } from "react-icons/md";
import toast from "react-hot-toast";

const Contact = () => {
  const [result, setResult] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const project = formData.get("project");

    if (!name || !email || !project) {
      toast.error("Please fill all required fields!");
      return;
    }

    formData.append("access_key", "ef22ba34-a6a3-4bea-be88-5eb492186289");

    const promise = new Promise(async (resolve, reject) => {
      try {
        await new Promise((res) => setTimeout(res, 1000));

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (data.success) {
          setResult("Form submitted successfully!");
          setTimeout(() => setResult(""), 2000);
          event.target.reset();
          resolve(data.message);
        } else {
          setResult(data.message);
          setTimeout(() => setResult(""), 2000);
          reject(new Error(data.message));
        }
      } catch (error) {
        reject(error);
      }
    });

    toast.promise(promise, {
      loading: "Submitting...",
      success: "Thank you! I will contact you soon.",
      error: (err) => err.message || "Submission failed!",
    });
  };

  return (
    <div
      id="contact"
      className="flex items-center justify-center bg-gradient-to-b from-gray-100 to-white p-6 py-20"
    >
      <div className="max-w-6xl w-full shadow-md rounded-lg p-8 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Contact Me
        </h2>
        <p className="text-center text-gray-500 font-ovo">
          For Queries, Projects, or Tasks — Let’s Connect!
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {/* CONTACT DETAILS */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-200 rounded-full">
                    <IoLocationOutline className="text-2xl text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-700">
                      Location
                    </h4>
                    <p className="text-gray-500">Bokaro, Jharkhand, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-200 rounded-full">
                    <HiOutlineMail className="text-2xl text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-700">
                      Email
                    </h4>
                    <p className="text-gray-500">abdalqamar24@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-200 rounded-full">
                    <MdLocalPhone className="text-2xl text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-700">
                      Phone
                    </h4>
                    <p className="text-gray-500">+91 7091315565</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SUPPORT INFO */}
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-gray-700 mb-3">
                Queries & Tasks
              </h3>
              <p className="text-gray-600">
                Whether you need website development, UI/UX design, or you have
                a general query — feel free to contact anytime.
              </p>
              <p className="text-gray-600 mt-2">
                I usually reply within <strong>24–48 hours</strong>.
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="space-y-4">
            <form onSubmit={submitHandler}>
              <div className="grid lg:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name*"
                  className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address*"
                  className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none"
                />
              </div>

              <div className="grid lg:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none"
                />

                <select
                  name="project"
                  className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none"
                >
                  <option value="">Select Project Type *</option>
                  <option value="Portfolio Website">Portfolio Website</option>
                  <option value="Business Website">Business Website</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Frontend Development">
                    Frontend Development
                  </option>
                  <option value="Full Stack Website">
                    Full Stack Development
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="grid lg:grid-cols-2 gap-4">
                <select
                  name="budget"
                  className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none"
                >
                  <option value="">Your Budget</option>
                  <option value="5,000 - 10,000">₹5,000 - ₹10,000</option>
                  <option value="10,000 - 20,000">₹10,000 - ₹20,000</option>
                  <option value="20,000 - 40,000">₹20,000 - ₹40,000</option>
                  <option value="50,000+">₹50,000+</option>
                </select>

                <input
                  type="date"
                  name="deadline"
                  className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none"
                />
              </div>

              <textarea
                name="message"
                placeholder="Write your message..."
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none"
              ></textarea>

              <button
                type="submit"
                className="mt-4 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-300 hover:text-black transition"
              >
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
