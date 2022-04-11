import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/Car';

@Injectable({
    providedIn: 'root'
})
export class CarService {

    private _url: string = "http://localhost:5050/api/car";

    constructor(private _client: HttpClient) { }

    public getAll(): Observable<Car[]> {
        return this._client.get<Car[]>(this._url);
    }

    public getAllForDesktop(id: string): Observable<Car[]> {
        return this._client.get<Car[]>(this._url + "?id=" + id);
    }

    public getById(id: string): Observable<Car> {
        return this._client.get<Car>(this._url + "/" + id);
    }

    public create(car: Car): Observable<void> {
        return this._client.post<void>(this._url, car);
    }

    public update(id: string, car: Car): Observable<void> {
        return this._client.put<void>(this._url + + "/" +  id, car);
    }

    public delete(id: string): Observable<void> {
        return this._client.delete<void>(this._url + "/" +  id);
    }

}
