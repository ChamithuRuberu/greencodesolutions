import React from 'react';
import styles from './Navbar.module.css';

function NavBar() {
  return (
    <div>
      <div className={styles.topMainOuter}>
        <div className={styles.topMainInner}>
          <div className={styles.topLeftBar}>
            <ul>
              <li className={styles.mail}>Gmail: chamithuruberu@gmail.com</li>
              <li className={styles.contactNo}>Phone No: +94 767243647</li>
            </ul>
          </div>

          <div className={styles.topRightBar}>
            <ul>
              <li className={styles.address}>
                Address: 14/7 gangarama road, wewala, piliyandala
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.navMainOuter}>
        <div className={styles.navMainInner}>
          <img className={styles.logo} src="./assets/logo.png" alt="Logo" />
        </div>
        <div className={styles.navRightBar}>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>essentially</li>
            <li>specimen</li>
            <li>Contact</li>
            <li>Schedule Meeting</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
