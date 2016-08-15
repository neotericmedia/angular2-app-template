import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';

import { AppComponent }       from './app.component';
import { routing,
         appRoutingProviders } from './app.routing';

import { VehiclesComponent }    from './components/vehicles/vehicles.component';
import { TestComponent }    from './components/test/test.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    VehiclesComponent,
    TestComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}
