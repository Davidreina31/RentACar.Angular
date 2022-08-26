import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Desktop } from '../models/Desktop';
import { Package } from '../models/Package';
import { User } from '../models/User';
import { DesktopService } from '../services/desktop.service';
import { PackageService } from '../services/package.service';
import { SessionService } from '../services/session.service';
import { UserServiceService } from '../services/userService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  items: Desktop[] = [];
  packages: Package[] = [];
  userInfo: any;
  user: User
  curentUser: User;
  isAdmin: boolean = false;

  constructor(private _service: DesktopService, private _packageService: PackageService, public auth: AuthService, public _sessionService: SessionService,
     private _router: Router, private _userService: UserServiceService) { }

  ngOnInit() {
    this._service.getAll().subscribe(data => {
      this.items = data;
    })

    this._packageService.getAll().subscribe(data => {
      this.packages = data;
    })

    this.auth.user$.subscribe(data => {
      this.userInfo = data;
      this.loadData();
    })
  }

  loadData(){
    this.user = new User();
    this.user.userName = this.userInfo.nickname;
    this.user.email = this.userInfo.name;
    this.user.sub = this.userInfo.sub;
    this.user.role = "user";

    console.log(this.user);

    this._userService.getBySub(this.user.sub).subscribe(data => {
      this.curentUser = data;
      console.log(this.curentUser);
      if(this.curentUser.role == 'Admin'){
        this.isAdmin = true;
      }
    })

    this._userService.createUser(this.user).subscribe({
      next: () => this._router.navigate(["/home"]),
      error: (error) => console.log(error)
    });

    this._sessionService.getToken(this._sessionService.loginCredentials).subscribe(data => {
      sessionStorage.setItem("jwt", data.access_token);
    })
  }

  login(){
    this.auth.loginWithRedirect();
  }
  
  logout(){
    this.auth.logout();
  }

  goToUsers(){
    this._router.navigateByUrl("/users");
  }
}

