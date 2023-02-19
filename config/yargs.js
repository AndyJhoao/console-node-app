const argv = require('yargs')
    .options('b',{
        alias: "base",
        demandOption: true,
        type: 'number',
        describe: 'es la base de la tabla de multiplicar'
    }).option('l',{
        alias: "listar",
        type: 'boolean',
        default: false,
        describe: 'muestra la tabla en consola'
    }).option('h',{
        alias: "hasta",
        type: 'number',
        default: 10,
        describe: "limite de la tabla de multiplicar"
    }).check( ( argv,options ) => {
        if(isNaN(argv.b) && isNaN(argv.h)){
            throw 'La base y hasta tienen que ser numeros';
        }
        return true;
    }).argv

module.exports = argv;