// tailwind.config.js
module.exports = {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}',
      './frontend/components/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          'lime': '#D4ED58',
          'violet': '#7158ED',
          'platinum': '#E0E0E0',
          'lilac': '#E8E0FB',
          'indigo': '#11062C',
          'pastel': '#E6F49D',
        },
        fontFamily: {
          libre: ['Libre Baskerville', 'serif'],
          lora: ['Lora', 'serif'],
        },
      },
    },
    plugins: [],
  };
  