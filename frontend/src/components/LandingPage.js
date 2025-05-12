import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-lilac min-h-screen flex flex-col"> 
      <div className="flex flex-col sm:flex-row items-center  px-4 sm:px-10 py-10 flex-grow"> 
        <div className="sm:w-1/3 ml-8 sm:mb-0">
          <img
            src="image2.jpg"
            alt="Handwritten Data"
            className="w-full h-auto rounded-md"
          />
        </div>

        <div className="sm:w-3/5 text-left space-y-4 ml-6">
          <p className="text-lg font-lora text-indigo">
            Upload images or documents with handwritten data <br /> and let our app
            automatically extract the text <br /> using advanced recognition technology.
          </p>
          <p className="text-lg font-lora text-indigo">
            We make handwriting recognition seamless and hassle-free.
            <br /> Login to start uploading documents.
          </p>
          <a href="/login">
            <button className="bg-lime hover:bg-indigo text-indigo hover:text-pastel font-libre px-8 py-2 mt-3 rounded-lg border-2 border-indigo">
              LOGIN
            </button>
          </a>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;
