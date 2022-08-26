import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarsDesktopComponent } from './cars-desktop/cars-desktop.component';
import { CarBookingComponent } from './car-booking/car-booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BillComponent } from './bill/bill.component';
import { AuthModule } from '@auth0/auth0-angular';
import { InterceptorService } from './services/interceptor.service';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [					
    AppComponent,
      HomeComponent,
      CarsDesktopComponent,
      CarBookingComponent,
      BillComponent,
      UsersComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    AuthModule.forRoot({
      domain: 'dev-50hpflw3.us.auth0.com',
      clientId: 'tLd2K4Sgq6Ssv9wxddDzkKv2hbe4P6t6'
    }),

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
