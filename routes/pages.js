module.exports = function(server, app) {
    /**
     * Blog
     */
    server.get('/blog', (req, res) => {
        app.render(req, res, '/blog');
    });
    /**
     * Blog
     */
    server.get('/projects', (req, res) => {
        app.render(req, res, '/projects');
    });
};
