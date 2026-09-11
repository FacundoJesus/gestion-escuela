// #region BLOQUE 1: Variables y tipos de datos
const nombreEscuela = "UTN - Facultad Regional Paraná";
const anioLectivo = 2026;
const cursoActivo = true;

const NOTA_MINIMA_APROBADO = 6;
// #endregion

// #region BLOQUE 2: Arreglos y objetos
const materias = [
    "Matemática",
    "Lengua", 
    "Programación",
    "Historia"
];

let alumnos = [];
let proximoId = 1;
// #endregion

// #region BLOQUE 3: Pescar los elementos del HTML (del DOM)
const formAlumno = document.getElementById("formAlumno");
const inputNombre = document.getElementById("inputNombre");
const selectMateria = document.getElementById("selectMateria");
const inputNota = document.getElementById("inputNota");
const mensaje = document.getElementById("mensaje");
const selectDocente = document.getElementById("selectDocente");
const filtroMateria = document.getElementById("filtroMateria");
const cuerpoTabla = document.getElementById("cuerpoTabla");

// Del footer:
const spanTotalAlumnos = document.getElementById("totalAlumnos");
const spanPromedioGeneral = document.getElementById("promedioGeneral");
const spanTotalAprobados = document.getElementById("totalAprobados");
// #endregion


// #region BLOQUE 5: FUNCIONES
function cargarMaterias() {
    selectMateria.innerHTML = "<option value=''>Seleccione una materia</option>";
    filtroMateria.innerHTML = "<option value='todas'>Todas las materias</option>";

    for (const materia of materias) {
        const option = document.createElement("option");
        option.value = materia;
        option.textContent = materia;
        selectMateria.appendChild(option);

        const optionFiltro = document.createElement("option");
        optionFiltro.value = materia;
        optionFiltro.textContent = materia;
        filtroMateria.appendChild(optionFiltro);
    }
}
function agregarAlumno(nombre, materia, nota) {
    // Creamos un objeto literal con los datos del alumno
    const nuevoAlumno = {
        id: proximoId++,
        nombre: nombre,
        materia: materia,
        nota: nota,
        estado: nota >= NOTA_MINIMA_APROBADO ? "Aprobado" : "Desaprobado"
    }
    alumnos.push(nuevoAlumno);
}

function obtenerAlumnosFiltrados() {
    const materiaSeleccionada = filtroMateria.value;
    let alumnosFiltrados = []; 
    if (materiaSeleccionada === "todas") {
        alumnosFiltrados = alumnos;
    } else {
        // El filtro solo se ejecuta si NO se eligió "todas"
        alumnosFiltrados = alumnos.filter(function (alumno) {
            return alumno.materia === materiaSeleccionada;
        });
    }
    return alumnosFiltrados;
}
function renderTabla() {
    const listaAlumnos = obtenerAlumnosFiltrados();
    cuerpoTabla.innerHTML = "";
    if (listaAlumnos.length === 0) {
        cuerpoTabla.innerHTML = "<tr><td colspan='5'>No hay alumnos para mostrar</td></tr>";
    }

    for (const alumno of listaAlumnos) {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${alumno.nombre}</td>
            <td>${alumno.materia}</td>
            <td>${alumno.nota}</td>
            <td>${alumno.estado}</td>
            <td><button>Eliminar</button></td>
        `;
        cuerpoTabla.appendChild(fila);
    }
}

cargarMaterias();
agregarAlumno("Juan Pérez", "Matemática", 8);
agregarAlumno("María Gómez", "Lengua", 5);
agregarAlumno("Facundo Citera", "Programación", 10);
agregarAlumno("Nicolás Valdez", "Programación", 8);
agregarAlumno("Julian Caudis", "Programación", 9);
renderTabla();

function obtenerTotalAlumnos() {
    return alumnos.length;
}
function renderTotalAlumnos() {
    spanTotalAlumnos.textContent = alumnos.length;
}

function obtenerPromedio() {

    if (alumnos.length === 0) {
        return 0;
    }

    let notaAcumulada = 0;
    for(const alumno of alumnos) {
        notaAcumulada += alumno.nota
    }
    const promedio =  (notaAcumulada / alumnos.length);
    return promedio;
}
function renderPromedio() {
    spanPromedioGeneral.textContent = obtenerPromedio().toFixed(2);
}

function obtenerAprobados() {
    let cantAprobados = 0;
    for(const alumno of alumnos) {
        if (alumno.nota >= NOTA_MINIMA_APROBADO){
            cantAprobados++;
        }
    }
    console.log(cantAprobados);
    return cantAprobados;
}
function renderAprobados() {
    spanTotalAprobados.textContent = obtenerAprobados();
}

renderTotalAlumnos();
renderPromedio();
renderAprobados();
//#endregion

// #region BLOQUE 5: Condicionales y validaciones
// #endregion

//#region BLOQUE 6: Eventos
//#endregion


