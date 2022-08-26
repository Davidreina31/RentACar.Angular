import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { CarBookingComponent } from './car-booking/car-booking.component';
import { CarsDesktopComponent } from './cars-desktop/cars-desktop.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

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
  },
  {
    path: 'bill/:id',
    component: BillComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
