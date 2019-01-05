require('dotenv').config();
const express = require('express');
const next = require('next');
const compression = require('compression');

const dev = process.env.NODE_ENV !== 'production';

const app = next({
    dev
});
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

app.prepare()
    .then(() => {
        console.log('API', process.env.WORDPRESS_API_URL);
        const server = express();

        server.use(compression());

        /**
         * Remove trailing slash from URLs
         */
        server.use((req, res, next) => {
            const hasQuery = /\?[^]*\//.test(req.url);
            if (req.url.substr(-1) === '/' && req.url.length > 1 && !hasQuery) {
                res.redirect(301, req.url.slice(0, -1));
            } else {
                next();
            }
        });

        require('./routes/pages')(server, app);

        /**
         * WP Admin
         */
        server.get('/wp-admin/*', (req, res) => {
            res.redirect(301, process.env.WORDPRESS_URL + req.url);
        });

        /**
         * Home
         */
        server.get('/', (req, res) => {
            app.render(req, res, '/home');
        });

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(PORT, err => {
            if (err) throw err;
            console.log('> Ready on http://localhost:' + PORT);
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
