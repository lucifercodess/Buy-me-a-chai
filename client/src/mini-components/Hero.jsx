import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='hero '>
      <div className="banner">
        <h1 style={{color: "gray"}}>Hi, there</h1>
        <h2>Open to Work</h2>
        <p>Hi, Ayush this side I am an unemployed software fresher and i do commissioned works from frontend to backend and full stack, I  am open to  short term and long term gigs as well, If you find my work interesting please buy me a Chai or however you wish.</p>
        <Link to = {'/donate'} className='btn'>Pay now Boss!!</Link>
      </div>
      <div className="banner">
        <img src="pay.gif" className='img-pay' alt="" />
      </div>
    </section>
  )
}

export default Hero