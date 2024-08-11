// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'primary': '#1d4ed8',
          'secondary': '#3b82f6',
          'tertiary': '#2563eb',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
  