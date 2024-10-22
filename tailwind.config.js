const {nextui} = require('@nextui-org/theme');
// just to get tailwindcss IntelliSense
module.exports = {};
  plugins: [nextui()],
  content: [
    "./node_modules/@nextui-org/theme/dist/components/(autocomplete|avatar|breadcrumbs|button|card|dropdown|input|link|navbar|pagination|skeleton|spacer|tabs|ripple|spinner|listbox|divider|popover|scroll-shadow|menu).js"
],
