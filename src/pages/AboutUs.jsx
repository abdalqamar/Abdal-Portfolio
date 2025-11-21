const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center">About Us</h1>
      <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
        Empowering learners with high-quality, affordable courses designed for
        real-world skills.
      </p>

      {/* Section 1 */}
      <div className="mt-14 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg"
          className="rounded-xl shadow-md"
        />
        <div>
          <h2 className="text-3xl font-semibold">Who We Are</h2>
          <p className="mt-3 text-gray-600">
            We are an e-learning platform providing skill-based courses for
            beginners and professionals. Our mission is to make high-quality
            education accessible to everyone at an affordable price.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="mt-3 text-gray-600">
            We focus on practical training, real-world projects, and
            step-by-step guidance. Every course is created to help learners
            build strong foundations and become job-ready.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• High-quality practical lessons</li>
            <li>• Affordable learning for everyone</li>
            <li>• Hands-on projects & assignments</li>
            <li>• Beginner-friendly content</li>
          </ul>
        </div>

        <img
          src="https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg"
          className="rounded-xl shadow-md"
        />
      </div>

      {/* Section 3 */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Whether you’re starting your career or upskilling, we provide courses
          that help you build confidence and practical knowledge to succeed.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          <div className="p-6 bg-white border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">🔥 Expert Instructors</h3>
            <p className="text-gray-600 mt-2">
              Learn from industry professionals.
            </p>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">📚 Practical Lessons</h3>
            <p className="text-gray-600 mt-2">
              Hands-on projects & real examples.
            </p>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">💰 Affordable Pricing</h3>
            <p className="text-gray-600 mt-2">Quality education at low cost.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
