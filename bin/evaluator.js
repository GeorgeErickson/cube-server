var options = require("../config"),
    cube = require("cube");

options['http-port'] = options['http-port'] + 1

var server = cube.server(options);

server.register = function(db, endpoints) {
  cube.evaluator.register(db, endpoints);
};

server.start();
