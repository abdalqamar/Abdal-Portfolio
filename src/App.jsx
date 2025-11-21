import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

// Home sections
import Hero from "./components/Hero";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Projects from "./components/Projects";
import TestimonialSlider from "./components/TestimonialSlider";
import HomeContact from "./components/Contact";
import CourseTemplate from "./pages/CourseTemplate";
import AboutUs from "./pages/AboutUs";
// Razorpay REQUIRED pages
import Services from "./pages/Services";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import ContactPage from "./pages/ContactUs";
import CourseDetails from "./pages/CourseDetails";

function App() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Web Developer",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      text: "This portfolio is amazing! The design and performance are outstanding.",
    },
    {
      name: "Jane Smith",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      text: "I love the attention to detail in this work. Absolutely fantastic!",
    },
    {
      name: "Michael Brown",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      text: "Great experience working with this developer. Highly recommended!",
    },
  ];

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />

      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <WhatIDo />
              <Projects />
              <TestimonialSlider testimonials={testimonials} />
              <HomeContact />
            </>
          }
        />

        {/* Razorpay Required Pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/contact" element={<HomeContact />} />
        <Route path="/courses" element={<CourseTemplate />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/about/" element={<AboutUs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
