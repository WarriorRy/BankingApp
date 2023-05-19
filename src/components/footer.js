import React from 'react'
import newsletter from '../pictures/Newsletter.png'
import './Footer.css'

export default function Footer(){
 return(
    <>
        <div className="footer">
           <img src={newsletter} alt="Newsletter" />
        </div>
        <p>
            Lorem ipsum dolor sit amet 
        </p>
        </>
    ) 
}