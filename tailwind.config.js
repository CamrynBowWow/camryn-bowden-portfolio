module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fadeOut': '0s linear 300ms',
        'fadeIn': '0s linear 0s'
      }
    },
  },
  plugins: [],
}
