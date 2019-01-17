// COLORS
export const pink = shade => {
    const shades = {
        300: '#f2e0e2',
        400: '#F2E0E2',
        500: '#e3bcc0',
        900: '#715E60',
        default: '#F2E0E2'
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
        400: '#a6b6a5',
        default: '#a6b6a5'
    };
    return shades[+shade] || shades.default;
};
export const brown = shade => {
    const shades = {
        400: '#929a8d',
        500: '#9B9091',

        default: '#929a8d'
    };
    return shades[+shade] || shades.default;
};

export const dropShadow = shadow => {
    const shadows = {
        400: '0px 0px 15px rgba(000,000,000,.2)',
        500: '0px 1px 2px rgba(000,000,000,.3)',
        default: '0px 0px 15px rgba(000,000,000,.2)'
    };
    return shadows[+shadow] || shadows.default;
};

export const BREAKPOINT = '992px';
export const MAX_WIDTH = '1170';
// GLOBAL STYLES
export const globalStyles = `
    body {
        margin: 0;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	p,
	a,
	span{
		font-family: Abel, sans-serif;
	}
	a {
		font-weight: bold;
	}

`;
