import React from "react";
import styles from "./Hero.module.css";
import leftImg from "../../Assets/leftImg.png";
import middleImg from "../../Assets/middleImg.png";
import rightImg from "../../Assets/rightImg.png";
import vector1 from '../../Assets/Vector 1.svg';

function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.tradeHeader}>
        It’s time to trade,
        <br />
        the <span className={styles.future}>future.</span>
      </h1>
      <p className={styles.tradeInfo}>
        Trade BTC, ETH Futures with 125x leverage and earn rewards.
      </p>
      <div className={styles.backgroundContainer}>
        <div className={styles.imageWrapper}>
          <img src={leftImg} alt="Left-Img" className={styles.leftImg} />
          <img src={middleImg} alt="Middle-Img" className={styles.middleImg} />
          <img src={rightImg} alt="Right-Img" className={styles.rightImg} />
        </div>
      </div>
      <div className={styles.tableWrapper}>
        <div className={styles.table}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h1 className={styles.text1}>00%</h1>
              <p className={styles.text2}>Conversion Fee</p>
            </div>
          </div>
          <img src={vector1} alt="vector" />
          {/* Repeat similar structures for the other boxes */}
          {/* Box 2 */}
          <div className={styles.box}>
            <div className={styles.content}>
              <h1 className={styles.text1}>500 Mn+</h1>
              <p className={styles.text2}>Lifetime Volume Traded</p>
            </div>
          </div>
          <img src={vector1} alt="vector" />
          {/* Box 3 */}
          <div className={styles.box}>
            <div className={styles.content}>
              <h1 className={styles.text1}>250+</h1>
              <p className={styles.text2}>Total Tradable Pairs</p>
            </div>
          </div>
          <img src={vector1} alt="vector" />
          {/* Box 4 */}
          <div className={styles.box}>
            <div className={styles.content}>
              <h1 className={styles.text1}>15,000+</h1>
              <p className={styles.text2}>Traders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
