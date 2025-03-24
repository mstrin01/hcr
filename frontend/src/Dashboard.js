import React, { useState, useEffect } from "react";

function Dashboard() {
  const [file, setFile] = useState(null);
  const [extractedText, setExtractedText] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("Selected file:", selectedFile); // Debug log
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting file:", file); // Debug log
  
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
      console.log("Extracted text:", data.text);
  
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

  useEffect(() => {
    console.log("File state updated:", file);
  }, [file]);

  return (
    <div className="min-h-screen bg-lilac flex flex-col items-center justify-center p-10">
      <div className="w-full max-w-md bg-violet p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-indigo mb-4 text-center">
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
              className="px-4 py-2 bg-pastel text-indigo rounded-md hover:bg-lime hover:text-indigo font-semibold"
            >
              Upload
            </button>
          </div>
        </form>
      </div>

      {extractedText && (
        <div className="mt-6 w-full max-w-md bg-violet p-4 rounded-lg shadow-lg text-indigo text-center">
          <h3 className="font-semibold mb-2">Extracted Text:</h3>
          <p className="text-sm text-platinum">{extractedText}</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
