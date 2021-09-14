const productos = require("./productos");
const fs = require("fs");

class metodos {
  constructor(id, req) {
    this.idToSearch = id;
    this.productos = productos;
    this.newReq = req;
  }

  listar() {
    if (this.productos.length == 0) {
      return "no hay productos";
    } else {
      return this.productos;
    }
  }

  listarPorId() {
    let thisProduct = productos.find(
      (productos) => productos.id == this.idToSearch
    );
    return thisProduct || "nose encontro producto";
  }
  guardar() {
    const newPropducts = {
      id: this.productos.length + 1,
      ...this.newReq,
    };
    this.productos.push(newPropducts);
    let aux = JSON.stringifys(this.productos);
    fs.writeFileSync("./productos.json", aux);

    return "producto agregado";
  }
}
module.exports = metodos;
