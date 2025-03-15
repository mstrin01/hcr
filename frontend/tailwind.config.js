// tailwind.config.js
module.exports = {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}',
      './frontend/components/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          'green': '#6B705C',
          'red': '#A45A52',
          'cream': '#F3E9DC',
          'brown': '#4E342E',
          'bronze': '#A67C52',
          'beige': '#E3D5C2',
        },
        fontFamily: {
          libre: ['Libre Baskerville', 'serif'],
          lora: ['Lora', 'serif'],
        },
      },
    },
    plugins: [],
  };
  