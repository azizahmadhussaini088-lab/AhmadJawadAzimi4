
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AnimatedRoutes(){
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<PageWrapper><Home/></PageWrapper>} />
        <Route path='/services' element={<PageWrapper><Services/></PageWrapper>} />
        <Route path='/projects' element={<PageWrapper><Projects/></PageWrapper>} />
        <Route path='/skills' element={<PageWrapper><Skills/></PageWrapper>} />
        <Route path='/about' element={<PageWrapper><About/></PageWrapper>} />
        <Route path='/contact' element={<PageWrapper><Contact/></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

function PageWrapper({children}){
  return <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:0.35}}>{children}</motion.div>
}

export default function App(){
  return (
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column'}}>
      <Header/>
      <AnimatedRoutes/>
      <Footer/>
    </div>
  )
}
