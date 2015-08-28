/* global describe, it*/
'use strict';

var expect = require('expect.js');
var fs = require('fs');
var gutil= require('gulp-util');

var plugin = require('../');

var CWD = process.cwd();
var BASE = CWD + '/fixture/';
var BASE_FILE = process.cwd() + '/framework/style/base.less';


describe('gulp-less-base-import', function() {

    it('import global dependency 1', function(done) {
        var file = getFile('a.less', 'a{color:white}');
        var stream = plugin(BASE_FILE);

        stream.on('data', function (newFile) {
            expect(newFile.contents.toString()).to.contain('@import "../framework/style/base.less"');
        });
        stream.once('end', done);

        stream.write(file);
        stream.end();
    });

    it('import global dependency 2', function(done) {
        var file = getFile('b/b.less', 'a{color:black}');
        var stream = plugin(BASE_FILE);

        stream.on('data', function (newFile) {
            expect(newFile.contents.toString()).to.contain('@import "../../framework/style/base.less"');
        });
        stream.once('end', done);

        stream.write(file);
        stream.end();
    });
});

function getFile(filePath, fileContent) {
    return new gutil.File({
        path: BASE + filePath,
        cwd: CWD,
        base: BASE,
        contents: new Buffer(fileContent || '')
    });
}
