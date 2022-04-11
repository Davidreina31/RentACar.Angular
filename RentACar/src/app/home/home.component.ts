import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Desktop } from '../models/Desktop';
import { DesktopService } from '../services/desktop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  items: Desktop[] = [];

  constructor(private _service: DesktopService) { }

  ngOnInit() {
    this._service.getAll().subscribe(data => {
      this.items = data;
    })
  }
}

