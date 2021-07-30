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
        '13px': '13px',
        '15px': '15px',
        '16px': '16px',
        '17px': '17px',
        '20px': '20px',
        '24px': '24px',
        '25px': '25px',
        '30px': '30px',
        '32px': '32px',
        '34px': '34px',
        '36px': '36px',
        '40px': '40px',
        '44px': '44px',
        '46px': '46px',
        '50px': '50px',
        '56px': '56px',
        '58px': '58px',
        '60px': '60px',
        '64px': '64px',
        '74px': '74px',
        '80px': '80px',
        '85px': '85px',
        '100px': '100px',
        '104px': '104px',
        '115px': '115px',
        '124px': '124px',
        '130px': '130px',
        '146px': '146px',
        '150px': '150px',
        '156px': '156px',
        '170px': '170px',
        '184px': '184px',
        '185px': '185px',
        '206px': '206px',
        '240px': '240px',
        '242px': '242px',
        '244px': '244px',
        '250px': '250px',
        '254px': '254px',
        '300px': '300px',
        '305px': '305px',
        '308px': '308px',
        '340px': '340px',
        '350px': '350px',
        '384px': '384px',
        '386px': '386px',
        '400px': '400px',
        '406px': '406px',
        '500px': '500px',
        '620px': '620px',
        '650px': '650px',
        '800px': '800px'
       },
      boxShadow: {
        plain: '0 0px 10px 0 rgba(0, 0, 0, 0.3), 0 4px 4px 0 rgba(0, 0, 0, 0.06)',
        plain1: '0 4px 3.5px 0px rgba(0, 0, 0, 0.25)',
        plain2: 'inset 0 2px 2px 0px rgba(0, 0, 0, 0.2)',
        plain3: '1px 1px 2px 0px rgba(0, 0, 0, 0.3)',
        plain4: '1px 2px 2px 0px rgba(0, 0, 0, 0.25)',
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
          r009edf: '#009edf',
          r3384ca: '#3384ca',
          r77a4e0: '#77a4e0'
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
          afafaf: '#afafaf',
          b2b2b2: '#b2b2b2',
          r888889: '#888889'
        },
        red: {
          notification: '#ed2f59',
          db4a4a: '#db4a4a'
        },
        orange: {
          ff7e00: '#ff7e00',
          e39e90: '#e39e90'
        },
        teal: {
          r4eb2ba: '#4eb2ba'
        },
        purple: {
          d03ab7: '#d03ab7',
          a898ee: '#a898ee'
        },
        yellow: {
          e3ba3c: '#e3ba3c'
        },
        green: {
          r7bd26a: '#7bd26a'
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
        '30px': '30px',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
