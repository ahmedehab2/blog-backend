const jsonServer = require("json-server");
const auth = require("json-server-auth");
const path = require("path");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
const rules = path.join(__dirname, "routes.json");

server.db = router.db;
server.use(cors());
server.use(middlewares);
server.use(jsonServer.rewriter(require(rules)));
server.use(auth);
server.use(router);

module.exports = server;
