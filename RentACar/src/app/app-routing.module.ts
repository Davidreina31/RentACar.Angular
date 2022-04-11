import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarBookingComponent } from './car-booking/car-booking.component';
import { CarsDesktopComponent } from './cars-desktop/cars-desktop.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'desktop/:id',
    component: CarsDesktopComponent
  },
  {
    path: 'booking/:id',
    component: CarBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
