module.exports = function(server, app) {
    /**
     * Home
     */
    server.get('/', (req, res) => {
        app.render(req, res, '/home');
    });
    /**
     * Blog
     */
    server.get('/blog', (req, res) => {
        app.render(req, res, '/blog');
    });
    /**
     * About
     */
    server.get('/about', (req, res) => {
        app.render(req, res, '/about');
    });
};
