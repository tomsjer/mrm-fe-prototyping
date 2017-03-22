// Es posible usar todas las funcionalidades de ES6
// http://es6-features.org/
// 
// Babel transpila nuestro codigo fuente a la versión
// de JS soportada por los navegadores actuales.
// 
// Aún asi, gulp-sourcemaps nos permite debuguear el código
// fuente original sin transpilar ;)
// 
// Se recomienda que el index.js sea un lugar para importar 
// los modulos principales de la aplicacion e inicializar.

import Main from './main.js';

const app = new Main();