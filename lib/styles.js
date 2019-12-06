// COLORS
export const aquaBlue = shade => {
    const shades = {
        300: '#87a6ac',
        400: '#5f8890',
        500: '#386B75',
        600: '#2c555d',
        700: '#1c353a',
        800: '#102023',
        default: '#386B75'
    };
    return shades[+shade] || shades.default;
};

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

`;
