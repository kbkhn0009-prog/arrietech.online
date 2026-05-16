/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        arrie: {
          bg: '#0B0B0C',
          surface: '#111113',
          elevated: '#161518',
          amber: '#D6A14A',
          'amber-deep': '#C68A2B',
          graphite: '#5E6B88',
          text: '#F5F0E8',
        },
      },
    },
  },
  plugins: [],
}
