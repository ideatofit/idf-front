/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/index.tsx',
    './src/pages/store/index.tsx',
    './src/pages/diets/index.tsx',
    './src/pages/diets/[slug].tsx',
    './src/pages/blogs/index.tsx',
    './src/pages/blogs/[slug].tsx',
    './src/pages/tools/index.tsx',
    './src/pages/tools/bmr.tsx',
    './src/pages/tools/onerep.tsx',
    './src/pages/tools/bodyfat.tsx',
    './src/pages/donate/index.tsx',
    './src/pages/user/index.tsx',
    //components
    './src/componensts/Slide.tsx',
    './src/components/Testimonial.tsx',
    './src/components/Tools.tsx',
    './src/components/Stories.tsx',
    './src/components/Button.tsx',
    './src/components/CategoryCard.tsx',
    './src/components/ProductsCard.tsx',
    './src/components/Checkbox.tsx',
    './src/components/UserInfoForm.tsx',
    './src/components/Recipecard.tsx',
    './src/components/Comments.tsx',
    './src/components/Login.tsx',
    //layouts
    './src/layouts/Navigation.tsx',
    './src/layouts/Footer.tsx',

  ],
  theme: {
    extend: {
      colors:{
        'borderColor': '#505050',
        'lightBorderColor': '1px solid rgba(145, 158, 171, 0.24)',
        'themeColor': 'rgba(255, 255, 255, 0.9);',
        'backgroundColor': ' #171A26',
        'MidnightOcean' : '#232631',
        'Midnight': '#252525'
      }
    },
  },
  plugins: [],
}
