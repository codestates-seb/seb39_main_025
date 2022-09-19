import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle, { Layout } from './GlobalStyle';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import SingleFeedPage from './pages/SingleFeedPage';
import AlertPage from './pages/AlertPage';
import StrayPetPage from './pages/StrayPetPage';
import MyPage from './pages/MyPage';
import SnsUploadPage from './pages/SnsUploadPage';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/sns" element={<SingleFeedPage />} />
          <Route path="/sns-upload" element={<SnsUploadPage />} />
          <Route path="/alert" element={<AlertPage />} />
          <Route path="/stray-pet" element={<StrayPetPage />} />
        </Routes>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
