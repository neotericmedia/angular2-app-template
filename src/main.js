"use strict";
require('core-js');
require('reflect-metadata');
require('zone.js/dist/zone');
var app_module_1 = require('./app/app.module');
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
console.info('app.environment:', app.environment);
if (app.environment === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.browserDynamicPlatform().bootstrapModule(app_module_1.AppModule);
