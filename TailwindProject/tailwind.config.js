module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    extend: {
      spacing: {
        '66': '16.5rem',
        '80': '20rem',
        '106.5': '26.625rem',
      },
      dropShadow: {
        'product': '0 11px 36px rgba(91, 91, 91, 0.15)',
      }
    },
    colors: {
      black: '#000000',
      grey: {
        1: '#FAFAFA',
        2: '#E0E0E0',
        3: '#CED2D8',
        4: '#9EA7B4',
        5: '#5E6165',
        6: '#2A2B2E',
      },
      white: '#FFFFFF',
      green: {
        1: '#00FF66',
        2: '#00E65C',
        3: '#86F9B3'
      },
      blue: {
        1: '#302BFB'
      },
      red: {
        1: '#FF3A61',
        2: '#F99CAE'
      },
      yellow: {
        1: '#FCD200',
        2: '#FFEB89'
      }
    },

  },
  variants: {},
  plugins: [],
};
