import React, { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 로직 구현 예시 (여기서는 간단히 콘솔에 출력)
    console.log(`Username: ${username}, Password: ${password}`);
    // 실제로는 여기에 로그인 처리 로직을 추가해야 합니다.
  };

  const loginClick = useCallback(() => {
    navigate("/main/login");
  }, [navigate]);

  const signupClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2 className={styles.loginTitle}>로그인</h2>
        <div className={styles.formGroup}>
          <label htmlFor="username">이메일</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.inputField}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputField}
            required
          />
        </div>
        <button type="submit" className={`${styles.submitButton} ${styles.login}`} onClick={loginClick}>로그인</button>
        <button type="submit" className={`${styles.submitButton} ${styles.signup}`} onClick={signupClick}>회원가입</button>
      </form>
    </div>
  );
};

export default Login;
