//import { VEHICLES } from './moch';
import { Injectable } from '@angular/core';
//model
import { vehicleModel } from './vehicle-model';
//http
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VehicleDataService {

  constructor(private http: Http) {}

  getVehicles() {
    //mock
    //return VEHICLES;
    //http
    return this.http.get('vehicles.json')
    .map(response => <vehicleModel[]>response.json().data);
  }

}
