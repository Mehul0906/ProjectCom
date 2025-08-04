import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-top">
          {/* About */}
          <div className="footer-column" style={{fontSize: "21px"}}>
            <h5>Swakul Sali Seva Samaj</h5>
            <p>Nashik Road, Maharashtra</p>
            <p>Working for community welfare since 1990</p>

            <h6>Connect With Us</h6>
            <div className="footer-social">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column" style={{fontSize: "21px"}}>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/event">Events</a></li>
              <li><a href="/Gallery">Gallery</a></li>
              <li><a href="/member">Members</a></li>
              <li><a href="/contribute">Donation</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column" style={{fontSize: "21px"}}> 
            <h5>Contact Information</h5>
            <p><FiMapPin />Shivaji Nagar Jail Road Nashik Road, Nashik, Maharashtra</p>
            <p><FiPhone /> +91 9372012522, <br /> +91 87889 76761</p>
            <p><FiMail /> swakilsalisevasamaj@gmail.com</p>

            <h6 style={{fontSize: "21px"}}>Newsletter</h6>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your Email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom" style={{fontSize: "21px"}}>
          <p>© 2025 Swakul Sali Seva Samaj. All rights reserved.</p>
          <p><a href="https://maapitambaraampl.com/" target="_blank" style={{ textDecoration: "none", color: "white" }}>Designed By :- Maa Pitambara Advertising & Multipurpose Work Pvt. Ltd.</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
