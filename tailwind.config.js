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
        '2px': '2px',
        '4px': '4px',
        '6px': '6px',
        '8px': '8px',
        '10px': '10px',
        '15px': '15px',
        '16px': '16px',
        '20px': '20px',
        '24px': '24px',
        '30px': '30px',
        '32px': '32px',
        '34px': '34px',
        '36px': '36px',
        '40px': '40px',
        '46px': '46px',
        '50px': '50px',
        '58px': '58px',
        '60px': '60px',
        '64px': '64px',
        '100px': '100px',
        '104px': '104px',
        '130px': '130px',
        '146px': '146px',
        '150px': '150px',
        '156px': '156px',
        '170px': '170px',
        '185px': '185px',
        '240px': '240px',
        '250px': '250px',
        '300px': '300px',
        '308px': '308px',
        '350px': '350px',
        '400px': '400px',
        '500px': '500px',
        '650px': '650px',
        '800px': '800px'
       },
      boxShadow: {
        plain: '0 0px 10px 0 rgba(0, 0, 0, 0.3), 0 4px 4px 0 rgba(0, 0, 0, 0.06)',
        plain1: '0 4px 3.5px 0px rgba(0, 0, 0, 0.25)',
        plain2: 'inset 0 2px 2px 0px rgba(0, 0, 0, 0.2)',
        glow: '0 0 3px 2px rgba(0, 0, 0, 0.1)',
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
          lightGradLight: '#d9edff',
          cardGradLight: '#cef6ff',
          cardGradDark: '#379aff',
          r2087f0: '#2087f0',
          r009edf: '#009edf'
        },
        gray: {
          text: '#393e41',
          subNavbar: '#616161',
          r8f8f8f: '#8f8f8f',
          d2d2d2: '#d2d2d2',
          ececec: '#ececec',
          a7a7a7: '#a7a7a7',
          f9f9f9: '#f9f9f9',
          f6f6f6: '#f6f6f6',
          fbfbfb: '#fbfbfb',
          d5d5d5: '#d5d5d5',
          r667177: '#667177',
          afafaf: '#afafaf'
        },
        red: {
          notification: '#ed2f59'
        },
        orange: {
          ff7e00: '#ff7e00',
        }
      },
      fontFamily: {
        spoqa: ['Spoqa Han Sans Neo'],
        roboto: ['Roboto']
      },
      fontSize: {
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
