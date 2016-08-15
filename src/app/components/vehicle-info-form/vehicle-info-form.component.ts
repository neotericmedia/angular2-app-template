import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../models/vehicle.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'my-vehicle-info-form',
    template: require('./vehicle-info-form.component.html')
    // styles: ['../../smaccs/theme/_blue.scss']
})

export class VehicleInfoFormComponent implements OnInit {

    vehicleInfoForm: FormGroup;

    vinObtained: boolean;

    constructor (private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.vinObtained=false;
        this.vehicleInfoForm = this.formBuilder.group({
            primaryUse: ['', Validators.required],
            commutingMiles: 0,
            annualMileage: 0,
            vin: '',
            vinObtained: false,
            vehicleYear: 0,
            vehicleMake: '',
            vehicleModel: '',
            purchaseYear: 0,
            purchaseMonth: 0,
            antiTheftDevices: '',
            winterTires: false
        });
    }
}
