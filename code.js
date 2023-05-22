
// Inicio del programa
pedirInformacionMostrarResultado();



// Metodo
function pedirInformacionMostrarResultado() {

    let nombreAlumno = prompt('Nombre Alumno:');
    let cantidadNotas = parseInt(prompt('Ingrese la cantidad de notas del Alumno:'));
    let sumaTotalNotas = 0;

    for (let i = 0; i < cantidadNotas; i++) {
        let numeroNota = i + 1;
        let mensaje = 'Nota ' + numeroNota + ':';
        let notaMateria = parseInt(prompt(mensaje));
        sumaTotalNotas += notaMateria;
    }

    let promedioAlumno = obtenerPromedio(cantidadNotas, sumaTotalNotas);
    
    mostrarPromedioEnPantalla(nombreAlumno, promedioAlumno);
    mostrarAprobadoDesaprobadoEnPantalla(promedioAlumno);
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
        alert('Alumno Desarobado :(');
    }
}

// Funcion
function obtenerPromedio(cantidadMaterias, sumaTotal) {
    return sumaTotal / cantidadMaterias;
}

// Funcion
function estaAprobado(nota) {
    return nota >= 7;
}
