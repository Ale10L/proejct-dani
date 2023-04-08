// compile-sass.js

// Requerir el paquete de Sass
const sass = require('sass');
const fs = require('fs');

// Ruta de entrada y salida de los archivos Sass y CSS
const entrada = 'scss/estilos.scss';
const salida = 'css/estilos.css';

// Compilar el archivo Sass
sass.render({
  file: entrada
}, (error, resultado) => {
  if (error) {
    console.error(error);
  } else {
    // Escribir el resultado en el archivo de salida
    fs.writeFile(salida, resultado.css, (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log(`¡El archivo ${salida} ha sido compilado exitosamente!`);
      }
    });
  }
});
