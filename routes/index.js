module.exports = function(server, app) {
    require('./proxies')(server, app);
    require('./pages')(server, app);
};
