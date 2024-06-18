import React, { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Board.module.css'; // module.css 파일 import

import developer from '../data/developer';
import designer from '../data/designer';

function Board({ posts, isLoggedIn }) {
  const navigate = useNavigate();
  const newPostClick = useCallback(() => {
    navigate("/post");
  }, [navigate]);

  const [selectedTab, setSelectedTab] = useState('idea'); // 기본 탭은 'idea'

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className={styles.body}>
      <div className={styles.tabContainer}>
        <button
          className={selectedTab === 'idea' ? styles.tabButtonActive : styles.tabButton}
          onClick={() => handleTabClick('idea')}
        >
          아이디어
        </button>
        <button
          className={selectedTab === 'developer' ? styles.tabButtonActive : styles.tabButton}
          onClick={() => handleTabClick('developer')}
        >
          개발자
        </button>
        <button
          className={selectedTab === 'designer' ? styles.tabButtonActive : styles.tabButton}
          onClick={() => handleTabClick('designer')}
        >
          디자이너
        </button>
      </div>

      <div className={styles.content}>
        {selectedTab === 'idea' && (
          <div className={styles.tabContent}>
            <button className={styles.newPostButton} onClick={newPostClick}> NEW POST </button>
            {posts.length === 0 ? (
              <p>게시글이 없습니다.</p>
            ) : (
              posts.map(post => (
                <div key={post.id} className={styles.postContainer}>
                  <p className={styles.postTitle}>{post.title}</p>
                  <hr />
                  {isLoggedIn && (
                    <p className={styles.postEmail}>작성자 이메일: {post.email}</p>
                  )}
                  <p className={styles.postDate}>작성 날짜: {post.createdAt}</p>
                  <hr />
                  <p>{post.content}</p>
                </div>
              ))
            )}
          </div>
        )}

        {selectedTab === 'developer' && (
          <div className={styles.tabContent}>
            {Object.keys(developer).map(key => (
              <div key={key} className={styles.postContainer}>
                <p className={styles.postTitle}>{developer[key].name}</p>
                <p className={styles.postContent}>이메일: {developer[key].email}</p>
                <p className={styles.postContent}>기술 스택: {developer[key].tech}</p>
                <p className={styles.postContent}>한 줄 소개: {developer[key].info}</p>
              </div>
            ))}
          </div>
        )}

        {selectedTab === 'designer' && (
          <div className={styles.tabContent}>
            {Object.keys(designer).map(key => (
              <div key={key} className={styles.postContainer}>
                <p className={styles.postTitle}>{designer[key].name}</p>
                <p className={styles.postContent}>이메일: {designer[key].email}</p>
                <p className={styles.postContent}>디자인 툴: {designer[key].tool}</p>
                <p className={styles.postContent}>한 줄 소개: {designer[key].info}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Board;
