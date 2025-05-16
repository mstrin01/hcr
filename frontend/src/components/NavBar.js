import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useAuth } from "../context/AuthContext";


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const navLinkClass = (path) =>
    `text-lime hover:text-indigo font-lora block px-3 py-2 rounded-lg ${
      location.pathname === path ? "border-2 border-indigo" : ""
    }`;

  return (
    <nav className="bg-violet text-indigo p-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-left font-bold font-libre text-lime hover:text-indigo text-xl leading-tight">
          <Link to={user ? "/home" : "/"}>
            HANDWRITING<br />RECOGNITION.
          </Link>
        </div>

        
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6 text-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        
        <div className="hidden md:flex space-x-4">
          <Link to={user ? "/home" : "/"} className={navLinkClass(user ? "/home" : "/")}>
            HOME
          </Link>
          <Link to="/about" className={navLinkClass("/about")}>
            ABOUT
          </Link>
          {user ? (
            <>
              <Link to="/dashboard" className={navLinkClass("/dashboard")}>
                DASHBOARD
              </Link>
              <button onClick={handleLogout} className="text-lime hover:text-indigo font-lora">
                LOGOUT
              </button>
            </>
          ) : (
            <Link to="/login" className={navLinkClass("/login")}>
              LOGIN
            </Link>
          )}
        </div>
      </div>

      
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center text-center space-y-2">
          <Link
            to={user ? "/home" : "/"}
            className={navLinkClass(user ? "/home" : "/")}
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className={navLinkClass("/about")}
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </Link>
          {user ? (
            <>
              <Link
                to="/dashboard"
                className={navLinkClass("/dashboard")}
                onClick={() => setIsMenuOpen(false)}
              >
                DASHBOARD
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="text-lime hover:text-indigo font-lora"
              >
                LOGOUT
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className={navLinkClass("/login")}
              onClick={() => setIsMenuOpen(false)}
            >
              LOGIN
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
