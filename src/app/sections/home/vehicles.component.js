"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var vehicle_data_service_1 = require('./vehicle-data.service');
var VehiclesComponent = (function () {
    function VehiclesComponent(VehicleDataService) {
        this.VehicleDataService = VehicleDataService;
    }
    VehiclesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.VehicleDataService.getVehicles()
            .subscribe(function (vehicles) { return _this.vehicles = vehicles; });
    };
    VehiclesComponent = __decorate([
        core_1.Component({
            selector: 'my-vehicles',
            template: "\n      <div *ngFor=\"let vehicle of vehicles\">\n        <h1>Vehicle: {{ vehicle.name }}</h1>\n        <p>Status: {{ vehicle.desc }}\n      </div>"
        }), 
        __metadata('design:paramtypes', [vehicle_data_service_1.VehicleDataService])
    ], VehiclesComponent);
    return VehiclesComponent;
}());
exports.VehiclesComponent = VehiclesComponent;
