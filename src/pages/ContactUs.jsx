const ContactUs = () => {
  return (
    <div className="max-w-2xl mx-auto py-25 px-5">
      <h1 className="text-3xl font-bold mb-3">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        Have questions about our services, courses, payments, or policies? Feel
        free to reach out. We usually respond within 24–48 hours on business
        days.
      </p>

      <div className="space-y-3 text-gray-800 mb-8">
        <p>
          <span className="font-semibold">Brand Name:</span> StudyHub
        </p>
        <p>
          <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:abdalqamar24@gmail.com"
            className="text-blue-600 hover:underline"
          >
            abdalqamar24@gmail.com
          </a>
        </p>
        <p>
          <span className="font-semibold">Location:</span> India
        </p>
      </div>

      <form className="space-y-4 bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Message
          </label>
          <textarea
            rows="4"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Write your message..."
          ></textarea>
        </div>

        <button
          type="button"
          className="w-full md:w-auto bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
