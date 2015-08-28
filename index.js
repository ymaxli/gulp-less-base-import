'use strict';

var es = require('event-stream');
var path = require('path');

var Plugin = function(baseFile) {

    return es.map(function(file, cb){
        file.contents = Buffer.concat([new Buffer('@import "' + path.relative(path.dirname(file.path), baseFile) + '";\n') , file.contents]);
        cb(null, file);
    });
};

module.exports = Plugin;
