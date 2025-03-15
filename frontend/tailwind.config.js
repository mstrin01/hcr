// tailwind.config.js
module.exports = {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}',
      './frontend/components/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          'olive-green': '#6B705C',
          'oxidized-red': '#A45A52',
          'cream': '#F3E9DC',
          'dark-brown': '#4E342E',
          'antique-bronze': '#A67C52',
          'parchment-beige': '#E3D5C2',
        },
        fontFamily: {
          libre: ['Libre Baskerville', 'serif'],
          lora: ['Lora', 'serif'],
        },
      },
    },
    plugins: [],
  };
  