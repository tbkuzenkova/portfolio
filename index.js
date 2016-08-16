/* global global, __base, __apps, __site, __env */
global.__base = __dirname + '/';
global.__apps = __dirname + '/app';
global.__site = __dirname + '/app/site';
global.__env = process.env;
var site = require(__site)();