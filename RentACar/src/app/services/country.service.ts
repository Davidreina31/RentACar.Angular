import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/Country';

@Injectable()
export class CountryService {

    private _url: string = "http://localhost:5050/api/country/";

    constructor(private _client: HttpClient) { }

    public getAll(): Observable<Country[]> {
        return this._client.get<Country[]>(this._url);
    }

    public getById(id: string): Observable<Country> {
        return this._client.get<Country>(this._url + id);
    }

    public create(country: Country): Observable<void> {
        return this._client.post<void>(this._url, country);
    }

    public update(id: string, country: Country): Observable<void> {
        return this._client.put<void>(this._url + id, country);
    }

    public delete(id: string): Observable<void> {
        return this._client.delete<void>(this._url + id);
    }
}
