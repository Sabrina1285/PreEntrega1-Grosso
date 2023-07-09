class Alumno {
    //constructor
    constructor({ nombre, dni, promedioFinal }) {
        this.nombre = nombre;
        this.dni = dni;
        this.promedioFinal = promedioFinal;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }
    setDNI(dni) {
        this.dni = dni;
    }
    setPromedioFinal(promedio) {
        this.promedio = promedio;
    }

    estaAprobado() {
        return this.promedioFinal >= 7;
    }
}




window.onload = (event) => {
    listarAlumnos();
};


function listarAlumnos() {
    const alumnos = getAlumnosStorage();
    const tableBodyElemento = document.getElementById('listadoAlumnos');
    if (tableBodyElemento) {
        alumnos.forEach(alumno => {
            alumno = new Alumno(alumno);
            tableBodyElemento.innerHTML = tableBodyElemento.outerHTML
                + `<td>${alumno.nombre}</td>
                    <td>${alumno.dni}</td>
                    <td>${alumno.promedioFinal}</td>
                    ${alumno.estaAprobado()
                        ? '<td class="text-success">Aprobado'
                        : '<td class="text-danger">Desaprobado'}</td>
                `;
        });
    }
}

function buscarAlumno(event) {
    const inputDNIvalue = event.inputDNI.value;
    let alumnoEncontradoDiv = document.getElementById('alumnoEncontrado');

    const alumnosStorage = getAlumnosStorage();
    for (let alumno of alumnosStorage) {
        alumno = new Alumno(alumno);
        if (alumno.dni === inputDNIvalue) {
            alumnoEncontradoDiv.innerHTML = 
            `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${alumno.nombre}</h5>
                        <p class="card-text"><b>D.N.I:</b> ${alumno.dni}</p>
                        <p class="card-text"></p>
                        ${alumno.estaAprobado()
                            ? '<p class="text-success">Aprobado'
                            : '<p class="text-danger">Desaprobado'}</p>
                    </div>
                </div>
            `
            return ;
        }
    }

    alumnoEncontradoDiv.innerHTML = '';
    alert('Alumno no encontrado');
}


function crearAlumno() {
    const form = document.getElementById('crearAlumnoForm');

    const inputNombre = form.inputNombre.value;
    const inputDNI = form.inputDNI.value;
    const inputPromedioFinal = form.inputPromedioFinal.value;

    let esValido = inputNombre != "" && inputDNI != "" && inputPromedioFinal != "";

    if (esValido) {
        // Alumno Object
        const alumnoObject = new Alumno({
            nombre: inputNombre,
            dni: inputDNI,
            promedioFinal: inputPromedioFinal
        });

        this.agregarAlumnoStorage(alumnoObject);
        form.reset();
        alert('Alumno creado correctamente.');
    } else {
        alert('Todos los campos son obligatorios.');
    }
}

function getAlumnosStorage() {
    const alumnosArray = JSON.parse(localStorage.getItem('alumnos'));

    if (alumnosArray === null) localStorage.setItem('alumnos', '[]');

    return JSON.parse(localStorage.getItem('alumnos'));
}

function agregarAlumnoStorage(alumnoObj) {
    const alumnosArray = getAlumnosStorage();
    alumnosArray.push(alumnoObj);

    localStorage.setItem('alumnos', JSON.stringify(alumnosArray));
}

function clearStorage() {
    localStorage.clear();
}