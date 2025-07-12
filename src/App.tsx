import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { MainPage } from './pages/MainPage';
import HomePage from './pages/HomePage';
import ChattingPage from './pages/ChattingPage';
import CrewPage from './pages/CrewPage';
import MyTravelPage from './pages/MyTravelPage';
import MyPage from './pages/MyPage';

function App() {
  return (
    <div className="mobile-container">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/main" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/crew" element={<MainPage />} />
          <Route path="/chatting" element={<MainPage />} />
          <Route path="/mytravel" element={<MainPage />} />
          <Route path="/my" element={<MainPage />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
