import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaInstagram, FaBitcoin } from "react-icons/fa";
import {GiHamburgerMenu} from 'react-icons/gi';
const Navbar = () => {
  const [show, setshow] = useState(false);
  return (
    <nav
      className={show ? "navbar navbar_show" : "navbar"}

    >
      <div className="logo">
        <img
          src="logo-black.png"
          alt=""
          style={{ height: "170px", width: "170px", cursor: "pointer" }}
        />
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/donate"}>Pay</Link>
          </li>
          <li>
            <Link to={"/about"}>About Me</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={"/"}>
              <FaBitcoin />
            </Link>
          </li>
          <li>
            <a href="https://github.com/lucifercodess" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/fyndduserx/" target="_blank">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
      <GiHamburgerMenu className='hamburger' onClick={()=>setshow(!show)}/>
    </nav>
  );
};

export default Navbar;
