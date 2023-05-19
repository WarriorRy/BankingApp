import React from 'react'
import './services.css'
import features from '../pictures/Features.png'
import card from '../pictures/Card.png'
import business from '../pictures/Business.png'
import section from '../pictures/section.png'
import testimonial from '../pictures/Testimonial.png'
import faq from '../pictures/FAQ.png'

export default function services(){
    return(
        <>
        
<div className="features">
    <img src={features} alt="features"/>
</div>

<div className="card">
    <img src={card} alt="card"/>
</div>

<div className="business">
    <img src={business} alt="business"/>
</div>

<div className="section">
    <img src={section} alt="section"/>
</div>

<div className="testimonial">
    <img src={testimonial} alt="testimonial"/>
</div>

<div className="faq">
    <img src={faq} alt="faq"/>
</div>


</>
)
};
       