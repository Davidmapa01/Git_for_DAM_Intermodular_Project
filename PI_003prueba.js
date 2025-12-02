class Deposito {
    constructor(liquido, litros) {
        this.liquido = liquido;
        this.litros = litros;
    };

    // Como el ejecicio anterior pero sin mensaje por consola
    Vaciar(cantidad) {
        this.litros -= cantidad;
    };
};



let depositoMunicipal = new Deposito("agua", 100000);

// Se vacian 5000 litros 
depositoMunicipal.Vaciar(5000)

console.log(depositoMunicipal);