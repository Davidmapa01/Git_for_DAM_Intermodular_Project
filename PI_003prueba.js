class Deposito {
  constructor(liquido, litros, ubicacion, fabricacion) {
    this.liquido = liquido;
    this.litros = litros;
    this.ubicacion = ubicacion;
    this.fabricacion = fabricacion;
  }

  // Como el ejecicio anterior pero sin mensaje por consola
  Vaciar(cantidad) {
    this.litros -= cantidad;
  }
}

let depositoMunicipal = new Deposito("Agua", 100000, "Toledo", 2007);

// Se vacian 5000 litros
depositoMunicipal.Vaciar(5000);

console.log(depositoMunicipal);
