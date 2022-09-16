import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle, { Layout, Container } from './GlobalStyle';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Layout>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Container>
      </Layout>
    </div>
  );
}

export default App;
