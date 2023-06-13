class Alumno {
    //constructor
    constructor(nombre) {
        this.nombre = nombre;
    }

    // setters
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setCalificaciones(calificaciones) {
        this.calificaciones = calificaciones;
    }
    setPromedioFinal(promedio) {
        this.promedio = promedio;
    }

    // getter
    getCantidadCalificaciones() {
        return this.calificaciones.length;
    }
}

// Inicio del programa
main();


function main() {
    const alumnos = [];
    let opcion = 0;

    while(opcion != 4) {
        opcion = parseInt(prompt('1) Cargar Alumno \n2) Buscar Alumno \n3) Listar Alumnos \n4) Salir'));

        if (opcion === 1) {         
            let nombre = prompt('Nombre Alumno:');            
            if (alumnos.includes(nombre)) {
                alert('Ya existe un alumno con ese nombre');
                continue;
            }

            let alumno = crearAlumno(nombre);
            alumnos.push(alumno);
        } else if(opcion === 2) {
            let alumno = buscarAlumno(alumnos);
            mostrarInformacion(alumno);
        } else if (opcion === 3) {
            listarAlumnos(alumnos);
        }
    }
}

// Metodo
function listarAlumnos(alumnos) {
    alumnos.forEach(alumno => {
        alert(alumno.nombre)
    });
}

// Funcion
function crearAlumno(nombre) {
    // Alumno Object
    const alumnoObject = new Alumno(nombre);

    let cantidadNotas = parseInt(prompt('Ingrese la cantidad de notas de ' + nombre + ':'));
    let calificaciones = [];

    for (let i = 0; i < cantidadNotas; i++) {
        let numeroNota = i + 1;
        let mensaje = 'Calificacion ' + numeroNota + ':';
        let notaMateria = parseInt(prompt(mensaje));

        // Agrega la nota al Array
        calificaciones.push(notaMateria);
    }

    // guardar las calificaciones dentro del objeto creado.
    alumnoObject.setCalificaciones(calificaciones);

    return alumnoObject;
}


// Metodo
function mostrarInformacion(alumno) {
    let promedioAlumno = obtenerPromedio(alumno.getCantidadCalificaciones(), alumno.calificaciones);

    mostrarPromedioEnPantalla(alumno.nombre, promedioAlumno);
    mostrarAprobadoDesaprobadoEnPantalla(promedioAlumno);
}

// Funcion
function buscarAlumno(alumnos) {
    let nombre = prompt('Nombre del alumno que desea buscar:');
    for (const alumno of alumnos) {
        if(alumno.nombre === nombre){
            return alumno;
        }
    }
}

// Metodo Imprimir
function mostrarPromedioEnPantalla(nombreAlumno, promedioFinal) {
    alert('El promedio del ' + nombreAlumno + ' es: ' + promedioFinal);
}

// Metodo Imprimir
function mostrarAprobadoDesaprobadoEnPantalla(notaFinal) {
    if (estaAprobado(notaFinal)) {
        alert('Alumno Aprobado :)');
    } else {
        alert('Alumno Desaprobado :(');
    }
}

// Funcion
function obtenerPromedio(cantidadMaterias, calificaciones) {
    let totalNotas = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        totalNotas += calificaciones[i];
    }

    return totalNotas / cantidadMaterias;
}

// Funcion
function estaAprobado(nota) {
    return nota >= 7;
}