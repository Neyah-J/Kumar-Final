/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Scans all React files in the src folder
  theme: {
      extend: {
          colors: {
              pink: {
                  light: '#FFDEE9',
                  DEFAULT: '#FF69B4',
                  dark: '#FF1493',
              },
          },
      },
  },
  plugins: [],
};
