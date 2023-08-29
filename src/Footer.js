

import "./footer.scss";
import { Link } from "react-router-dom";
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <ul className="menuItems">
         
          <li className="menuItem">
            <Link to="/">Home</Link>
          </li>
        </ul>
        <div className="infoText">
          This is a E-Commerce project built using React and used NodeJs/Express
          to build Backend
          <h3>Made By Nilesh Pataskar</h3>
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a
              href="https://www.facebook.com/nilesh.pataskar.1"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook/>
            </a>
          </span>
          <span className="icon">
            <a
              href="https://www.instagram.com/__nilesh_pataskar__/"
              target="_blank"
              rel="noreferrer"
            >
<Instagram/>
            </a>
          </span>
          <span className="icon">
            <a href="https://github.com/Nileshpataskar" target="_blank" rel="noreferrer">
              <Github/>
            </a>
          </span>
          <span className="icon">
            <a
              href="https://www.linkedin.com/in/nilesh-pataskar-96a6441b1/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin/>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
