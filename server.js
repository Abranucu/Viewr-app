const jsonServer = require("json-server");

const server = jsonServer.create();

const middlewares = jsonServer.defaults();
server.use(middlewares);

const allowsAccessFromAnywhere = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
};
server.use(allowsAccessFromAnywhere);

const router = jsonServer.router("db.json");
server.use(router);

const PORT = process.env.PORT || 5005;

server.listen(PORT, () => {
  console.log(`Servidor andando! en el puerto ${PORT}`);
  console.log(`Acceso Local en: http://localhost:${PORT}`);
});
