module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',

          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fade-in 0.5s ease-in',        
      }
    },
  },
  plugins: [],
}
