import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';  
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <NavBar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
