/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        borderRadius: {
            inherit: 'inherit',
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.border-radius-inherit': {
                    'border-radius': 'inherit',
                },
            };
            addUtilities(newUtilities, ['responsive', 'hover']);
        },
    ],
};
