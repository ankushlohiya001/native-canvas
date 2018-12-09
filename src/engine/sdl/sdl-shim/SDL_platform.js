var FFI = require('ffi');
var ArrayType = require('ref-array');
var Struct = require('ref-struct');
var Union = require('ref-union');
var ref = require('ref');


var voit = exports.voit = ref.types.void;
var string = exports.string = ref.types.CString;

require('./lib-loader').load(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {
    SDL_GetPlatform: [string, []],
}, exports);
