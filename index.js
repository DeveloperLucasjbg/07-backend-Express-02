const express = require("express");
const metodos = require("./metodos");
const { urlencoded } = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/api/productos/listar", (_, res) => {
  res.json(new metodos().listar());
});

app.get("/api/productos/listar/:id", (req, res) => {
  const { id } = req.params;
  res.json(new metodos(id).listarPorId());
});
app.post("/api/productos/guardar", (req, res) => {
  res.json(new metodos(null,req.body).guardar());
});

const server = app.listen(PORT, () => {
  console.log("escuchando el servidor", server.address().port);
});
