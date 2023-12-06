import {Config} from 'tailwindcss';

const plugin = require('tailwindcss/plugin')

const config: Config = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        plugin(function ({addUtilities}) {
            addUtilities({
                '.no-scrollbar::-webkit-scrollbar': {
                    "display": "none"
                },
                ".no-scrollbar": {
                    "-ms-overflow-style": "none",
                    "scrollbar-width": "none"
                }
            })
        })
    ],
};

export default config;
