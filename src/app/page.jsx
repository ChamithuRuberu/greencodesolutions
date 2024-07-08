import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const MainSection = () => {
  return (
    <div className={styles.mainOuter}>
      <div className={styles.sliderInner}>
        <div className={`${styles.mainText} ${styles.slider}`}>
          <div className={styles.mainBtn}>
            <Link href="/security/">
              <div className={styles.getInTouch}>
                <div className={styles.getText}>Get In Touch</div>
              </div>
            </Link>
            <div style={{ margin: '30px' }}></div>
            <Link href="/security/">
              <div className={styles.learnMore}>
                <div className={styles.learnMoreTxt}>Learn More</div>
              </div>
            </Link>
          </div>
          <br />
          <p>
            Where does it Lorem
            <br />
            come from?
          </p>
          <div className={styles.subText}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
          </div>
        </div>
        <div className={styles.slider}>
          <div className={styles.slide}><img
            className={styles.mainImg}
            src="https://www.tenancydepositscheme.com/image_resize/w754/h776/2023/01/man-in-chair-8.png"
            alt="Slider Image"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
