const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')

    console.clear();
    console.log("node app --help")
    crearArchivo(argv.b, argv.h, argv.l).then( nombrearchivo => console.log(nombrearchivo, 'creado')).catch( err => console.log(err))
