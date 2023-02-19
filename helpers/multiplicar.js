const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, hasta=10, listar = false) => {
    try {
        if(listar){
            console.log("==================".rainbow);
            console.log("   Tabla del : ".red + colors.yellow(base));
            console.log("==================".rainbow);
        }

        let consola = '', salida = '';
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${ base * i }\n`;
            consola += `${base} ${'X'.green} ${i} ${'='.green} ${ base * i }\n`;
        }

        if(listar)
            console.log(consola);

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

        return `tabla-${ base }.txt`.rainbow;
    }catch(err){
        throw err
    }
}

module.exports = {
    crearArchivo
}