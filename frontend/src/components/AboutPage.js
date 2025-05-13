function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-lilac to-pastel font-sans py-10">
      

        <div className="flex flex-col items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6 max-w-3xl w-full">
            <h2 className="text-2xl font-lora font-semibold text-indigo-700 mb-4">What is OCR?</h2>
            <p className="text-lg font-lora text-indigo-700 mb-4">
              Our app uses Optical Character Recognition (OCR) technology to extract handwritten text from images and documents. OCR allows machines to recognize and convert text from images, enabling users to quickly transform handwritten content into editable and searchable text.
            </p>
            <p className="text-lg font-lora text-indigo-700 mb-4">
              OCR is an essential tool for digitalizing handwritten notes, receipts, and other documents that are typically hard to edit. By using OCR, the app eliminates the need for manual transcription, saving you time and effort.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6 max-w-3xl w-full">
            <h2 className="text-2xl font-lora font-semibold text-indigo-700 mb-4">How Does It Work?</h2>
            <p className="text-lg font-lora text-indigo-700 mb-4">
              Simply upload your images or documents, and our app will automatically extract the text for you in a readable format. It’s that easy and fast.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6 max-w-3xl w-full">
            <h2 className="text-2xl font-lora font-semibold text-indigo-700 mb-4">Who Can Use It?</h2>
            <p className="text-lg font-lora text-indigo-700 mb-4">
              Perfect for students, professionals, and anyone who needs quick and accurate text extraction from handwritten content.
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <a href="/dashboard">
              <button className="bg-violet hover:bg-indigo text-pastel hover:text-lime px-6 py-2 rounded-lg font-semibold w-auto text-m">
                GET STARTED
              </button>
            </a>
          </div>
        </div>
 
    </div>
  );
}


export default AboutPage;