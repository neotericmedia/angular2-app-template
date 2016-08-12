import { Component } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {FrontComponent} from './front.component';

require('../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss');
require('../../node_modules/font-awesome/scss/font-awesome.scss');
require('../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js');

require('./js/scripts.js');
var img = require('./img/Aviva_logo.png');


@Component({
  selector: 'my-app',
  template: `
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#"><img src="{{ Aviva_logo }}" class="cLogo"/></a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
              <li><a [routerLink]="['/']" href="#we">What we do</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>
      <router-outlet></router-outlet>
  `,
   directives: [ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/', component: FrontComponent},
   //  {path: '/about', component: LipsumComponent},
   //  {path: '/contact', component: ContactComponent},
])


export class AppComponent {

  Aviva_logo = img;

}
