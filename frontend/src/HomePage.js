import React from "react";
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate('/dashboard'); // Možeš napraviti zasebnu stranicu za upload
  };

  const handleViewDocuments = () => {
    navigate('/documents'); // Prikaz prethodnih dokumenata
  };

  return (
    <div className="bg-lilac font-sans py-10">
      <section className="container mx-auto p-8 bg-lilac rounded-lg">
        <h1 className="text-3xl flex items-center justify-center font-libre font-semibold text-indigo mb-4">Welcome Back!</h1>

        <p className="text-lg flex items-center justify-center  font-lora text-indigo-700 mb-8">
          You're all set! What would you like to do today?
        </p>

        {/* Options Section */}
        <div className="flex flex-col items-center space-y-6">
          <button
            onClick={handleUploadClick}
            className="bg-pastel hover:bg-indigo text-indigo hover:text-pastel px-4 py-2 rounded-lg border-2 border-indigo font-lora w-auto text-m"
          >
            UPLOAD NEW DOCUMENT
          </button>

          <button
            onClick={handleViewDocuments}
            className="bg-pastel hover:bg-indigo text-indigo hover:text-pastel px-4 py-2 rounded-lg border-2 border-indigo font-lora w-auto text-m"
          >
            VIEW MY DOCUMENTS
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
