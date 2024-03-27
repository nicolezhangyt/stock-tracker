/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      0.5: '0.5px',
      1: '1px',
      2: '2px',
    },
    extend: {
      colors: {
        primary: '#111827', 
        secondary: '#4b5563',
        hoverBright:'#3b82f6',
        hoverDark:'#1f2937'
      },
    },
  },
  plugins: [],
};
