import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img id="logo" src={assets.logo} alt="" />
          <p>
            Hungry for more? Explore our FAQs for ordering tips, delivery
            details, and our commitment to fresh, delicious food. We&apos;re
            happy to answer any questions you may have!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>
              <a
                href="https://food-delivery-website-admin-msgk.onrender.com"
                target="_blank"
                rel="noreferrer"
              >
                Admin
              </a>
            </li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>4242 4242 4242 4242</li>
            <li>akshaychaudhari.contact@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Nyahari.tech - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
