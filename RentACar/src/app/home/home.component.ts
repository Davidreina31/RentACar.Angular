import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Desktop } from '../models/Desktop';
import { Package } from '../models/Package';
import { DesktopService } from '../services/desktop.service';
import { PackageService } from '../services/package.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  items: Desktop[] = [];
  packages: Package[] = [];

  constructor(private _service: DesktopService, private _packageService: PackageService) { }

  ngOnInit() {
    this._service.getAll().subscribe(data => {
      this.items = data;
    })

    this._packageService.getAll().subscribe(data => {
      this.packages = data;
    })
  }
}

