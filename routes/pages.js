module.exports = function(server, app) {
    server.get('/home-v2', (req, res) => {
        app.render(req, res, '/homeV2');
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
    /**
     * Projects
     */
    server.get('/projects', (req, res) => {
        app.render(req, res, '/projects');
    });
};
