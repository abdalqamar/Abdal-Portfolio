import React from "react";

const Services = () => {
  return (
    <div className="max-w-4xl mx-auto py-25 px-5">
      <h1 className="text-3xl font-bold mb-3">Services &amp; Pricing</h1>
      <p className="text-gray-700 mb-4">
        At <strong>StudyHub</strong>, we provide professional web design and
        development services alongside practical online courses. Below is an
        overview of our key offerings and indicative pricing in INR.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        1. Web Design &amp; Development
      </h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Service</th>
              <th className="border px-4 py-2 text-left">Description</th>
              <th className="border px-4 py-2 text-left">
                Starting From (INR)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border px-4 py-2">
                Portfolio Website Development
              </td>
              <td className="border px-4 py-2">
                Custom, responsive personal or portfolio website designed to
                showcase your work and profile.
              </td>
              <td className="border px-4 py-2 font-medium">₹8,000</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border px-4 py-2">Business Website Design</td>
              <td className="border px-4 py-2">
                Professional multi-page website for small businesses or
                startups, including basic contact and service pages.
              </td>
              <td className="border px-4 py-2 font-medium">₹12,000</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border px-4 py-2">UI/UX Design</td>
              <td className="border px-4 py-2">
                Modern UI/UX design for web or mobile apps with clean layouts
                and user-friendly flows.
              </td>
              <td className="border px-4 py-2 font-medium">₹10,000</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border px-4 py-2">Frontend Development</td>
              <td className="border px-4 py-2">
                Implementation of responsive frontend using modern technologies
                (e.g., React, Tailwind CSS).
              </td>
              <td className="border px-4 py-2 font-medium">₹9,000</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border px-4 py-2">Full-Stack Web Development</td>
              <td className="border px-4 py-2">
                End-to-end web application development including frontend and
                backend functionality.
              </td>
              <td className="border px-4 py-2 font-medium">₹18,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mb-2">2. Courses</h2>
      <p className="text-gray-700 mb-4">
        StudyHub also offers paid and free courses focused on web development,
        design, and related technologies. Course-specific pricing and details
        are displayed on the respective course pages or enrollment screens.
      </p>

      <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-1">
        <li>Fundamental web development courses.</li>
        <li>Design and UI/UX focused courses.</li>
        <li>Practical project-based learning content.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">3. Custom Requirements</h2>
      <p className="text-gray-700 mb-4">
        If you have specific requirements beyond the services listed above (such
        as custom dashboards, integrations, or advanced features), you can
        contact us to discuss a tailored solution and quote.
      </p>

      <p className="text-gray-700">
        For project discussions and custom pricing, please reach out at{" "}
        <span className="font-semibold">abdalqamar24@gmail.com</span>.
      </p>
    </div>
  );
};

export default Services;
