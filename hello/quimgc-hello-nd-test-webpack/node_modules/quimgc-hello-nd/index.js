//amb require importem
var _ = require('underscore.string');

//exporta un require:
exports.hello = function (person) {
    console.log('Hola ' + _.capitalize(person) +'!');
}

