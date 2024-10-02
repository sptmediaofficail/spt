const {nextui} = require('@nextui-org/theme');
// just to get tailwindcss IntelliSense
module.exports = {};
  plugins: [nextui()],
  content: [
    "./node_modules/@nextui-org/theme/dist/components/(autocomplete|button|card|input|link|navbar|spacer|tabs|ripple|spinner|listbox|divider|popover|scroll-shadow).js"
],
