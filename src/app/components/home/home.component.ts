import {bootstrap}    from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
// import { HTTP_PROVIDERS } from '@angular/http';

import {VehiclesComponent} from './vehicles.component';
import { VehicleDataService} from './vehicle-data.service';

var img = require('./../../img/worl.jpg');
var img2 = require('./../../img/colours.png');

@Component({
    selector: 'my-home',
    template: `
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6">
            <h1>{{ titleA }}</h1>
            <img src="{{ heroImageUrl2 }}"/>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
            <h1>{{ titleB }}</h1>
            <img src="{{ heroImageUrl }}"/>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <my-vehicles></my-vehicles>
        </div>
      </div>
    </div>`,
    directives: [VehiclesComponent],
    providers: [VehicleDataService]
    //providers: [VehicleDataService, HTTP_PROVIDERS]
})

export class HomeComponent {

  titleA = 'My App with Webpack!!!';
  titleB = 'Own It';
  heroImageUrl = img;
  heroImageUrl2 = img2;

}
