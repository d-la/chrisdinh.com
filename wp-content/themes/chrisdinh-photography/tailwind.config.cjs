// https://tailwindcss.com/docs/configuration
module.exports = {
  content: [
    './index.php',
    './app/**/*.php',
    './resources/**/*.{php,vue,js}'
  ],
  theme: {
    extend: {
      colors: {}, // Extend Tailwind's default colors,
      screens: {
        sm: '320px',
        md: '768px',
        lg: '1024px',
        xl: '1440px'
      }
    },
  },
  plugins: [],
};
