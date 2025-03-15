import React from 'react';

function LandingPage() {
  return (
    <div className="bg-cream min-h-screen flex items-center justify-center px-20 py-20">
      {/* Left Column */}
      <div className="w-1/2 flex flex-col justify-center space-y-10">
        <h1 className="text-5xl text-green font-libre leading-tight">
          EFFORTLESS <br /> HANDWRITING <br /> RECOGNITION
        </h1>

        {/* Login Form */}
        <div className="bg-red p-8 rounded-lg shadow-md w-96 border-2 border-brown">
          <h2 className="text-brown font-lora font-semibold text-dark-brown mb-4 flex items-center justify-center text-2xl">LOGIN</h2>
          <form>
            <input
              type="username"
              placeholder="Username"
              className="w-full p-3 mb-4 border rounded-lg bg-cream text-brown focus:outline-none focus:ring-2 focus:ring-brown"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border rounded-lg bg-cream text-brown focus:outline-none focus:ring-2 focus:ring-brown"
            />
            <div className="flex justify-center mt-6">
            <button className="bg-green text-cream px-6 py-2 rounded-lg text-lg font-lora shadow-md hover:bg-brown">
              GET STARTED
            </button>
          </div>
          </form>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-1/2 flex flex-col justify-center space-y-10 px-20">
        <div className="bg-beige p-6 text-brown rounded-lg shadow-md ">
          <p className="text-lg font-lora">Upload images or documents with handwritten data and let our app automatically extract the text using advanced recognition technology.
          </p>
        </div>
        <div className="bg-beige p-6 text-brown rounded-lg shadow-md  ">
          <p className="text-lg font-lora flex items-center justify-center">✓ HIGH ACCURACY <br/>
                                                                  ✓ FAST AND SIMPLE <br/>
                                                                  ✓ PRIVACY SECURED</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
