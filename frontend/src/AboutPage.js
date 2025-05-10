import React from "react";

function AboutPage() {
  return (
    <div className="bg-lilac font-sans py-10">
      
      
      <section className="container mx-auto p-8 mt-8 bg-lilac rounded-lg">
        <h1 className="text-3xl font-libre font-semibold text-indigo mb-0">What Can I Do With This App? </h1>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <p className="text-lg font-lora text-indigo-700 mb-4">
              Our app allows users to easily upload images or documents containing handwritten data. The app then uses advanced optical character recognition (OCR) technology to extract the handwritten text and present it in a readable format. Whether you're dealing with notes, scanned documents, or other handwritten materials, our app helps you transform them into editable text.
            </p>
            <p className="text-lg font-lora text-indigo-700 mb-4">
              It's simple to use, secure, and works with a variety of file types, making it perfect for students, professionals, and anyone who needs quick and accurate text extraction from handwritten content.
            </p>
            
            
            <div className="flex justify-center mt-4">
              <a href="/dashboard">
                <button className="bg-pastel hover:bg-indigo text-indigo hover:text-pastel px-2 py-1 rounded-lg border-2 border-indigo font-lora w-auto text-m">
                  GET STARTED
                </button>
              </a>
            </div>
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
