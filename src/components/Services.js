
import React from 'react';
import { services } from '../data';
import { motion } from 'framer-motion';

export default function Services(){
  return (
    <div className="section container">
      <h2>خدمات</h2>
      <div className="grid-3" style={{marginTop:16}}>
        {services.map(s=> (
          <motion.article key={s.id} whileHover={{scale:1.03}} className="card">
            <h3>{s.title}</h3>
            <p style={{marginTop:8}}>{s.desc}</p>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
