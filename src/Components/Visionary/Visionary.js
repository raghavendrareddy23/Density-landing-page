import React from "react";
import { FaLinkedin } from "react-icons/fa";
import img1 from "../../Assets/image-95@2x.png";
import img2 from "../../Assets/image-94@2x.png";
import img3 from "../../Assets/image-96@2x.png";
import styles from "./Visionary.module.css";
import BackgroundPattern from "../Pattern/BackgroungPattern";

function Visionary() {
  return (
    <div className={styles.vision}>
        <h1 className={styles.tradeHeader}>
        Meet the  
        <span className={styles.future}>Visionaries</span><br /> behind Density.
      </h1>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <BackgroundPattern />
          <div className={`${styles.topLeft} ${styles.text}`}>
            <h2 className={styles.title}>
              Aakash Neeraj
              <br /> Mittal
            </h2>
            <p className={styles.subtext}> CEO, Density</p>
          </div>
          <div className={styles.bottomLeft}>
            <a href="#linkedin" className={styles.icon}>
              <FaLinkedin />
            </a>
          </div>
          <div className={styles.bottomRight}>
            <img src={img1} alt="Img" />
          </div>
        </div>

        <div className={styles.card}>
          <BackgroundPattern />
          <div className={`${styles.topLeft} ${styles.text}`}>
            <h2 className={styles.title}>
              Bhupendra <br /> Bule
            </h2>
            <p className={styles.subtext}>CTO, Density</p>
          </div>
          <div className={styles.bottomLeft}>
            <a href="#linkedin" className={styles.icon}>
              <FaLinkedin />
            </a>
          </div>
          <div className={styles.bottomRight}>
            <img src={img2} alt="Img" />
          </div>
        </div>

        <div className={styles.card}>
          <BackgroundPattern />
          <div className={`${styles.topLeft} ${styles.text}`}>
            <h2 className={styles.title}>
              Deepak
              <br /> Vasman
            </h2>
            <p className={styles.subtext}>CBO, Density</p>
          </div>
          <div className={styles.bottomLeft}>
            <a href="#linkedin" className={styles.icon}>
              <FaLinkedin width="32px" />
            </a>
          </div>
          <div className={styles.bottomRight}>
            <img src={img3} alt="Img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visionary;
