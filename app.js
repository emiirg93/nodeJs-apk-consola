
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

//console.log(process.argv);
console.log(argv);

/* const [,,arg = '--base=5'] = process.argv;
const [,base] = arg.split('='); */

const base = argv.b;
const listar = argv.l;
const hasta = argv.h;

crearArchivo(base, hasta, listar).then((nombreArchivo) => {
    console.log(nombreArchivo, 'creado.');
}).catch(err => {
    console.log('Error al crear el archivo.', err);
});