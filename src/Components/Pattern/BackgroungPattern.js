import React from 'react';
import styles from './BackgroungPattern.module.css';

function BackgroundPattern() {
  return (
    <div className={styles.container}>
      {[...Array(100)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="5"
          height="5"
          viewBox="0 0 10 10"
          fill="none"
          className={styles.vector}
          style={{
            // Adjust the position of each SVG to create a pattern
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <path
            d="M2.66119 0H17.1256C18.3444 0 19.3324 0.927187 19.3324 2.07093V15.6452C19.3324 16.789 18.3444 17.7162 17.1256 17.7162H2.66119C1.44245 17.7162 0.454458 16.789 0.454458 15.6452V2.07093C0.454458 0.927187 1.44245 0 2.66119 0Z"
            fill="#818181"
          />
        </svg>
      ))}
    </div>
  );
}

export default BackgroundPattern;
