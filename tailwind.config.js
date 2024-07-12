/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        '@forge-purple': '#4242e0',
        '@forge-gray': '#c8d2da'
      },
      backgroundImage: {
        '@home-vector': 'url("/home-bg.svg")',
        '@question-vector': 'url("/question-bg.svg")',
        '@results-vector': 'url("/results-bg.svg")',
      },
      fontFamily: {
        '@bebas-neue': 'Bebas Neue',
        '@sora': 'Sora'
      },
      textColor: {
        '@forge-purple': '#4242e0'
      },
      outlineColor: {
        '@forge-purple': '#4242e0'
      }
    },
  },
  plugins: [],
};
