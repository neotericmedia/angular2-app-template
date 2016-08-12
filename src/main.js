"use strict";
require('core-js');
require('reflect-metadata');
require('zone.js/dist/zone');
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require('@angular/router');
var app_component_1 = require('./app/app.component');
console.info('app.environment:', app.environment);
if (app.environment === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS]);
