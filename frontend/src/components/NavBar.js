import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase"; // Import Firebase auth
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup listener
  }, []);

  return (
    <nav className="flex justify-between items-center bg-violet text-indigo p-10">
      {/* Left Section */}
      <div className="text-left font-bold font-libre text-lime">
        HANDWRITING <br /> RECOGNITION.
      </div>

      {/* Right Section - Buttons */}
      <div className="flex space-x-4">
        <Link to="/" className="text-lime hover:text-platinum font-lora">HOME</Link>
        <Link to="/about" className="text-lime hover:text-platinum font-lora">ABOUT</Link>

        {user ? (
          <>
            <Link to="/dashboard" className="text-lime hover:text-platinum font-lora">DASHBOARD</Link>
            <button 
              onClick={() => signOut(auth)} 
              className="text-lime hover:text-platinum font-lora"
            >
              LOGOUT
            </button>
          </>
        ) : (
          <Link to="/login" className="text-lime hover:text-platinum font-lora">LOGIN</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
