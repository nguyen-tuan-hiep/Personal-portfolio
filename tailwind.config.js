module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700', // Highlight color
        backgroundDark: '#1f1f1f', // Dark background color
        textDark: '#f5f5f5', // Light text color
        cardBg: '#2b2b2b', // Card background color
        slate600: "#374151"
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        lg: '0.75rem',
      },
    },
  },
  plugins: [],
};
