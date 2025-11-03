
import React from 'react';
import { motion } from 'framer-motion';
import { site } from '../data';
import avatar from '../assets/avatar.jpg';

export default function Home(){
  return (
    <main>
      <section className="hero container">
        <div>
          <motion.h1 initial={{x:-30, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.6}} style={{fontSize:36,fontWeight:800}}>{site.name}</motion.h1>
          <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.2}} style={{marginTop:12}}>{site.intro}</motion.p>
          <div style={{marginTop:18}}>
            <a href="/projects" className="btn" style={{marginRight:8}}>مشاهده پروژه‌ها</a>
            <a href="/contact" className="btn">شروع همکاری</a>
          </div>
        </div>
        <motion.div initial={{scale:0.95,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.6}} style={{display:'flex',justifyContent:'center'}}>
          <img src={avatar} alt="avatar" className="avatar card" />
        </motion.div>
      </section>
    </main>
  )
}
