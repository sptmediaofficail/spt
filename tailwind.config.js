const {nextui} = require('@nextui-org/theme');
// just to get tailwindcss IntelliSense
module.exports = {};
  plugins: [nextui()],
  content: [
    "./node_modules/@nextui-org/theme/dist/components/(autocomplete|avatar|breadcrumbs|button|card|checkbox|date-picker|divider|dropdown|input|link|modal|navbar|pagination|select|skeleton|spacer|tabs|ripple|spinner|form|listbox|popover|scroll-shadow|calendar|date-input|menu).js"
],
