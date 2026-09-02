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

let alumnos = [
    {
        id: 1,
        nombre: "Juan",
        nota: 8,
        materia: materias[0],
        estado: "Aprobado"
    }
];

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

const filtroMateria = document.getElementById("filtroMateria");
const cuerpoTabla = document.getElementById("cuerpoTabla");

// Del footer:
const totalAlumnos = document.getElementById("totalAlumnos");
const promedioGeneral = document.getElementById("promedioGeneral");
const totalAprobados = document.getElementById("totalAprobados");


// #endregion

// #region Bloque 4: Funciones
function cargarMaterias() {
    selectMateria.innerHTML = "pepito";
}
// #enregion