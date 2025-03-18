import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); // Dohvaća trenutnu lokaciju

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/"); // Nakon odjave ide na Landing Page
  };

  const navLinkClass = (path) =>
    `text-lime hover:text-indigo font-lora px-3 py-1 rounded-lg ${
      location.pathname === path ? "border-2 border-indigo" : ""
    }`;

  return (
    <nav className="flex justify-between items-center bg-violet text-indigo p-10">
      <div className="text-left font-bold font-libre text-lime hover:text-indigo">
        HANDWRITING <br /> RECOGNITION.
      </div>

      <div className="flex space-x-4">
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
    </nav>
  );
};

export default Navbar;
