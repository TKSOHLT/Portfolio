/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    extend: {
      keyframes: {
        'float-in': {
          '0%': { transform: 'translateY(2rem)', opacity: '0' },
          '60%': { transform: 'translateY(-0.5rem)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      },
      animation: {
        'float-in': 'float-in 0.6s ease-out forwards',
        'flicker': 'flicker 1s ease-in-out infinite',
      }
    }
  },
  plugins: [],
};
