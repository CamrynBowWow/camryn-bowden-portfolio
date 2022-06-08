module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-face': {
          '0%, 100%': {
            opacity: '1',
            transform: 'rotate(0deg) scale(1)',         
          }, 
          '25%': {
            opacity: '0.7',
            transform: 'rotate(90deg) scale(0.7)',
          }, 
          '50%': {
            opacity: '0.4',
            transform: 'rotate(180deg) scale(0.5)',
          }, 
          '75%': {
            opacity: '0',
            transform: 'rotate(270deg) scale(0.3)',
          },
        },
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
        'fade-face': 'fade-face 6s linear',       
      }
    },
  },
  plugins: [],
}
