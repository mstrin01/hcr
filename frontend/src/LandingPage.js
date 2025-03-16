import React from "react";

const LandingPage = () => {
  return (
    <div className="p-5 space-y-10">
      {/* First Div */}
      <div className="bg-pastel flex flex-col sm:flex-row items-center p-5 rounded-m">
        {/* Image on the Left */}
        <div className="sm:w-1/3 mb-4 sm:mb-0">
          <img
            src="image.jpg"
            alt="Handwritten Data"
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* Text on the Right */}
        <div className="sm:w-2/3 text-left space-y-4 ml-8"> {/* Increased left margin */}
          <p className="text-lg font-lora text-indigo">
            Upload images or documents with handwritten data <br /> and let our app
            automatically extract the text <br /> using advanced recognition technology.
          </p>
          <p className="text-lg font-lora text-indigo">
            We make handwriting recognition seamless and hassle-free.
          </p>
          <button className="bg-violet text-lilac font-libre px-6 py-2 rounded-lg border-2 border-violet hover:bg-lilac hover:text-violet">
            GET STARTED
          </button>
        </div>
      </div>

      {/* Second Div */}
      <div className="flex flex-col sm:flex-row items-center bg-pastel p-5 rounded-m ">
        {/* Button on the Left */}
        <div className="sm:w-1/2 text-right mb-5 px-6 sm:mb-0">
          <button className="bg-violet text-lilac font-libre px-6 py-2 rounded-lg border-2 border-violet hover:bg-lilac hover:text-violet">
            READ ABOUT
          </button>
        </div>

        {/* Text on the Right */}
        <div className="sm:w-1/2 text-left space-y-2 ml-4"> 
          <p className="text-sm font-lora  text-violet">✓ HIGH ACCURACY</p>
          <p className="text-sm font-lora text-violet">✓ FAST AND SIMPLE</p>
          <p className="text-sm font-lora  text-violet">✓ PRIVACY SECURED</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
