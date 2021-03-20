const { argv } = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            default: 5,
            describe: 'Es la base de la tabla de multiplicar.'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            demandOption: true,
            default: false,
            describe: 'Muestra la tabla por consola.'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Define hasta donde va a ser la multiplicación.'
        }
    }).check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero.'
        }

        return true;
    });

module.exports = argv;