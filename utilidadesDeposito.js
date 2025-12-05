// Última modificación en un archivo para comprobar que el reporsitorio funciona correctamente


let vector = [1,2,8,4,2,1,8,3,2,4,2]

vector.forEach((valor, indice) => {
    if(valor % 2 === 0) {
        console.log(`El valor es ${valor} y su posición en el array es el número ${indice}`);
    }
});