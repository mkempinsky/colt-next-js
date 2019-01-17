module.exports = function(server, app) {
    /**
     * Blog
     */
    server.get('/blog', (req, res) => {
        app.render(req, res, '/blog');
    });
    server.get('/blog/:slug', (req, res) => {
        app.render(req, res, '/blog-single', req.params);
    });
    /**
     * Blog
     */
    server.get('/projects', (req, res) => {
        app.render(req, res, '/projects');
    });
};
