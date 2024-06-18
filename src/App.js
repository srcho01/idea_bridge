import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLogout from './pages/MainLogout';
import MainLogin from './pages/MainLogin';
import Login from './pages/Login';
import Signup from './pages/Signup';
import WritePost from './pages/WritePost';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (title, content, email) => {
    const newPost = {
      id: posts.length + 1,
      title: title,
      content: content,
      email: email, // 작성자 이메일 추가
      createdAt: new Date().toLocaleString(), // 작성 날짜 추가
    };
    setPosts([...posts, newPost]);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainLogout posts={posts}/>} />
        </Routes>
        <Routes>
          <Route path="/main/login" element={<MainLogin posts={posts}/>} />
        </Routes>

        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Routes>
          <Route path="/post" element={<WritePost addPost={addPost}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
