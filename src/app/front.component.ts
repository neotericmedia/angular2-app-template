import {bootstrap}    from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {HomeComponent} from './sections/home/home.component';


@Component({
  template: require('./front.component.html'),
  directives: [ROUTER_DIRECTIVES, HomeComponent]
})


export class FrontComponent {

}
