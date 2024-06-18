import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal'; // 모달 컴포넌트 import
import styles from './WritePost.module.css';

const WritePost = ({ addPost }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [email, setEmail] = useState('');
  const [modalInfo, setModalInfo] = useState({ show: false, tip: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content || !email) {
      alert('제목, 내용, 이메일을 모두 입력해주세요.');
      return;
    }

    addPost(title, content, email);
    navigate('/main/login');
  };

  const handleButtonClick = (field) => {
    let tip = '';
    switch (field) {
      case 'title':
        tip = '제목은 이렇게 써보세요! \n 1. 명확하고 간결하게 : 아이디어의 핵심을 간결하게 담아보세요 \n 2. 흥미롭게 : 독자의 호기심을 자극해봐요 \n 3. 구체적으로 : 아이디어가 무엇에 관한 것인지 명확히 드러내요 \n 예시 : "소셜 미디어에서의 건강한 소통을 위한 새로운 앱 아이디어"';
        break;
      case 'email':
        tip = '작성자 이메일을 입력해주세요. \n 예: "example@example.com"';
        break;
      case 'content':
        tip = '내용은 이렇게 써보세요! \n 1. 아이디어 배경: 왜 이 아이디어가 필요한지 설명해요. \n 2. 아이디어 설명: 아이디어가 무엇인지 구체적으로 설명해요. \n 3. 문제 해결: 아이디어가 어떻게 문제를 해결할 수 있는지 설명해요. \n 4. 실행 계획: 아이디어를 어떻게 실현할 것인지 간략하게 언급해요. \n 5. 장점과 혜택: 이 아이디어가 가져올 긍정적인 영향을 강조해요.';
        break;
      default:
        break;
    }
    setModalInfo({ show: true, tip });
  };

  const closeModal = () => {
    setModalInfo({ show: false, tip: '' });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>포스트 작성</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="title">제목</label>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.inputField}
            required
          />
          <button 
            type="button" 
            className={styles.squareButton} 
            onClick={() => handleButtonClick('title')}
          > Tip </button>
        </div>

        <label htmlFor="email">작성자 이메일</label>
        <div className={styles.formGroup}>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputField}
            required
          />
          <button 
            type="button" 
            className={styles.squareButton} 
            onClick={() => handleButtonClick('email')}
          > Tip </button>
        </div>

        <label htmlFor="content">내용</label>
        <div className={styles.formGroup}>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={styles.textareaField}
            rows={6}
            required
          ></textarea>
          <button 
            type="button" 
            className={styles.squareButton} 
            onClick={() => handleButtonClick('content')}
          > Tip </button>
        </div>
        <button type="submit" className={styles.submitButton}>
          작성 완료
        </button>
      </form>
      <Modal show={modalInfo.show} handleClose={closeModal}>
        {modalInfo.tip}
      </Modal>
    </div>
  );
};

export default WritePost;
