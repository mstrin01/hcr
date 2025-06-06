import React, { useState } from "react";
import { UploadCloud } from "lucide-react";
import { db, auth } from "../firebase"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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
      const response = await fetch("https://hcr-v1r6.onrender.com/upload", {
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

  const handleDownload = async () => {
    const user = auth.currentUser;
    if (!user) {
      alert("You must be logged in to save the document.");
      return;
    }

    try {
      await addDoc(collection(db, "extractedTexts"), {
        text: extractedText,
        user: user.email,
        createdAt: serverTimestamp(),
      });
      console.log("Text saved to Firestore.");
    } catch (error) {
      console.error("Error saving to Firestore:", error);
    }

    const element = document.createElement("a");
    const fileBlob = new Blob([extractedText], { type: "text/plain" });
    element.href = URL.createObjectURL(fileBlob);
    element.download = "extracted-text.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lilac to-pastel px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-4xl">
        <div className="flex flex-col items-center mb-6">
          <UploadCloud className="text-violet mb-2" size={32} />
          <h2 className="text-violet text-2xl font-bold mb-1">Upload a File</h2>
          <p className="text-sm text-indigo text-center">
            Extract text from your document
          </p>
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
            className="w-full bg-violet hover:bg-indigo text-pastel hover:text-lime font-semibold py-2 rounded-lg transition-colors"
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
            <button
              onClick={handleDownload}
              className="mt-4 bg-pastel hover:bg-lilac text-indigo font-semibold py-2 px-4 rounded-lg transition-colors block mx-auto"
            >
              Download text
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
