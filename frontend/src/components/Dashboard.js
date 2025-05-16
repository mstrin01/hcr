import React, { useState } from "react";
import { UploadCloud } from "lucide-react";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lilac to-pastel px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <UploadCloud className="text-violet mb-2" size={32} />
          <h2 className="text-violet text-2xl font-bold mb-1">Upload a File</h2>
          <p className="text-sm text-indigo text-center">Extract text from your document</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-indigo border border-platinum rounded-lg file:bg-pastel file:text-indigo file:border-none file:py-2 file:px-4 file:rounded-lg hover:file:bg-lime transition"
          />

          <button
            type="submit"
            className="w-full bg-violet hover:bg-indigo text-pastel hover:text-lime  font-semibold py-2 rounded-lg  transition-colors"
          >
            Upload
          </button>
        </form>

        {extractedText && (
          <div className="mt-6 bg-violet p-4 rounded-lg shadow text-indigo max-h-80 overflow-auto">
            <h3 className="font-semibold mb-2 text-center">Extracted Text:</h3>
            <p className="text-sm text-platinum whitespace-pre-wrap break-words px-1">
              {extractedText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
