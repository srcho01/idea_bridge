import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <h1 className={styles.logo}>
      <span className={styles.logoText}>IDEA</span>
      <span className={styles.bridgeText}>Bridge</span>
    </h1>
  );
};

export default Logo;
