'use client'
import React, { useState, useEffect } from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import Preloader from './components/Preloader'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Featured from './components/Featured'



export default function Home() {
  const  [loading, setLoading] = useState(true);
  useEffect(() => {
    const setLoadingTimeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);


    return () => {
      clearTimeout(setLoadingTimeoutId);
    };
  }, []);

  return (
    <>
      {loading ? <Preloader /> : 
      <main className="min-h-screen font-kanit overflow-x-hidden max-w-full">
        <Navbar/>
        <HeroSection/>
        <AboutSection/>
        <Featured/>
        <Projects/>
        <Footer/>
      </main>
      }
    </>
  )
}
