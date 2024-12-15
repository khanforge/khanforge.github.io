export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-outline': {
          '-webkit-text-stroke': '1px #f5a3a3', /* Light pink stroke */
          'color': 'transparent',              /* Makes the fill transparent */
        },
        '.text-outline-2': {
          '-webkit-text-stroke': '2px #f5a3a3', /* Thicker stroke variant */
          'color': 'transparent',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
