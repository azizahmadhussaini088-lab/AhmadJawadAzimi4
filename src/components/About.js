
import React from 'react';
import { motion } from 'framer-motion';
import { site } from '../data';

export default function About(){
  return (
    <div className="section container">
      <motion.div className="card" initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}}>
        <h2>درباره من</h2>
        <p style={{marginTop:8}}>{site.tagline}</p>
        <p style={{marginTop:8}}>{site.intro}</p>
      </motion.div>
    </div>
  )
}
