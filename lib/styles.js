// COLORS
export const pink = shade => {
    const shades = {
        400: '#ead8cc',
        default: '#ead8cc'
    };
    return shades[+shade] || shades.default;
};
export const blue = shade => {
    const shades = {
        400: '#93b0ab',
        default: '#93b0ab'
    };
    return shades[+shade] || shades.default;
};
export const green = shade => {
    const shades = {
        400: '#73877e',
        default: '#73877e'
    };
    return shades[+shade] || shades.default;
};
export const brown = shade => {
    const shades = {
        400: '#929a8d',
        500: '#b2b8aa',
        default: '#929a8d'
    };
    return shades[+shade] || shades.default;
};

// GLOBAL STYLES
export const globalStyles = `
    body {
        margin: 0;
    }

`;