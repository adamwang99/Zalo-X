/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/ui/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        zalo: {
          blue: '#0068ff',
          'blue-dark': '#0052cc',
          'blue-light': '#e8f4ff',
        },
        aiw: {
          accent: '#9f8cff',
          'accent-2': '#67ddff',
          danger: '#ff8da1',
          warning: '#ffcf66',
          text: '#f8fbff',
        },
        sidebar: 'var(--color-sidebar)',
        'sidebar-hover': 'var(--color-sidebar-hover)',
      },
      fontFamily: {
        sans: ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        glass: '20px',
      },
    },
  },
  plugins: [],
};

