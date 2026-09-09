/*
Bloque 1: Variables y tipos de datos
Bloque 2: Arreglos y objetos
Bloque 3: Pescar los elementos del HTML (del DOM)
Bloque 4: Funciones
Bloque 5: Condicionales y validaciones
Bloque 6: Eventos (Vamos a hacer que la página reaccione)
*/

// #region Bloque 1: Variables y tipos de datos
// const-> constante, no se puede cambiar su valor
// let-> variable, se puede cambiar su valor
// var -> variable, se puede cambiar su valor, pero es una forma antigua de declarar variables

const nombreEscuela = "UTN - Facultad Regional Paraná";
const anioLectivo = 2026;
const cursoActivo = true;

const NOTA_MINIMA_APROBADO = 6;

console.log("Escuela: " + nombreEscuela, "| tipo: " + typeof nombreEscuela);
console.log("Año Lectivo: " + anioLectivo, "| tipo: " + typeof anioLectivo);
console.log("Curso Activo: " + cursoActivo, "| tipo: " + typeof cursoActivo);
/*templates: ligerales usa comillas invertidas o backsticks*/
console.log(`Bienvenidos a la ${nombreEscuela} - Año Lectivo: ${anioLectivo}`);
// #endregion

// #region Bloque 2: Arreglos y objetos

const materias = [
    "Matemática",
    "Lengua", 
    "Programación",
    "Historia"
];

console.log(`Materias: ${materias.length} materias. La 
    primera es: ${materias[0]} y la última es: ${materias[materias.length - 1]}`);

let alumnos = [];

let proximoId = 1;

// #endregion

// #region Bloque 3: Pescar los elementos del HTML (del DOM)

// El navegador convierte el HTML en un arbol de objetos llamado DOM (Document Object Model), que podemos manipular con JS
// En ese árbol, la raíz se llama "document"
// document.getElementById("algo") -> devuelve el elemento con el id "algo"
// document.querySelector("#inputNombre") -> otra forma de pescar un elemento por su id
// document.querySelector(".tarjeta") -> El primero con css tarjeta
const formAlumno = document.getElementById("formAlumno");
const inputNombre = document.getElementById("inputNombre");
const selectMateria = document.getElementById("selectMateria");
const inputNota = document.getElementById("inputNota");
const mensaje = document.getElementById("mensaje");
const selectDocente = document.getElementById("selectDocente");

const filtroMateria = document.getElementById("filtroMateria");
const cuerpoTabla = document.getElementById("cuerpoTabla");

// Del footer:
const totalAlumnos = document.getElementById("totalAlumnos");
const promedioGeneral = document.getElementById("promedioGeneral");
const totalAprobados = document.getElementById("totalAprobados");
// #endregion

// #region Bloque 4: Funciones
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

    // Agregamos el nuevo alumno al arreglo de alumnos
    alumnos.push(nuevoAlumno);


}

function obtenerAlumnosFiltrados() {
    const materiaSeleccionada = filtroMateria.value;
    
    // Buena práctica: declarar la variable con let (evita crearla como global)
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
renderTabla();
//#endregion

// #region Bloque 5: Condicionales y validaciones

// #endregion