import React from "react";
import styles from "./Trade.module.css";
import BackgroundPattern from "../Pattern/BackgroungPattern";
import img1 from "../../Assets/coinDCX.png";
import img2 from "../../Assets/Frame.svg";
import img3 from "../../Assets/Delta.png";

function Trade() {
  return (
    <div className={styles.trade}>
      <h1 className={styles.tradeHeader}>
        Trade More.
        <span className={styles.future}>Pay Less.</span>
      </h1>
      <p className={styles.tradeInfo}>Our low Fees Supercharge Your Profits</p>
      <div className={styles.cardContainer}>
        {/* Card 1 */}
        <div className={styles.card}>
          <BackgroundPattern />
          <img src={img1} alt="Card 1 Img" className={styles.cardImage} />
          <h2 className={styles.cardTitle}>0.025</h2>
          <p className={styles.cardText}>Maker Fees</p>
          <h2 className={styles.cardTitle}>0.07</h2>
          <p className={styles.cardText}>Taker Fees</p>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <BackgroundPattern />
          <img src={img2} alt="Card 2 Img" className={styles.cardImage} />
          <h2 className={styles.cardTitle}>0.02</h2>
          <p className={styles.cardText}>Maker Fees</p>
          <h2 className={styles.cardTitle}>0.04</h2>
          <p className={styles.cardText}>Taker Fees</p>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <BackgroundPattern />
          <img src={img3} alt="Card 3 Img" className={styles.cardImage} />
          <h2 className={styles.cardTitle}>0.02</h2>
          <p className={styles.cardText}>Maker Fees</p>
          <h2 className={styles.cardTitle}>0.05</h2>
          <p className={styles.cardText}>Taker Fees</p>
        </div>
      </div>
      
    </div>
  );
}

export default Trade;
