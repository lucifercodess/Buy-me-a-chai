import React from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className = "logo">
        <img src="logo-white.png" alt="" />
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>Mumbai, India</li>
          <li>ayush.dubey00004444@gmail.com</li>
          <li>+91-8668847323</li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><Link to = {'/'}>Home</Link></li>
          <li><Link to = {'/donate'}>Pay</Link></li>
          <li><Link to = {'/about'}>About</Link></li>
          <li><Link to = {'/Contact'}>contact</Link></li>
        </ul>
      </div>
      <div>
        <h4>Follow Me</h4>
        <ul>
          <li>
            <a href="https://www.instagram.com/fyndduserx/" target = "_blank" > <span className='hv'>Instagram</span> <span style={{color: 'purple'}}><FaInstagram/></span> </a>
          </li>
          <li>
            <a href="https://www.github.com/lucifercodess" target='_blank'> <span className='hv'>Github</span> <span style={{color: 'white'}}><FaGithub/></span> </a>
          </li>

        </ul>
      </div>
     
    </footer>
  )
}

export default Footer