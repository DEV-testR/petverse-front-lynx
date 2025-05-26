const lynxPresent = require('@lynx-js/tailwind-preset');
/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    presets: [lynxPresent],
    content: ['./src/**/*.{js,ts,tsx,jsx}'],
    purge: ['./src/**/*.{js,ts,tsx,jsx}'],
    plugins: [],
    theme: {
        colors: {
            blue: "#1fb6ff",
            purple: "#7e5bef",
            pink: "#ff49db",
            orange: "#ff7849",
            green: "#13ce66",
            yellow: "#ffc82c",
            "gray-dark": "#273444",
            gray: "#8492a6",
            "gray-light": "#d3dce6",
        },
    },
};