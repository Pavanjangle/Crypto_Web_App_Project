import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer_container">
          <div className="footer_about">
            <img
              style={{ height: "100px", width: "100px" }}
             id="logo" src="https://i.pinimg.com/originals/86/86/f9/8686f9ea211fd545c94445c4376eb20b.jpg"
              alt=""
            />
            <h3>PJ-Crypto</h3>
            <p>Only Platform to Invest in Future</p>
          </div>
          <div className="footer_contact">
            <h3>Contact Us</h3>
            <p>Email: pjangale88@gmail.com</p>
            <p>Phone: 9130283094</p>
            <p>Address: India</p>
          </div>
          <div className="footer_follow">
            <a href="https://www.linkedin.com">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://www.instagram.com/accounts/login">
              <FaInstagram className="icon" />
            </a>
            <a href="https://www.google.com/search?q=whatsapp+login&rlz=1C1CHBD_enIN1068IN1068&oq=wattsapp+lo&aqs=chrome.1.69i57j0i10i131i433i512j0i10i433i512j0i10i131i433i512l2j0i10i512l2j5.4934j0j7&sourceid=chrome&ie=UTF-8">
              <FaWhatsapp className="icon" />
            </a>
            <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
              <FaTwitter className="icon" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023 PJ-Crypto - All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;