import React, { useState } from "react";

function Dashboard() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file before submitting!");
      return;
    }

    console.log("File uploaded:", file);
    setFile(null);
  };

  return (
    <div className="min-h-screen bg-lilac flex items-center justify-center p-10">
      <div className="w-full max-w-md bg-violet p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-indigo mb-4 text-center">
          Upload a File
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="file"
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

        {file && (
          <div className="mt-4 text-sm text-lilac text-center">
            <p><strong>Selected file:</strong> {file.name}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
