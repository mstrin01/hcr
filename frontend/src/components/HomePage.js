import React from "react";
import { useNavigate } from "react-router-dom";
import { FilePlus, FolderOpen } from "lucide-react";

function HomePage() {
  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate("/dashboard");
  };

  const handleViewDocuments = () => {
    navigate("/documents");
  };

  return (
    <div className="bg-gradient-to-br from-lilac to-pastel min-h-screen flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-indigo mb-2">Welcome Back!</h1>
        <p className="text-indigo text-sm mb-6">
          You're all set! What would you like to do today?
        </p>

        <div className="space-y-4">
          <button
            onClick={handleUploadClick}
            className="w-full flex items-center justify-center gap-2 bg-pastel text-indigo px-5 py-3 rounded-lg hover:bg-lime transition font-semibold"
          >
            <FilePlus size={18} /> Upload New Document
          </button>

          <button
            onClick={handleViewDocuments}
            className="w-full flex items-center justify-center gap-2 bg-indigo text-white px-5 py-3 rounded-lg hover:bg-violet transition font-semibold"
          >
            <FolderOpen size={18} /> View My Documents
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
