let libro = new Libros('Los pilares de la tierra', 'Ken Follett', 1068);
let pelicula = new Pelicula('Pulp Fiction', 'Quentin Tarantino', 178);
let cd = new Cd('Nevermind', 'Nirvana', ['Una', 'Dos', 'Tres', 'Cuatro']);

// console.log('El contenido del libro es --> ' + libro.autor + ' / ' + libro.titulo + ' valoracion -> ' + libro.getMediaValoraciones());
// console.log('El contenido de la película es --> ' + pelicula.titulo + ' / ' + pelicula.director + ' valoracion -> ' + pelicula.getMediaValoraciones());
// console.log('El contenido del cd es --> ' + cd + ' valoracion -> ' + cd.getMediaValoraciones());

// console.log('Intento añadir una valoracion como string y el resultado es --> ' + libro.addValoracion('asd'));
// console.log('Intento añadir una valoracion como un 0 y el resultado es --> ' + libro.addValoracion(0));
// console.log('Intento añadir una valoracion como 5 y el resultado es --> ' + libro.addValoracion(5));
// console.log('Intento añadir una valoracion como 1 y el resultado es --> ' + libro.addValoracion(1));
// console.log('Intento añadir una valoracion como 6 y el resultado es --> ' + libro.addValoracion(6));

// console.log('La valoración del libro ahora es de --> ' + libro.getMediaValoraciones());

// console.log('El orden principal de las canciones es --> ' + cd.canciones);
// console.log('La nueva disposicion de las canciones en el cd es --> ' + cd.barajar());
// console.log('El orden despues de barajar de las canciones es --> ' + cd.canciones);



let catalogo = new Catalogo();
console.log(catalogo.addItem(libro));
console.log(catalogo.addItem(new Array()));
console.log(catalogo.getCatalogo(1));
console.log(catalogo.getCatalogo(2));
console.log(catalogo.getCatalogo(3));