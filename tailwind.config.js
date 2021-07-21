module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        112: '28rem',
        124: '32rem',
        'default': '1250px',
        1920: '1920px',
        '4px': '4px',
        '10px': '10px',
        '20px': '20px',
        '34px': '34px',
        '40px': '40px',
        '60px': '60px',
        '100px': '100px'
       },
      boxShadow: {
        plain: '0 0px 10px 0 rgba(0, 0, 0, 0.3), 0 4px 4px 0 rgba(0, 0, 0, 0.06)'
      },
      screens: {
        'limit': '1250px',
        'limit1920': '1920px'
      },
      colors: {
        blue: {
          banner: '#195ea9',
          gradLight: '#2087f0',
          gradDark: '#1873cf',
          darkGradLight: '#0a50a8',
          darkGradDark: '#00478f',
          highlight: '#1e66a0',
          lightGradLight: '#d9edff'
        },
        gray: {
          text: '#393e41',
          subNavbar: '#616161'
        },
        red: {
          notification: '#ed2f59'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
