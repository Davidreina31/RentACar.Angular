import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { LoginCredentials } from '../models/LoginCredentials';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

public loginCredentials: LoginCredentials;
private _tokenUrl: string = "https://dev-50hpflw3.us.auth0.com/oauth/token"
isConnected: boolean;


constructor(private _client: HttpClient, private auth: AuthService) {
    this.loginCredentials = new LoginCredentials();
    this.loginCredentials.client_id = "Oms44SC6OdcKrXGhUQ0udxLX0Jg0uQm1";
    this.loginCredentials.client_secret = "zYP4UcqKLyt9ISL9tlm-0p8KCJAgVgKdb7BmzrQaAfYSDqtjqUB7HjIQ5BlqfXIl";
    this.loginCredentials.audience = "http://localhost:5050";
    this.loginCredentials.grant_type = "client_credentials";
 }

 public getToken(lc: LoginCredentials): any{
  return this._client.post<LoginCredentials>(this._tokenUrl, lc);
}

isLogged(): boolean{
  this.auth.isAuthenticated$.subscribe(data =>{
  this.isConnected=data;
  });
  return this.isConnected;
}

}
