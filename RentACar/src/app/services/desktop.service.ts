import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Desktop } from '../models/Desktop';

@Injectable({
    providedIn: 'root'
})
export class DesktopService {

    private _url: string = "http://localhost:5050/api/desktop/";

    constructor(private _client: HttpClient) { }

    public getAll(): Observable<Desktop[]> {
        return this._client.get<Desktop[]>(this._url);
    }

    public getById(id: string): Observable<Desktop> {
        return this._client.get<Desktop>(this._url + id);
    }

    public create(desktop: Desktop): Observable<void> {
        return this._client.post<void>(this._url, desktop);
    }

    public update(id: string, desktop: Desktop): Observable<void> {
        return this._client.put<void>(this._url + id, desktop);
    }

    public delete(id: string): Observable<void> {
        return this._client.delete<void>(this._url + id);
    }
}
