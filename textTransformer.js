/**
 * Actualiza el archivo cps.json con la información actualizada
 * del txt que se descarga en:
 * http://www.correosdemexico.gob.mx/SSLServicios/ConsultaCP/CodigoPostal_Exportar.aspx
 *
 * Se debe de eliminar la primer línea para procesamiento.
 * @type {module:fs}
 */

const fs = require('fs');

function readLines() {
    fs.readFile('./data/CPdescarga.txt', 'latin1', (err, data) => {
        let municipios = [];
        const rows = data.split('\n');
        rows.map(row => {
            const columns = row.split('|');
            const municipio = {
                cp: columns[0],
                asentamiento: columns[1],
                tipoAsentamiento: columns[2],
                municipio: columns[3],
                estado: columns[4],
                ciudad: columns[5],
                idEstado: columns[7],
                idMunicipio: columns[11]
            };
            municipios.push(municipio);
        });

        const jsonData = JSON.stringify(municipios);
        fs.writeFileSync('./data/cps.json', jsonData);
    })
};

readLines();
