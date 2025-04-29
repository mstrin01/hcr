import React, { useState, useEffect } from "react";

function Dashboard() {
  const [file, setFile] = useState(null);
  const [extractedText, setExtractedText] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file before submitting!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setExtractedText(data.text);
      } else {
        alert("Error extracting text.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error, please try again later.");
    }

    setFile(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-lilac">
      <main className="flex-grow w-full flex flex-col items-center justify-start px-4 py-8 sm:px-6 lg:px-8">
        {/* Upload section */}
        <div className="w-full max-w-lg bg-violet p-6 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-indigo mb-4 text-center">
            Upload a File
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="file"
                name="file"
                onChange={handleFileChange}
                className="block w-full text-sm text-indigo bg-lilac border border-indigo rounded-md file:border-0 file:bg-pastel file:text-indigo file:py-2 file:px-4 file:rounded-md hover:file:bg-lime"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2 bg-pastel text-indigo rounded-md hover:bg-lime hover:text-indigo font-semibold transition duration-300"
              >
                Upload
              </button>
            </div>
          </form>
        </div>

        {/* Extracted text section */}
        {extractedText && (
          <div className="mt-6 w-full max-w-lg bg-violet p-4 rounded-lg shadow-lg text-indigo">
            <h3 className="font-semibold mb-2 text-center">Extracted Text:</h3>
            <div className="max-h-80 overflow-auto px-2">
              <p className="text-sm text-platinum whitespace-pre-wrap break-words">
                {extractedText}
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
