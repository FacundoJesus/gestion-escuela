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
// #endregion
