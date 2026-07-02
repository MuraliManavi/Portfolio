import React, { useState, useEffect } from "react";

import Loader from "./components/Loader";
import Background from "./components/Background";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import ProductEcosystem from "./components/ProductEcosystem";
import Mission from "./components/Mission";
import Projects from "./components/Projects";
import Capabilities from "./components/Capabilities";
import Journey from "./components/Journey";
import Vision from "./components/Vision";
import GitHubStats from "./components/GitHubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingIcons from "./components/FloatingIcons";
import Particles from "./components/Particles";
import Certifications from "./components/Certifications";
import TechStack from "./components/TechStack";

export default function App() {

  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    const timer=setTimeout(()=>{
      setLoading(false);
    },2500);

    return ()=>clearTimeout(timer);

  },[]);

  if(loading){
    return <Loader />;
  }

  return(
    <>

      <Background />
      <FloatingIcons />
      <Particles />
      <Cursor />

      <ScrollProgress/>

      <Navbar/>

      <Hero/>

      <Education/>

      <ProductEcosystem/>

      <Mission/>

      <Projects/>

      <Capabilities/>

      <TechStack/>

      <Journey/>

      <Vision/>

      <GitHubStats/>

      <Certifications/>

      <Contact/>

      <Footer/>

    </>
  );
}