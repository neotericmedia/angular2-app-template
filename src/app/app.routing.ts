import { Routes, RouterModule } from '@angular/router';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { TestComponent } from './components/test/test.component';

const appRoutes: Routes = [
  { path: '', component: VehiclesComponent },
  { path: 'test', component: TestComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
