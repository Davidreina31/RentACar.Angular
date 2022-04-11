import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from '../models/Trip';

@Injectable({
    providedIn: 'root'
})
export class TripService {

    private _url: string = "http://localhost:5050/api/trip/";

    constructor(private _client: HttpClient) { }

    public getAll(): Observable<Trip[]> {
        return this._client.get<Trip[]>(this._url);
    }

    public getById(id: string): Observable<Trip> {
        return this._client.get<Trip>(this._url + id);
    }

    public create(trip: Trip): Observable<void> {
        return this._client.post<void>(this._url, trip);
    }

    public update(id: string, trip: Trip): Observable<void> {
        return this._client.put<void>(this._url + id, trip);
    }

    public delete(id: string): Observable<void> {
        return this._client.delete<void>(this._url + id);
    }
}
