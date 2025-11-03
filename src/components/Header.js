
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header(){ 
  const [dark,setDark] = React.useState(true);
  React.useEffect(()=>{
    document.documentElement.classList.toggle('light', !dark);
  },[dark]);
  const loc = useLocation();
  return (
    <header className="header container">
      <div className="logo">Ahmad Azimi</div>
      <nav className="nav-links">
        <Link to="/" className="btn">{loc.pathname === '/' ? '🏠' : 'خانه'}</Link>
        <Link to="/services" className="btn">خدمات</Link>
        <Link to="/projects" className="btn">پروژه‌ها</Link>
        <Link to="/skills" className="btn">مهارت‌ها</Link>
        <Link to="/about" className="btn">درباره</Link>
        <Link to="/contact" className="btn">تماس</Link>
        <button className="btn" onClick={()=>setDark(d=>!d)}>{dark ? '🌙' : '☀️'}</button>
      </nav>
    </header>
  )
}
