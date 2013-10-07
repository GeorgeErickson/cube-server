process.env['NODE_ENV'] = 'evaluator';

var options = require("config"),
    cube = require("cube"),
    server = cube.server(options);

server.register = function(db, endpoints) {
  cube.evaluator.register(db, endpoints);
};

server.start();
