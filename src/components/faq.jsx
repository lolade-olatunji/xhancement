import React from 'react';
import Tips from "../components/tips";
import "../styles/faq.css"

function faq() {
  return <div>
      <div className="tips-head">
        <h2>10 FREE TIPS & TRICKS TO INCREASING YOUR PEN SIZE SAFELY</h2>
      </div>
      <Tips />
      <div className='f-line'>
        <img src="/images/line.png" />
      </div>
    </div>;
}

export default faq