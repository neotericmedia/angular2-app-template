import {bootstrap}    from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { vehicleModel } from './vehicle-model';
//import { VEHICLES } from './moch';
import { VehicleDataService } from './vehicle-data.service';

@Component({
    selector: 'my-vehicles',
    template: `
      <div *ngFor="let vehicle of vehicles">
        <h1>Vehicle: {{ vehicle.name }}</h1>
        <p>Status: {{ vehicle.desc }}
      </div>`
  })

export class VehiclesComponent {
  vehicles: vehicleModel [];

  constructor(private VehicleDataService: VehicleDataService) { }

  ngOnInit() {
    //mock data
    //this.vehicles = this.VehicleDataService.getVehicles();
    //this.vehicles = VEHICLES;
    // let VehicleDataService = new VehicleDataService();
    // this.vehicles = VehicleDataService.getVehicles();
    //http
    this.VehicleDataService.getVehicles()
    .subscribe(
      vehicles => this.vehicles = vehicles
    );
  }


}
