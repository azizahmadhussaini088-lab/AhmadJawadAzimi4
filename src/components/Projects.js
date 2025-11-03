
import React from 'react';
import { projects } from '../data';
import { motion } from 'framer-motion';

export default function Projects(){
  return (
    <div className="section container">
      <h2>پروژه‌ها</h2>
      <div className="grid-3" style={{marginTop:16}}>
        {projects.map(p=> (
          <motion.div key={p.id} whileHover={{y:-6}} className="project-card card">
            <h3>{p.title}</h3>
            <p style={{marginTop:8}}>{p.desc}</p>
            <div style={{marginTop:12}}><a className="small" href="#">مشاهده جزییات</a></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
