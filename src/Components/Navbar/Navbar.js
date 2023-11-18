import React from "react";
import styles from './Navbar.module.css'; 
import img from '../../Assets/Frame.svg';

function Navbar() {

  return (
    <nav className={styles.navbar}>
      <header className={styles.header}>
        <a className={styles.logo} href="/"><img src={img} alt="logo"/></a>
        <ul className={styles['main-nav']}>
          <li>
            <a href="carrers">Carrers</a>
          </li>
          <li>
            <a href="blogs">Blogs</a>
          </li>
          <li>
            <a href="leadership">LeadershipBoard</a>
          </li>
          <li>
            <a href="fees">Fees</a>
          </li>
          <li>
            <a href="trade"><button className={styles.tradeButton}>TRADE NOW</button></a>
          </li>
        </ul>
      </header>
    </nav>
  );
}

export default Navbar;
