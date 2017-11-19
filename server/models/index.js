var elasticlunr = require('elasticlunr');

var index = elasticlunr(function () {
    this.addField('name')
    this.addField('age')
    this.addField('address')
    this.addField('team')
    this.setRef('id')
});

exports.index = index;
