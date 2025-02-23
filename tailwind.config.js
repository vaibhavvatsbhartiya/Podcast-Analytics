/** @type {import('tailwindcss').Config} */
    module.exports = {
      darkMode: 'class',
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            'primary': '#3490dc',
            'secondary': '#ffed4a',
            'dark': '#1a202c',
            'light': '#f7fafc',
          },
        },
      },
      plugins: [
        require('@tailwindcss/typography'),
      ],
    }
