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
        // ── Theme bridge AI-World: remap scale gray -> navy, blue -> accent tím-cyan
        //    Đổi tại 1 nguồn để toàn bộ bg-gray-*/border-gray-*/bg-blue-*/text-blue-*
        //    đồng bộ theo gradient nền, không sửa mù từng file. Hex đặc để giữ opacity modifier.
        gray: {
          50: '#f5f7ff',
          100: '#e9edfb',
          200: '#ccd3ea',
          300: '#aab2d0',
          400: '#8b93b5',
          500: '#6a7197',
          600: '#3a4063',
          700: '#272c46',
          750: '#1f243c',
          800: '#1b1f36',
          850: '#161a2e',
          900: '#0f1324',
          950: '#080b16',
        },
        blue: {
          50: '#eef0ff',
          100: '#dfe2ff',
          200: '#c6c9ff',
          300: '#bfc6ff',
          400: '#a99cff',
          500: '#9f8cff',
          600: '#8a76ff',
          700: '#7461ef',
          800: '#5d4ecb',
          900: '#43398f',
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

