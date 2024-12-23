export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tangerine': ['"Tangerine"', 'sans-serif'], // Replace with your font name
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-outline-2': {
          '-webkit-text-stroke': '2px #673ab7', /* Light pink stroke */
          'color': 'transparent',              /* Makes the fill transparent */
        },
        '.text-outline-4': {
          '-webkit-text-stroke': '4px #f5a3a3', /* Thicker stroke variant */
          'color': 'transparent',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
