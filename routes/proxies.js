const httpProxy = require('http-proxy');

const wordpressProxy = httpProxy.createProxyServer({
    changeOrigin: true,
    target: process.env.WORDPRESS_API_URL,
    port: 80
});

module.exports = function(server, app) {
    /**
     * Wordpress static assets
     */
    server.get('/wp-content/*', (req, res) => {
        req.url = req.url.replace('/wp-content', '');
        imageProxy.web(req, res);
    });
    /**
     * Proxies
     */

    server.get('/wordpress-api/*', (req, res) => {
        req.url = req.url.replace('/wordpress-api', '');
        wordpressProxy.web(req, res);
    });

   

  
};
