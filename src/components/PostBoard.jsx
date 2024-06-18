import React from 'react';
import styles from './Board.module.css'; // module.css 파일 import

function PostBoard({ posts, isLoggedIn }) {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
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
    </div>
  );
}

export default PostBoard;