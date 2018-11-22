/*
Ejercicio  3:  
BibliotecaTenemos tres tipos de medios: libros, CDs y películas.
Debes crear una clase principal llamada Media con tres subclases: Libro, Película y CD.
Estas tres subclases tienen las siguientes propiedades y métodos:
    - LibrosPropiedades:autor(string),titulo(string),paginas(number),prestado(boolean,inicialmentefalse), 
    y valoraciones(array, inicialmentevacío)Getters: todas las propiedades tienen un 
        - getterMétodos:.getMediaValoraciones(),.cambiarEstadoPrestado()y .addValoracion()
    -PelículasPropiedades:director(string),titulo(string),duracion(number),prestado(boolean, inicialmentefalse),
    y valoraciones(array, inicialmentevacío)
        - Getters: todas las propiedades tienen un getterMétodos:. getMediaValoraciones(), .cambiarEstadoPrestado() y
         .addValoracion()
    -CDPropiedades:artista(string),titulo(string),prestado(boolean, inicialmentefalse), 
    valoraciones(array, inicialmentevacío) y canciones(array destrings)
        - Getters: todas las propiedades tienen ungetterMétodos: .getMediaValoraciones(), .cambiarEstadoPrestado() y .addValoracion()
        A continuación crea una instancia de cada tipo de objeto y prueba los distintos métodos y propiedades.
        Comprueba al añadir una valoraciónque esté entre 1 y 5 
        Añade más propiedades a cada clase. Por ejemplo, añade un método llamado barajar a la clase CD que devuelve un array
        ordenado aleatoriamente de todas las canciones de la propiedad canciones.
        Crea una clase llamada Catálogo que mantiene todos los items Media de la biblioteca.
*/

class Media {

    constructor(titulo = '', prestado = false, valoraciones = new Array()) {
        this._titulo = titulo;
        this._prestado = prestado;
        this._valoraciones = valoraciones;
    }

    get titulo() {
        return this._titulo;
    }

    get prestado() {
        return this._prestado;
    }

    get valoraciones() {
        return this._valoraciones;
    }

    getMediaValoraciones() {
        let total = 0;
        this._valoraciones.forEach((value) => total += value);
        return (this._valoraciones.length > 0) ? total / this._valoraciones.length : 0;
    }

    cambiarEstadoPrestado(estado) {
        this._prestado = estado;
    }

    /**
     * 
     * @param {Int} valoracion Valoración que obtiene la película (entre 1 - 5)
     * @returns Devolvemos la longitud del array, en caso de que no se pueda insertar la valoración devolvemos -1
     */
    addValoracion(valoracion) {
        return (Number.isInteger(valoracion) && valoracion > 0 && valoracion <= 5) ? this._valoraciones.push(valoracion) : -1;
    }

}

class Libros extends Media {

    /**
     * 
     * @param {String} titulo 
     * @param {String} autor 
     * @param {Number} paginas 
     */
    constructor(titulo, autor, paginas) {
        super(titulo);
        this._autor = autor;
        this._paginas = paginas;
    }

    get autor() {
        return this._autor;
    }

    get paginas() {
        return this._paginas;
    }   

}

class Pelicula extends Media {

    /**
     * 
     * @param {String} titulo 
     * @param {String} director 
     * @param {Number} duracion 
     */
    constructor(titulo, director, duracion) {
        super(titulo);
        this._director = director;
        this._duracion = duracion;
    }

    get director() {
        return this._director;
    }

    get duracion() {
        return this._duracion;
    }

}

class Cd extends Media {

    /**
     * 
     * @param {String} titulo 
     * @param {String} artista 
     * @param {String[]} canciones 
     */
    constructor(titulo, artista, canciones) {
        super(titulo);
        this._artista = artista;
        this._canciones = canciones;
    }

    get artista() {
        return this._artista;
    }

    get canciones() {
        return this._canciones;
    }

    /**
     * @returns {String[]} Devolvemos un nuevo array con la lista de las canciones desordenada
     */
    barajar() {
        let copiaCanciones = this._canciones.slice();
        for (var i = copiaCanciones.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = copiaCanciones[i];
            copiaCanciones[i] = copiaCanciones[j];
            copiaCanciones[j] = temp;
        }
        return copiaCanciones;
    }

}

class Catalogo {

    constructor(nombre) {
        this._nombre = nombre;
        this._catalogo = {
            libros: new Array(),
            peliculas: new Array(),
            cd: new Array()
        };
    }

    get nombre() {
        return this._nombre;
    }

    /**
     * 
     * @param {Media} media Objeto media para incluirlo en nuestro catálogo
     * @returns {Int} Longitud de lista de medios donde se ha incluido, -1 en caso de error
     */
    addItem(media) {
        let result = -1;
        if (media instanceof Media) {
            switch (media.constructor) {
                case Cd:
                    result = this._catalogo.cd.push(media);
                break;
                case Libros:
                    result = this._catalogo.libros.push(media);
                break;
                case Pelicula:
                    result = this._catalogo.peliculas.push(media);
                break;
            }    
        }
        return result;
    }

    /**
     * 
     * @param {int} type Tipo de catalogo a retornar 1-> Cd 2-> Libros 3-> Peliculas
     * @returns {Media[]} Array de Medias con los diferentes elementos almacenados
     */
    getCatalogo(type) {
        let result = false;
        switch (type) {
            case 1:
                result = this._catalogo.cd;
            break;
            case 2:
                result = this._catalogo.libros;
            break;
            case 3:
                result = this._catalogo.peliculas;
            break;
        }
        return result;
    }
}
