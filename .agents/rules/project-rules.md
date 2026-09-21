---
description: Reglas y lineamientos generales para el proyecto "Gestión de Escuela"
always_on: true
---

# Reglas del Proyecto: Gestión de Escuela

Este es un proyecto académico para la asignatura de Programación IV (FRP-UTN). Al asistir en este proyecto, sigue los siguientes lineamientos estrictamente:

## 1. Stack Tecnológico
- **HTML5:** Utiliza etiquetas semánticas (`<header>`, `<main>`, `<section>`, `<footer>`, etc.).
- **CSS Vanilla:** Los estilos deben mantenerse en `css/styles.css`. No utilices frameworks CSS (como Tailwind o Bootstrap) ni estilos en línea.
- **JavaScript Vanilla (ES6+):** La lógica debe mantenerse en `scripts/app.js`. No utilices librerías ni frameworks como React, Vue o jQuery. 
- **Manipulación del DOM:** Utiliza métodos estándar como `document.getElementById`, `document.querySelector`, `addEventListener` y `createElement`. Evita el uso de atributos de eventos en línea (ej. `onclick="..."` en HTML).

## 2. Idioma y Nomenclatura
- **Idioma principal:** Todo el código (nombres de variables, funciones, id's, clases) y comentarios deben escribirse en **Español**, manteniendo consistencia con el código existente (ej. `inputNombre`, `cuerpoTabla`).
- **Nomenclatura:** 
  - Utiliza `camelCase` para variables y funciones (ej. `cargarAlumno`, `totalAprobados`).
  - Utiliza nombres descriptivos y claros que reflejen la intención de la variable o función.

## 3. Estructura y Buenas Prácticas
- Mantén la separación de responsabilidades: HTML para estructura, CSS para diseño y JS para comportamiento.
- Valida los datos en el frontend antes de procesarlos.
- Mantén el código limpio, bien indentado y comentado donde sea necesario para explicar lógica compleja.
- Siendo un proyecto con fines didácticos, prioriza la claridad, legibilidad y buenas prácticas de programación estructurada/orientada a eventos por sobre optimizaciones extremas que dificulten la comprensión.
