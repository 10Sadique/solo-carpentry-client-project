/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                monster: "'Montserrat', sans-serif",
            },
            colors: {
                orange: '#e34a32',
                'gray-dark': '#141618',
                'gray-light': '#BAC1B8',
            },
        },
    },
    plugins: [],
};
