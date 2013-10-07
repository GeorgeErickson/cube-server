process.env['NODE_ENV'] = 'collector';

var options = require("config"),
    cube = require("cube"),
    server = cube.server(options);

server.register = function(db, endpoints) {
  cube.collector.register(db, endpoints);
};

server.start();
