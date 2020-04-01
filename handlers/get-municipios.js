const getMunicipios = (idEstado, cps) => {
    const municipios = [];

    cps.filter(codigo => codigo.idEstado === idEstado)
        .map(cp => {
            if (!municipios.find(mpo => mpo.municipio === cp.municipio)) {
                const mpo = {
                    idEstado: cp.idEstado,
                    estado: cp.estado,
                    idMunicipio: cp.idMunicipio,
                    municipio: cp.municipio
                };
                municipios.push(mpo)
            }
        });

    return municipios.sort((a, b) => (a.municipio > b.municipio) ? 1 : -1);
};

module.exports = getMunicipios;
