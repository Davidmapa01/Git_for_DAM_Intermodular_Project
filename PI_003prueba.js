class Deposito {
  constructor(liquido, litros, ubicacion, fecha_fabricacion) {
    this.liquido = liquido;
    this.litros = litros;
    this.ubicacion = ubicacion;
    this.fecha_fabricacion = fecha_fabricacion; // Se sustituye "fabricacion" por "fecha_fabricacion"
  }

  // Función para vaciar cierta cantidad
  Vaciar(cantidad) {
    this.litros -= cantidad;
  }
}

let depositoMunicipal = new Deposito("Agua", 100000, "Toledo", 2007);

// Se vacian 5000 litros
depositoMunicipal.Vaciar(5000);

console.log(depositoMunicipal);
