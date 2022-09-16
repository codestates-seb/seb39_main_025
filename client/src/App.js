import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle, { Layout } from './GlobalStyle';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

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
        </Routes>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
