import React from "react";
import img1 from "../../Assets/Group 18145967.svg";
import img2 from "../../Assets/Group 18145968.svg";
import img3 from "../../Assets/Group 626832.svg";
import styles from "./Section.module.css";

function Section() {
  return (
    <div className={styles.container}>
      <div className={styles.borderBox}>
        <img src={img1} alt="img1" className={styles.image} />
        <p className={styles.text}>One App. Endless Possibilities</p>
      </div>
      <div className={styles.borderBox}>
        <img src={img2} alt="img2" className={styles.image} />
        <p className={styles.text}>Future of Derivative Trading.</p>
      </div>
      <div className={styles.borderBox}>
        <img src={img3} alt="img3" className={styles.image} />
        <p className={styles.text}>Is now here, for you.</p>
      </div>
    </div>
  );
}

export default Section;
