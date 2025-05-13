import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="bg-lilac min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-lilac to-platinum opacity-30 z-0 animate-bg-gradient"></div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10 max-w-6xl w-full relative z-10">
        
        <div className="sm:w-1/2 w-full flex justify-center transform hover:scale-105 transition-transform duration-500">
          <img
            src="image2.jpg"
            alt="Handwritten Data"
            className="object-cover w-full h-full rounded-md shadow-md hover:shadow-xl"
          />
        </div>

        
        <div className="sm:w-1/2 w-full flex flex-col items-center sm:items-start text-center sm:text-left space-y-6 text-indigo animate-fade-in-up">
          <h1 className="text-4xl font-lora font-bold leading-snug">
            Handwriting Recognition<br />
            Made Effortless
          </h1>

          <p className="text-lg font-lora">
            Upload images or documents with handwritten data.<br />
            Our app extracts the text for you — quickly and seamlessly.
            <br />
            Let our technology do the work. All you need to do is log in and start uploading your documents.
          </p>

          <div className="text-center sm:text-left w-full">
            <a href="/login">
              <button className="bg-lime hover:bg-indigo text-indigo hover:text-pastel font-libre px-10 py-3 rounded-xl border-2 border-indigo transition-all duration-300 shadow hover:shadow-lg hover:scale-105">
                LOGIN
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
