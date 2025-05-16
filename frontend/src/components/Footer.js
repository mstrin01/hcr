import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Footer = () => {
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center bg-violet text-indigo p-5 text-sm">
      
      <div className="flex-1 text-left font-bold font-libre text-lime hover:text-indigo mb-4 sm:mb-0">
        <Link to={user ? "/home" : "/"}>
          HANDWRITING <br /> RECOGNITION.
        </Link>
      </div>

      <div className="flex-1 text-center mb-4 sm:mb-0">
        <span className="block font-bold font-libre text-indigo">SITEMAP</span>
        <ul className="list-none p-0 m-0">
          <li>
            <Link to={user ? "/home" : "/"} className="block font-lora text-lime hover:text-indigo">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="block font-lora text-lime hover:text-indigo">
              ABOUT
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/dashboard" className="block font-lora text-lime hover:text-indigo">
                  DASHBOARD
                </Link>
              </li>
              
            </>
          ) : (
            <li>
              <Link to="/login" className="block font-lora text-lime hover:text-indigo">
                LOGIN
              </Link>
            </li>
          )}
        </ul>
      </div>

      <div className="flex-1 text-right font-bold font-libre text-lime mb-4 sm:mb-0">
        COPYRIGHT © 2025
      </div>
    </footer>
  );
};

export default Footer;
