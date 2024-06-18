// import React, { useCallback } from 'react';
// import { useNavigate } from "react-router-dom";

// import styles from "./MainLogin.module.css"
// import Board from "../components/Board";
// import Logo from '../components/Logo';

// const MainLogin = ({ posts }) => {
//   const navigate = useNavigate();
//   const logoutClick = useCallback(() => {
//       navigate("/");
//   }, [navigate]);

//   const newPostClick = useCallback(() => {
//       navigate("/post");
//   }, [navigate]);

//   return (
//     <div className={styles.frame}>
//       <header className={styles.header}>
//         <div className={styles.headContainer}>
//           <div className={styles.logo}>
//             <Logo />
//           </div>
//           <b className={styles.loginTextButton} onClick={logoutClick}> LOGOUT </b>
//         </div>
//       </header>

//       <button className={styles.newPostButton} onClick={newPostClick}> NEW POST </button>
//       <Board posts={posts} isLoggedIn={true}/>

//     </div>
//   );
// };

// export default MainLogin;




import React, { useCallback } from 'react';
import { useNavigate } from "react-router-dom";

import styles from "./MainLogin.module.css"
import Board from "../components/Board";
import Logo from '../components/Logo';

const MainLogin = ({ posts }) => {
  const navigate = useNavigate();

  const logoutClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.frame}>
      <header className={styles.header}>
        <div className={styles.headContainer}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <b className={styles.loginTextButton} onClick={logoutClick}> LOGOUT </b>
        </div>
      </header>

      <Board posts={posts} isLoggedIn={true} />
      
    </div>
  );
};

export default MainLogin;
