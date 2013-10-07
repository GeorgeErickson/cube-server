var mongo_url = process.env.MONGOLAB_URI;
var params = ["127.0.0.1", 27017, "cube_development", null, null]

if (mongo_url) {
  params = /mongodb:\/\/(?:(\w+):(\w+)@)?([\w\.]+)(?::(\d+))?\/(\w+)/.exec(mongo_url);
};

module.exports = {
  "mongo-host": params[0],
  "mongo-port": params[1],
  "mongo-database": params[2],
  "mongo-username": params[3],
  "mongo-password": params[4]
};
