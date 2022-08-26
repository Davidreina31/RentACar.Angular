import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private _url: string = "http://localhost:5050/api/user/";


constructor(private _client: HttpClient) { }

public getAll() : Observable<User[]>{
  return this._client.get<User[]>(this._url);
}
public getOne(id: number) : Observable<User>{
  return this._client.get<User>(this._url + id);
}

public getBySub(sub: string) : Observable<User>{
  return this._client.get<User>(this._url + "sub/" + sub);

}

public createUser(u: User) : Observable<void>{
  return this._client.post<void>(this._url, u);
  }

  public updateUser(id: number, u:User): Observable<void>{
    return this._client.put<void>(this._url + id, u);
  }

  public deleteUser(id: number): Observable<void>{
    return this._client.delete<void>(this._url + id);
  }

}
