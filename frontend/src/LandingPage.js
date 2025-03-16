import React from "react";

const LandingPage = () => {
  return (
    <div className="p-5 space-y-10">
      {/* First Div */}
      <div className="bg-pastel flex flex-col sm:flex-row items-center p-5 rounded-lg shadow-lg">
        {/* Image on the Left */}
        <div className="sm:w-1/3 mb-4 sm:mb-0">
          <img
            src="image.jpg"
            alt="Handwritten Data"
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* Text on the Right */}
        <div className="sm:w-2/3 text-left space-y-4 ml-4">
          <p className="text-lg font-lora font-semibold text-indigo">
            Upload images or documents with handwritten data <br/> and let our app
            automatically extract the text <br/> using advanced recognition technology.
          </p>
          <p className="text-m font-lora text-indigo">
            We make handwriting recognition seamless and hassle-free.
          </p>
          <button className="bg-violet text-lilac font-libre px-6 py-2 rounded-lg hover:bg-lilac hover:text-violet ">
            GET STARTED
          </button>
        </div>
      </div>

      {/* Second Div */}
      <div className="flex flex-col sm:flex-row items-center bg-[#E0E0E0] p-5 rounded-lg shadow-lg">
        {/* Button on the Left */}
        <div className="sm:w-1/2 text-left mb-4 sm:mb-0">
          <button className="bg-[#7158ED] text-white px-6 py-2 rounded-lg hover:bg-[#A45A52]">
            READ ABOUT
          </button>
        </div>

        {/* Text on the Right */}
        <div className="sm:w-1/2 text-left space-y-2">
          <p className="text-sm text-[#11062C]">✓ HIGH ACCURACY</p>
          <p className="text-sm text-[#11062C]">✓ FAST AND SIMPLE</p>
          <p className="text-sm text-[#11062C]">✓ PRIVACY SECURED</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
