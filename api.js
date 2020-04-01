const Api = require('claudia-api-builder');
const estados = require('./data/estados');
const cps = require('./data/cps');
const getMunicipios = require('./handlers/get-municipios');

const api = new Api();

api.get('/estados', () => {
    return estados
});

api.get('/estados/{id}/municipios', (request) => {
    return getMunicipios(request.pathParams.id, cps);
});

api.get('/cp/{cp}', (request) => {
    return cps.filter(codigo => codigo.cp === request.pathParams.cp);
});

module.exports = api;
