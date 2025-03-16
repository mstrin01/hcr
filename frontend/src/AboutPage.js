import React from "react";

function AboutPage() {
  return (
    <div className="bg-platinum font-sans">
      

      {/* About Section */}
      <section className="container mx-auto p-8 mt-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-indigo mb-6">About the App</h1>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <p className="text-lg text-gray-700 mb-4">
              Our app allows users to easily upload images or documents containing handwritten data. The app then uses advanced optical character recognition (OCR) technology to extract the handwritten text and present it in a readable format. Whether you're dealing with notes, scanned documents, or other handwritten materials, our app helps you transform them into editable text.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              It's simple to use, secure, and works with a variety of file types, making it perfect for students, professionals, and anyone who needs quick and accurate text extraction from handwritten content.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src="image.jpg" alt="Handwritten Data Extraction" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default AboutPage;
