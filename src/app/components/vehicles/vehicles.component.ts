import { Component } from '@angular/core';
import { VehicleInfoFormComponent } from '../vehicle-info-form/vehicle-info-form.component';
import { TabsComponent } from '../tabs/tabs.component';

var img = require('./../../img/worl.jpg');
var img2 = require('./../../img/colours.png');

@Component({
    selector: 'my-vehicles',
    template: require('./vehicles.component.html'),
    directives: [VehicleInfoFormComponent, TabsComponent]
})

export class VehiclesComponent {

  titleA = 'My App with Webpack!!!';
  titleB = 'Own It';
  heroImageUrl = img;
  heroImageUrl2 = img2;

}
