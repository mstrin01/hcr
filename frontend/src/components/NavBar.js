import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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

  return (
    <nav className="flex justify-between items-center bg-violet text-indigo p-10">
      <div className="text-left font-bold font-libre text-lime hover:text-indigo">
        HANDWRITING <br /> RECOGNITION.
      </div>

      <div className="flex space-x-4">
        <Link to={user ? "/home" : "/"} className="text-lime hover:text-indigo font-lora">
          HOME
        </Link>
        <Link to="/about" className="text-lime hover:text-indigo font-lora">
          ABOUT
        </Link>

        {user ? (
          <>
            <Link to="/dashboard" className="text-lime hover:text-indigo font-lora">
              DASHBOARD
            </Link>
            <button onClick={handleLogout} className="text-lime hover:text-indigo font-lora">
              LOGOUT
            </button>
          </>
        ) : (
          <Link to="/login" className="text-lime hover:text-indigo font-lora">
            LOGIN
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
