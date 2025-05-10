import React from "react";
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate('/dashboard');
  };

  const handleViewDocuments = () => {
    navigate('/documents');
  };

  return (
    <div className="bg-lilac font-sans flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center py-6">
        <section className="w-full max-w-xl bg-lilac rounded-lg px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-libre font-semibold text-indigo mb-4">
            Welcome Back!
          </h1>

          <p className="text-base sm:text-lg font-lora text-indigo-700 mb-6">
            You're all set! What would you like to do today?
          </p>

          <div className="flex flex-col items-center space-y-4 w-full">
            <button
              onClick={handleUploadClick}
              className="bg-lime hover:bg-indigo text-indigo hover:text-pastel px-6 py-3 rounded-lg border-2 border-indigo font-lora w-full sm:w-3/4 text-sm sm:text-base transition duration-300"
            >
              UPLOAD NEW DOCUMENT
            </button>

            <button
              onClick={handleViewDocuments}
              className="bg-lime hover:bg-indigo text-indigo hover:text-pastel px-6 py-3 rounded-lg border-2 border-indigo font-lora w-full sm:w-3/4 text-sm sm:text-base transition duration-300"
            >
              VIEW MY DOCUMENTS
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
