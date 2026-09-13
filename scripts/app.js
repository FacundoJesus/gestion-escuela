// #region   ------------------------------- BLOQUE 1: DECLARAR VARIABLES Y TIPOS DE DATOS -------------------------------
const NOTA_MINIMA_APROBADO = 6;
// #endregion

// #region  ------------------------------- BLOQUE 2: DECLARAR OBJETOS -------------------------------
const materias = [
    "Matemáticas",
    "Lengua",
    "Programación",
    "Historia"
];

let alumnos = [];
let proximoId = 1;
// #endregion

// #region BLOQUE 3: ------------------------------- BLOQUE 3: PESCAR ELEMENTOS DEL HTML(DOM) -------------------------------
const formAlumno = document.getElementById("formAlumno");
const inputNombre = document.getElementById("inputNombre");
const selectMateria = document.getElementById("selectMateria");
const inputNota = document.getElementById("inputNota");
const mensaje = document.getElementById("mensaje");
const filtroMateria = document.getElementById("filtroMateria");
const cuerpoTabla = document.getElementById("cuerpoTabla");

// Del footer:
const spanTotalAlumnos = document.getElementById("totalAlumnos");
const spanPromedioGeneral = document.getElementById("promedioGeneral");
const spanTotalAprobados = document.getElementById("totalAprobados");
// #endregion


// #region ------------------------------- BLOQUE 4:FUNCIONES -------------------------------
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

function cargarAlumnosDePrueba() {
    agregarAlumno("Juan Pérez", "Matemáticas", 8);
    agregarAlumno("María Gómez", "Lengua", 5);
    agregarAlumno("Facundo Citera", "Programación", 10);
    agregarAlumno("Ana López", "Historia", 9);
    agregarAlumno("Pedro Martínez", "Matemáticas", 4);
    agregarAlumno("Lucía Fernández", "Lengua", 7);

    // Actualizamos toda la pantalla de una sola vez
    actualizarVista();
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
        const claseEstado = alumno.estado === "Aprobado" ? "estado-aprobado" : "estado-desaprobado";
        fila.innerHTML = `
            <td>${alumno.nombre}</td>
            <td>${alumno.materia}</td>
            <td>${alumno.nota}</td>
            <td><span class="${claseEstado}">${alumno.estado}</span></td>
            <td><button class="btn-eliminar" onclick="eliminarAlumno(${alumno.id})">Eliminar</button></td>
        `;
        cuerpoTabla.appendChild(fila);
    }
}

cargarMaterias();
cargarAlumnosDePrueba();

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
    for (const alumno of alumnos) {
        notaAcumulada += alumno.nota
    }
    const promedio = (notaAcumulada / alumnos.length);
    return promedio;
}
function renderPromedio() {
    spanPromedioGeneral.textContent = obtenerPromedio().toFixed(2);
}

function obtenerAprobados() {
    let cantAprobados = 0;
    for (const alumno of alumnos) {
        if (alumno.nota >= NOTA_MINIMA_APROBADO) {
            cantAprobados++;
        }
    }
    console.log(cantAprobados);
    return cantAprobados;
}
function renderAprobados() {
    spanTotalAprobados.textContent = obtenerAprobados();
}

//Eliminar alumno
function eliminarAlumno(id) {
    // Obtengo los alumnos que no coincidan con ese id.
    alumnos = alumnos.filter(function (alumno) {
        return alumno.id !== id;
    });

    actualizarVista();
}

renderTotalAlumnos();
renderPromedio();
renderAprobados();
//#endregion


//#region ------------------------------- BLOQUE 5: Eventos -------------------------------
function actualizarVista() {
    renderTabla();
    renderTotalAlumnos();
    renderPromedio();
    renderAprobados();
}

// Agregar Alumno
formAlumno.addEventListener("submit", function (evento) {

    evento.preventDefault(); //Evitar que la página se recargue
    const nombre = inputNombre.value.trim();
    const materia = selectMateria.value;
    const nota = Number(inputNota.value);

    // 1. Validación de campos vacíos
    if (nombre === "" || materia === "" || isNaN(nota)) {
        mensaje.textContent = "Error: Por favor, completa todos los campos.";
        return; // El 'return' corta la ejecución aquí, no sigue hacia abajo.
    }
    // 2. NUEVA VALIDACIÓN: Que la nota esté en el rango correcto
    if (nota < 1 || nota > 10) {
        mensaje.textContent = "Error: La nota debe ser un número entre 1 y 10.";
        return; // Cortamos la ejecución para que no se guarde
    }

    agregarAlumno(nombre, materia, nota);

    actualizarVista();

    mensaje.textContent = `Se agregó el alumno ${nombre}.`;

    formAlumno.reset();

    setTimeout(() => {
        mensaje.textContent = "";
    }, 3000);
});

// Mostrar alumnos por materia
filtroMateria.addEventListener("change", function () {
    actualizarVista();
});
//#endregion


