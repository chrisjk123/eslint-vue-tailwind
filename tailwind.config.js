/* eslint-disable max-len */
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
    mode: 'jit',

    content: [
        './resources/js/**/*.{vue,js}',
    ],

    theme: {
        colors: {
            ...colors,
        },
        container: {
            center: true,
            padding: '20px',
        },
        extend: {},
    },
    variants: [],
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
