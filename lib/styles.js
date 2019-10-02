// COLORS
export const purple = shade => {
    const shades = {
        400: '#c099d0',
        500: '#694976',
        600: '#40264a',
        default: '#694976'
    };
    return shades[+shade] || shades.default;
};

export const blue = shade => {
    const shades = {
        500: '#89cff0',
        default: '#89cff0'
    };
    return shades[+shade] || shades.default;
};

export const BREAKPOINT = '992px';

// GLOBAL STYLES
export const globalStyles = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    font-family: Raleway, sans-serif;

}
    html, body {
        margin: 0;
        height: 100%;
    }
    h1 {
        font-size: 48px;
    }
    h2 {
        font-size: 32px;
    }
    h3 {
        font-size: 22px;
        font-style: italic;

    }

`;
