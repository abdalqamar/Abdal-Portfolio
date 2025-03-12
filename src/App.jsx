import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import TestimonialSlider from './components/TestimonialSlider'
import Footer from './components/Footer'
import Contact from './components/Contact'
import WhatIDo from './components/WhatIDo'



function App() {

  const testimonials = [
    {
      name: 'John Doe',
      role: 'Web Developer',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      text: 'This portfolio is amazing! The design and performance are outstanding.',
    },
    {
      name: 'Jane Smith',
      role: 'UI/UX Designer',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      text: 'I love the attention to detail in this work. Absolutely fantastic!',
    },
    {
      name: 'Michael Brown',
      role: 'Software Engineer',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      text: 'Great experience working with this developer. Highly recommended!',
    },
    {
      name: 'John Doe',
      role: 'Web Developer',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      text: 'This portfolio is amazing! The design and performance are outstanding.',
    },
    {
      name: 'Jane Smith',
      role: 'UI/UX Designer',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      text: 'I love the attention to detail in this work. Absolutely fantastic!',
    },
    {
      name: 'Michael Brown',
      role: 'Software Engineer',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      text: 'Great experience working with this developer. Highly recommended!',
    },
  ];


  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhatIDo/>
      <Projects />
      <TestimonialSlider testimonials={testimonials} />
      <Contact />
      <Footer />
    </>
  )
}

export default App
