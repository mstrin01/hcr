import React, { useState } from 'react';

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

    // You can handle the file upload logic here
    console.log('File uploaded:', file);

    // Reset file input after upload
    setFile(null);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Upload a File</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md file:border-0 file:bg-indigo-100 file:text-indigo-600 file:py-2 file:px-4 file:rounded-md hover:file:bg-indigo-200"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Upload
          </button>
        </div>
      </form>

      {file && (
        <div className="mt-4 text-sm text-gray-600">
          <p><strong>Selected file:</strong> {file.name}</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
