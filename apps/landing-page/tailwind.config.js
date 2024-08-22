const { nextui } = require('@nextui-org/theme');
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
    '../../node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js',
  ],
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            primary: '#0070f3',
          },
        },
      },
    }),
  ],
};
