import React from "react";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagram } from 'react-icons/fa';
import styles from "./Footer.module.css";
import logo from "../../Assets/Frame.svg";

function Footer() {
  return (
    <div>
      <div className={styles.footer}>
        <img className={styles.logo} src={logo} alt="Company Logo" />
        <div className={styles.footerContent}>
          <a href="#fees" className={`${styles.link} ${styles.footerItem}`}>
            Fees
          </a>
          <a href="#blog" className={`${styles.link} ${styles.footerItem}`}>
            Blog
          </a>
          <a
            href="#leaderboard"
            className={`${styles.link} ${styles.footerItem}`}
          >
            Leaderboard
          </a>
          <a href="#contact" className={`${styles.link} ${styles.footerItem}`}>
            Contact Us
          </a>
          <a href="#careers" className={`${styles.link} ${styles.footerItem}`}>
            Careers
          </a>
          <a href="#privacy" className={`${styles.link} ${styles.footerItem}`}>
            Privacy Policy
          </a>
        </div>
        <div className={styles.lremIpsumOd}>
          {`Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde. `}
        </div>
        <div className={styles.socialIcons}>
          <a href="#facebook" className={styles.icon}>
            <FaFacebookSquare />
          </a>
          <a href="#twitter" className={styles.icon}>
            <FaTwitterSquare />
          </a>
          <a href="#linkedin" className={styles.icon}>
            <FaLinkedin />
          </a>
          <a href="#instagram" className={styles.icon}>
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
