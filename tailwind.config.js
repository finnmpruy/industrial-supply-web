/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#F59E0B',
          yellowHover: '#D97706',
          dark: '#0B1120',
          navy: '#1E293B',
          grayBg: '#F8FAFC',
        }
      }
    },
  },
  plugins: [],
}