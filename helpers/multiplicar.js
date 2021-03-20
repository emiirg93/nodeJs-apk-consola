const colors = require('colors');
const fs = require('fs');

const crearArchivo = (base = 5, hasta, listar) => {

    return new Promise((res, rej) => {
        let salidaConsola, salidaFile = '';
        const header = `***********************\n      Tabla del : ${base}\n***********************\n`;
        salidaConsola += header;
        salidaFile += header;

        const nombreArchivo = `./salida/tabla-${base}.txt`;
        for (let index = 0; index < hasta; index++) {
            salidaConsola += `${colors.red(base)} x ${index + 1} = ${colors.green.bold(base * (index + 1))}\n`;
            salidaFile += `${base} x ${index + 1} = ${base * (index + 1)}\n`;
        }

        if (listar) {
            console.log(salidaConsola);
        }

        try {
            fs.writeFileSync(nombreArchivo, salidaFile);
        } catch (error) {
            rej(error);
        }

        res(nombreArchivo);
    })


}

module.exports = {
    crearArchivo
}