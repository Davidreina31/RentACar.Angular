import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '../models/User';
import { UserServiceService } from '../services/userService.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  constructor(private _userService: UserServiceService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this._userService.getAll().subscribe(
      (data) => this.users = data
    )
  }

  public delete(id: number){
    this._userService.deleteUser(id).subscribe({
      next: () => this.loadData(),
      error: (error) => console.log(error)
    })
  }

}
