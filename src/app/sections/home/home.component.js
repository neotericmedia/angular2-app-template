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
var http_1 = require('@angular/http');
var vehicles_component_1 = require('./vehicles.component');
var vehicle_data_service_1 = require('./vehicle-data.service');
var img = require('./../../img/worl.jpg');
var img2 = require('./../../img/colours.png');
var HomeComponent = (function () {
    function HomeComponent() {
        this.titleA = 'My App with Webpack!!!';
        this.titleB = 'Own It';
        this.heroImageUrl = img;
        this.heroImageUrl2 = img2;
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-home',
            template: "\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6\">\n            <h1>{{ titleA }}</h1>\n            <img src=\"{{ heroImageUrl2 }}\"/>\n        </div>\n        <div class=\"col-lg-6 col-md-6 col-sm-6\">\n            <h1>{{ titleB }}</h1>\n            <img src=\"{{ heroImageUrl }}\"/>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\n          <my-vehicles></my-vehicles>\n        </div>\n      </div>\n    </div>",
            directives: [vehicles_component_1.VehiclesComponent],
            styleUrls: ['./src/app/smaccs/test.scss'],
            providers: [vehicle_data_service_1.VehicleDataService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
