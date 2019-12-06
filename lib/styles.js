// COLORS
<<<<<<< HEAD
export const aquaBlue = shade => {
    const shades = {
        300: '#87a6ac',
        400: '#5f8890',
        500: '#386B75',
        600: '#2c555d',
        700: '#1c353a',
        800: '#102023',
        default: '#386B75'
=======
export const purple = shade => {
    const shades = {
        400: '#c099d0',
        500: '#694976',
        600: '#40264a',
        default: '#694976'
>>>>>>> d0325497a9e7f50de6e41a76381c1bd98291631c
    };
    return shades[+shade] || shades.default;
};

<<<<<<< HEAD
export const shadow = shadow => {
    const shadows = {
        500: '0px 0px 10px rgba(000, 000, 000, 0.4)',
        default: '0px 0px 10px rgba(000, 000, 000, 0.4)'
    };
    return shadows[+shadow] || shadows.default;
};

export const BREAKPOINT = '990px';

// GLOBAL STYLES
export const globalStyles = `
	body {
		margin :0;
		font-family: Questrial
	}
	a {
		text-decoration: none;
		color: ${aquaBlue()}
	}
=======
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
>>>>>>> d0325497a9e7f50de6e41a76381c1bd98291631c

`;
