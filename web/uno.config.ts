import { defineConfig, presetIcons, presetUno, presetWebFonts } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        // You can swap these out for any existing Google fonts!
        sans: [
          { name: 'Nunito Sans', weights: ['300', '400', '500', '600', '700'] },
          {
            name: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            provider: 'none',
          },
        ],
        display: [
          {
            name: 'Montserrat',
            weights: ['300', '400', '500', '600', '700', '800', '900'],
          },
          {
            name: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            provider: 'none',
          },
        ],
      },
    }),
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#3CACE2',
        50: '#E7F5FB',
        100: '#CFEAF8',
        200: '#9ED6F0',
        300: '#6DC1E9',
        400: '#3CACE2',
        500: '#1F94CC',
        600: '#1874A0',
        700: '#115474',
        800: '#0B3447',
        900: '#04141B',
        950: '#010305',
      },
    },
    borderRadius: {
      // Input field corner radius
      input: '.25rem',
      // Button corner radius - set to '100rem' for fully rounded buttons!
      btn: '.25rem',
      // Larger buttons with more content inside
      bigbtn: '.5rem',
      // General "card" UI corner radius
      card: '.75rem',
    },
  },
});
