import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle, { Layout } from './GlobalStyle';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import SingleFeedPage from './pages/SingleFeedPage';
import AlertPage from './pages/AlertPage';
import AdoptPetPage from './pages/AdoptPetPage';
import MyPage from './pages/MyPage';
import SnsUploadPage from './pages/SnsUploadPage';
import UserFeedPage from './pages/UserFeedPage';
import WeeklyRankPage from './pages/WeeklyRankPage';
import MyEditPage from './pages/MyEditPage';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const checkLoginStatus = (e) => {
    e.preventDefault();
    return setIsLogin(!isLogin);
  };

  return (
    <div>
      <GlobalStyle />
      <Nav
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        checkLoginStatus={checkLoginStatus}
      />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route
            path="/login"
            element={
              <LoginPage
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                checkLoginStatus={checkLoginStatus}
              />
            }
          />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage-edit" element={<MyEditPage />} />
          <Route path="/sns" element={<SingleFeedPage />} />
          <Route path="/sns-user/:pageUserId" element={<UserFeedPage />} />
          <Route path="/sns-weekly" element={<WeeklyRankPage />} />
          <Route path="/sns-upload" element={<SnsUploadPage />} />
          <Route path="/alert" element={<AlertPage />} />
          <Route path="/adopt-pet" element={<AdoptPetPage />} />
        </Routes>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
