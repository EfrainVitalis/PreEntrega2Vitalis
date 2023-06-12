// probando la logica
console.table(libros)
// funciones
libros.forEach((libro) => alert('Los libros disponibles son: '+libro.titulo));

const encontrados = libros.find((libro) => libro.codigo == "002");
console.log(encontrados);

// funcion para filtrar por precio los libros
function filtrarPrecio(precio){
    const filtrados = libros.filter((libros)=>libros.precio <= precio);
    return filtrados
}
// dato entrada
let precioMax = parseFloat(prompt('Cuanto estas dispuesto a gastar 0-para salir'));
while(precioMax != 0){
    if(isNaN(precioMax) || precioMax < 0){
        alert('Ingrese un valor valido 🤔');
    }else{
        const librosfiltrados = filtrarPrecio(precioMax);
        console.table(librosfiltrados);
    }
    precioMax = parseFloat(prompt('Cuanto estas dispuesto a gastar 0-para salir'));
}

