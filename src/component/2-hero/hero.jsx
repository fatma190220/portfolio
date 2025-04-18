import React, { useEffect, useState } from 'react';
import './hero.css';
import Lottie from "lottie-react";
import lap from "../../../public/animation/lap.json"

export default function Hero() {

  return (
    <section className='flex'>
      <div className='left-div '>

        <div className='avatar-div flex'>
          <img src='/public/2-modified.png' className='avatar'></img>
          <i className="fa-solid fa-certificate"></i>
        </div>

        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Numquam, eum id natus accusamus qui sed deserunt fuga perferendis
            voluptatum, ipsa aliquam excepturi unde. Dolorem, earum.</p>


        <div className='hero-icons flex'>

        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-twitter"></i>

        </div>
        
      </div>

      <div className='right-div animation'>

      <Lottie animationData={lap} loop={true} style={{width:500}}/>

      </div>          

    </section>
  )
}
