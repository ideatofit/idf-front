/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/index.tsx',
    //components
    './src/componensts/Slide.tsx',
    './src/components/Navigation.tsx',
    './src/components/Testimonial.tsx',
    './src/components/Tools.tsx',
  ],
  theme: {
    extend: {
      colors:{
        'themeColor': 'rgba(255, 255, 255, 0.9);',
        'backgroundColor': ' #171A26',
        'borderColor': '#505050'
      }
    },
  },
  plugins: [],
}
