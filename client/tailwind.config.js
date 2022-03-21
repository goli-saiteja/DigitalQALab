module.exports = {
  content: [
    './public/**/*.html',
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['Helvetica Neue']
    },
    extend: {
      colors: {
        'theme-gray': '#fafafa',
        'theme-black': '#231F20',
        'theme-red': '#C8102E',
      },
      gridTemplateColumns: {
        template: '300px auto',
      },
      gridTemplateTree: {
        template: 'auto 300px',
      }
    },
  },
  plugins: [
  ]
}