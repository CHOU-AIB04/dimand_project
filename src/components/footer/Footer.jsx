import React from 'react'
import logo from '../../assets/logo-black.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <img src={logo} alt="footer logo" />
        </div>
        <div className="footer__col">
          <ul>
            <li>BOOK A TEST RIDE</li>
            <li>DEALER LOCATOR</li>
            <li>FINANCE OFFER</li>
            <li>EXCHANGE YOUR BIKE</li>
            <li>CONTACT US</li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>FOLLOW US</h4>
          <div className="socials">
            <span className='sh'><FaFacebookF size={20} className='text-red-500'/></span>
            <span className='sh'><FaInstagram size={20} className='text-red-500'/></span>
            <span className='sh'><FaXTwitter size={20} className='text-red-500'/></span>
            <span className='sh'><FaTiktok size={20} className='text-red-500'/></span>
          </div>
        </div>
        <div className="footer__col">
          <h4>GET IN TOUCH</h4>
          <input type="text" placeholder="EMAIL" />
          <p>DESIGNED BY <span className='text-red-500 font-bold text-[25px]'>Yassine</span> </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
