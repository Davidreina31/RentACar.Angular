import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Package } from '../models/Package';

@Injectable({
    providedIn: 'root'
})
export class PackageService {

    private _url: string = "http://localhost:5050/api/package/";

    constructor(private _client: HttpClient) { }

    public getAll(): Observable<Package[]> {
        return this._client.get<Package[]>(this._url);
    }

    public getById(id: string): Observable<Package> {
        return this._client.get<Package>(this._url + id);
    }

    public create(item: Package): Observable<void> {
        return this._client.post<void>(this._url, item);
    }

    public update(id: string, item: Package): Observable<void> {
        return this._client.put<void>(this._url + id, item);
    }

    public delete(id: string): Observable<void> {
        return this._client.delete<void>(this._url + id);
    }
}
