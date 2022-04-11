import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../models/Car';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-cars-desktop',
  templateUrl: './cars-desktop.component.html',
  styleUrls: ['./cars-desktop.component.scss']
})
export class CarsDesktopComponent implements OnInit {

  items: Car[] = [];
  desktopId: string;

  constructor(private _service: CarService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.desktopId = this._route.snapshot.paramMap.get('id');

    this._service.getAllForDesktop(this.desktopId).subscribe(data => {
      this.items = data;
    })
  }

  bookThisCar(id: string){
    this._router.navigateByUrl("/booking/" + id);
  }

}
