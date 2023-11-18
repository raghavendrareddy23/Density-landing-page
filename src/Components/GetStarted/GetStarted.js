import React from 'react';
import styles from './GetStarted.module.css';
import img from '../../Assets/group-1000003804.svg'

const GetStarted = () => {
  return (
    <div className={styles.landingPageChild}>
      <div className={styles.getStartedNowParent}>
        <b className={styles.getStartedNow}>Get started now.</b>
        <img className={styles.groupChild15} alt="" src={img} />
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <div className={styles.cta}>
            <button className={styles.text}>Start Trading!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
