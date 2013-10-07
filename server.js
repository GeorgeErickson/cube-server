var options = require("./config"),
    cube = require("cube"),
    server = cube.server(options);

server.register = function(db, endpoints) {
  cube[process.env.CUBE_TYPE].register(db, endpoints);
};

server.start();
