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
      <main className="flex-grow flex flex-col items-center justify-center py-6">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 bg-lilac rounded-lg">
          <h1 className="text-2xl sm:text-3xl text-center font-libre font-semibold text-indigo mb-4">
            Welcome Back!
          </h1>

          <p className="text-base sm:text-lg text-center font-lora text-indigo-700 mb-6">
            You're all set! What would you like to do today?
          </p>

          <div className="flex flex-col items-center space-y-4 w-full max-w-md">
            <button
              onClick={handleUploadClick}
              className="bg-lime hover:bg-indigo text-indigo hover:text-pastel px-6 py-3 rounded-lg border-2 border-indigo font-lora w-full text-sm sm:text-base transition duration-300"
            >
              UPLOAD NEW DOCUMENT
            </button>

            <button
              onClick={handleViewDocuments}
              className="bg-lime hover:bg-indigo text-indigo hover:text-pastel px-6 py-3 rounded-lg border-2 border-indigo font-lora w-full text-sm sm:text-base transition duration-300"
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
