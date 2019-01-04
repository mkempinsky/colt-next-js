import fetch from 'isomorphic-unfetch';
import {getProp} from './utils';

function isCalledFromServer(context) {
    if (!context || !context.req) return false;
    return !!context.req;
}

export default async function fetchWrapper(context, url, options = {}) {
    const isServer = isCalledFromServer(context);
    const port = getProp(process, 'env.PORT', 3000);

    options.method = options.method || 'GET';

    const fullUrl = isServer ? `http://localhost:${port}${url}` : url;

    const response = await fetch(fullUrl, options);

    return response;
}