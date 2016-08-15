import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

//new
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { browserDynamicPlatform } from '@angular/platform-browser-dynamic';
// import { bootstrap } from '@angular/platform-browser-dynamic';
// import { ROUTER_PROVIDERS } from '@angular/router';
// import { AppComponent } from './app/app.component';

console.info('app.environment:', app.environment);
if (app.environment === 'production') {
  enableProdMode();
}

//bootstrap(AppComponent, [ROUTER_PROVIDERS]);
//new
browserDynamicPlatform().bootstrapModule(AppModule);
