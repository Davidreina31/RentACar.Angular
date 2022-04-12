import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../models/Car';
import { Desktop } from '../models/Desktop';
import { Trip } from '../models/Trip';
import { CarService } from '../services/car.service';
import { DesktopService } from '../services/desktop.service';
import { TripService } from '../services/trip.service';



@Component({
  selector: 'app-car-booking',
  templateUrl: './car-booking.component.html',
  styleUrls: ['./car-booking.component.scss']
})
export class CarBookingComponent implements OnInit {

  carId: string;
  form: FormGroup;
  trip: Trip;
  currentCar: Car;
  allDesktops: Desktop[] = [];
  errorMessage: string;

  constructor(
    private _route: ActivatedRoute,
    private _tripService: TripService,
    private _router: Router,
    private _builder: FormBuilder,
    private _carService: CarService,
    private _desktopService: DesktopService
    ) { }

  ngOnInit() {
    this.carId = this._route.snapshot.paramMap.get('id');

    this._carService.getById(this.carId).subscribe(data => {
      this.currentCar = data;
    })

    this._desktopService.getAll().subscribe(data => {
      this.allDesktops = data;
    })

    this.form = this._builder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      dateStart: ['', Validators.required],
      dateEnd: ['', Validators.required],
      desktopEnd: ['']
    })
  }

  bookTrip(){
    if(this.form.valid){
      this.trip = new Trip();
      this.trip.client_FirstName = this.form.controls['firstName'].value;
      this.trip.client_LastName = this.form.controls['lastName'].value;
      this.trip.client_Email = this.form.controls['email'].value;
      this.trip.date_Start = this.form.controls['dateStart'].value;
      this.trip.date_End = this.form.controls['dateEnd'].value;
      this.trip.desktop_End_Id = this.form.controls['desktopEnd'].value;
      this.trip.car_Id = this.carId;
      this.trip.car = this.currentCar;
      this.trip.desktop_Start_Id = this.currentCar.desktop_Id;

      this._tripService.create(this.trip).subscribe({
        next: () => this._router.navigateByUrl("/home"),
        error: (error) =>  {
          this.errorMessage = error.error;
          console.log(error.error)
        } 
      })
    }
  }

  previousPage(id: string){
    this._router.navigateByUrl("desktop/" + id);
  }



}
