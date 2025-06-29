/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <- penting: class-based
  content: [
    './layouts/**/*.html',
    './content/**/*.{html,md}',
    './themes/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        firacode: ['"Fira Code"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#f07f48',
        secondary: '#659fb2',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  safelist: [
  'hljs', 'language-javascript', 'language-python', 'token', 'comment', 'keyword', 'string',
  // dan class lain dari Chroma/Prism
]
}
