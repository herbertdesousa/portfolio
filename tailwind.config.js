module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': 'var(--primary)',
      'light-primary': 'var(--light-primary)',

      'black': 'var(--black)',
      'gray': 'var(--gray)',
      'light-gray': 'var(--light-gray)',
      'white': 'var(--white)',

      'transparent': 'rgba(255, 255, 255, 0)',
    },
    fontFamily: {
      // poppins: ['var(--font-poppins)'],
      lato: ['var(--font-lato)']
    },
    extend: {
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
