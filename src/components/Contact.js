
import React from 'react';

export default function Contact(){
  const [sent,setSent] = React.useState(false);
  return (
    <div className="section container">
      <h2>تماس</h2>
      <div className="card" style={{marginTop:12,maxWidth:700}}>
        {!sent ? (
          <form onSubmit={(e)=>{e.preventDefault(); setSent(true);}} style={{display:'grid',gap:10}}>
            <input placeholder='نام شما' className="card" style={{padding:10}} />
            <input placeholder='ایمیل' className="card" style={{padding:10}} />
            <textarea placeholder='پیام شما' rows={5} className="card" style={{padding:10}} />
            <button className="btn" type="submit">ارسال پیام</button>
          </form>
        ) : (
          <div>✅ پیام شما ارسال شد. ممنون!</div>
        )}
      </div>
    </div>
  )
}
