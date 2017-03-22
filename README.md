# Plantilla FE ( gulp )

Setup básico para prototipar un proyecto estático de FE.
Incluye:

- [Gulp](https://github.com/gulpjs/gulp) 
- [Babel (ES6)](https://babeljs.io/)
- [Browserify](http://browserify.org/)
- [BrowserSync](https://www.browsersync.io/)
- [Sass](http://sass-lang.com/)

---
**PRE-REQUISITOS** 
Hay que tener instalado [Node.js](https://nodejs.org/)
Se recomienda usar **[nvm](https://github.com/creationix/nvm)** de ser posible.
---

## Usar
```
$ npm install
...
...
$ npm start
```

## Notas
- Se debe respetar la estructura de carpetas:
```
root/
 |__ .tmp/
 |__ build/
 |__ css/
 |__ src/
 |__ styles/

 index.html
```
(Obviamente esta puede ser modificada si también se edita el gulpfile.js.)
