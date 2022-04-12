import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../models/Car';
import { Desktop } from '../models/Desktop';
import { CarService } from '../services/car.service';
import { DesktopService } from '../services/desktop.service';

@Component({
  selector: 'app-cars-desktop',
  templateUrl: './cars-desktop.component.html',
  styleUrls: ['./cars-desktop.component.scss']
})
export class CarsDesktopComponent implements OnInit {

  items: Car[] = [];
  desktopId: string;
  desktop: Desktop;

  constructor(private _service: CarService, private _desktopService: DesktopService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.desktopId = this._route.snapshot.paramMap.get('id');

    this._service.getAllForDesktop(this.desktopId).subscribe(data => {
      this.items = data;
    })

    this._desktopService.getById(this.desktopId).subscribe(data => {
      this.desktop = data;
    })
  }

  bookThisCar(id: string){
    this._router.navigateByUrl("/booking/" + id);
  }

  goToHomePage(){
    this._router.navigateByUrl("/home");
  }

}
