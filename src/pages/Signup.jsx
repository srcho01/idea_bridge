import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 불러오기
import styles from './Signup.module.css';

const Signup = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [position, setPosition] = useState('');
  const [techStack, setTechStack] = useState('');
  const [intro, setIntro] = useState('');
  const [experience, setExperience] = useState('');
  const [designTool, setDesignTool] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // 비밀번호와 비밀번호 확인이 일치하는지 확인
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    // 회원가입 처리 로직 추가
    console.log(`Email: ${email}, Password: ${password}, Position: ${position}, Tech Stack: ${techStack}, Intro: ${intro}, Experience: ${experience}, Design Tool: ${designTool}`);
    // 실제로는 여기에 회원가입 처리 로직을 추가해야 합니다.

    // 로그인 페이지로 이동
    navigate('/main/login');
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
    // 포지션에 따라 추가 필드 초기화
    setTechStack('');
    setIntro('');
    setExperience('');
    setDesignTool('');
  };

  return (
    <div className={styles.signupContainer}>
      <form onSubmit={handleSignup} className={styles.signupForm}>
        <h2 className={styles.signupTitle}>회원가입</h2>
        <div className={styles.formGroup}>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">비밀번호 확인</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles.inputField}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="position">포지션</label>
          <select
            id="position"
            value={position}
            onChange={handlePositionChange}
            className={styles.selectField}
            required
          >
            <option value="">포지션을 선택하세요</option>
            <option value="idea">아이디어</option>
            <option value="developer">개발자</option>
            <option value="designer">디자이너</option>
          </select>
        </div>

        {/* 개발자 추가 필드 */}
        {position === 'developer' && (
          <>
            <div className={styles.formGroup}>
              <label htmlFor="techStack">기술 스택</label>
              <input
                type="text"
                id="techStack"
                value={techStack}
                onChange={(e) => setTechStack(e.target.value)}
                className={styles.inputField}
                placeholder="기술 스택을 입력하세요"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="intro">한 줄 소개</label>
              <input
                type="text"
                id="intro"
                value={intro}
                onChange={(e) => setIntro(e.target.value)}
                className={styles.inputField}
                placeholder="한 줄로 자신을 소개해주세요"
                required
              />
            </div>
          </>
        )}

        {/* 디자이너 추가 필드 */}
        {position === 'designer' && (
          <>
            <div className={styles.formGroup}>
              <label htmlFor="designTool">디자인 툴</label>
              <input
                type="text"
                id="designTool"
                value={designTool}
                onChange={(e) => setDesignTool(e.target.value)}
                className={styles.inputField}
                placeholder="주로 사용하는 디자인 툴을 입력하세요"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="intro">한 줄 소개</label>
              <input
                type="text"
                id="intro"
                value={intro}
                onChange={(e) => setIntro(e.target.value)}
                className={styles.inputField}
                placeholder="한 줄로 자신을 소개해주세요"
                required
              />
            </div>
          </>
        )}

        <button type="submit" className={styles.submitButton}>
          가입하기
        </button>
      </form>
    </div>
  );
};

export default Signup;
