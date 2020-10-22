const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        themeblue: '#7DB4E6',
        themepink: '#CF689C',
        themepurple: '#C991D8',
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '1/9': '11.1111111%',
        '2/9': '22.2222222%',
        '3/9': '33.3333333%',
        '4/9': '44.4444444%',
        '5/9': '55.5555555%',
        '6/9': '66.6666666%',
        '7/9': '77.7777777%',
        '8/9': '88.8888888%',
      },
      fontFamily: {
        themeSans: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
        themeSerif: [
          '"Crimson Text"',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
      },
      spacing: {
        72: '18rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        104: '26rem',
        112: '28rem',
        120: '30rem',
        128: '32rem',
        136: '34rem',
        144: '36rem',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
      },
      opacity: {
        10: '.1',
        20: '.2',
        30: '.3',
        40: '.4',
        50: '.5',
        60: '.6',
        70: '.7',
        80: '.8',
        90: '.9',
      },
      scale: {
        99: '.99',
        101: '1.01',
      },
      inset: {
        sm: '2px',
      },
    },
  },
  variants: {
    backgroundColor: [
      'responsive',
      'hover',
      'focus',
      'focus-visible',
      'active',
    ],
    textColor: ['responsive', 'hover', 'focus', 'focus-visible', 'active'],
    backgroundOpacity: [
      'responsive',
      'hover',
      'focus',
      'focus-visible',
      'active',
    ],
    padding: ['responsive', 'hover', 'focus', 'focus-visible', 'active'],
    margin: ['responsive', 'hover', 'focus', 'focus-visible', 'active'],
    borderRadius: ['responsive', 'hover', 'focus', 'focus-visible', 'active'],
    borderOpacity: ['responsive', 'hover', 'focus', 'focus-visible', 'active'],
    opacity: ['responsive', 'hover', 'focus'],
    inset: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    plugin(function ({ addVariant, e }) {
      addVariant('focus-visible', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(
            `focus-visible${separator}${className}`
          )}[data-focus-visible-added]`;
        });
      });
    }),
  ],
};
