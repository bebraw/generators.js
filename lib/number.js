'use strict';
var annotate = require('annotate');
var is = require('annois');


// TODO: it would be better if this would return floats too
module.exports = function(randint) {
    var generate = annotate('number', 'Generates a number between `minValue` and `maxValue`')
        .on(is.number, is.number, randint)
        .on(is.number, function(minValue) {
            return generate(minValue, Number.MAX_VALUE);
        })
        .on(function() {
            return generate(Number.MIN_VALUE, Number.MAX_VALUE);
        }).satisfies(is.number);

    return generate;
};
