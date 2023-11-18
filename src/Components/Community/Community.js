import React from "react";
import styles from "./Community.module.css";
import vector1 from "../../Assets/Vector 1.svg";

function Community() {
  return (
    <div className={styles.community}>
      <div className={styles.container}>
        <div className={styles.box1}>
          <h1 className={styles.tradeHeader}>
            Trade Together.
            <span className={styles.future}>Thrive Together.</span>
          </h1>
          <p className={styles.tradeInfo}>
            Join the fun-filled community on our platform.
          </p>
          <div className={styles.tableWrapper}>
            <div className={styles.table}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <h1 className={styles.text1}>10,000+</h1>
                  <p className={styles.text2}>Traders</p>
                </div>
              </div>
              <img src={vector1} alt="vector" />
              {/* Repeat similar structures for the other boxes */}
              {/* Box 2 */}
              <div className={styles.box}>
                <div className={styles.content}>
                  <h1 className={styles.text1}>100 Mn+</h1>
                  <p className={styles.text2}>Daily Volume Traded</p>
                </div>
              </div>
              <img src={vector1} alt="vector" />
              {/* Box 3 */}
              <div className={styles.box}>
                <div className={styles.content}>
                  <h1 className={styles.text1}>Daily</h1>
                  <p className={styles.text2}>Trade Analysis</p>
                </div>
              </div>
              <img src={vector1} alt="vector" />
              {/* Box 4 */}
              <div className={styles.box}>
                <div className={styles.content}>
                  <h1 className={styles.text1}>Live</h1>
                  <p className={styles.text2}>Signals</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.exploreMarketsWrapper}>
            <a href="#explore">
              <button className={styles.tradeButton}>Join Community</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
