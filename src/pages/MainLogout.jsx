import React, {  useCallback } from 'react';
import { useNavigate } from "react-router-dom";

import styles from "./MainLogout.module.css"
import PostBoard from "../components/PostBoard";
import Logo from '../components/Logo';

const MainLogout = ({ posts }) => {
    const navigate = useNavigate();
    const onLoginTextButtonClick = useCallback(() => {
        navigate("/login");
    }, [navigate]);
  
    return (
      <div className={styles.frame}>
        <header className={styles.header}>
          <div className={styles.headContainer}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <b className={styles.loginTextButton} onClick={onLoginTextButtonClick}> LOGIN </b>
          </div>
        </header>
        
        <PostBoard posts={posts} isLoggedIn={false}/>

      </div>
    );
};

export default MainLogout;