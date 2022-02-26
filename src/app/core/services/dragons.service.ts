import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api_url } from 'src/environments/environment';
import { IDragon } from '../models/dragons';

@Injectable({
  providedIn: 'root',
})
export class DragonsService {
  private readonly base_url: string = api_url.base_url;

  constructor(private http: HttpClient) {}

  getDragons(): Observable<IDragon[]> {
    return this.http.get<IDragon[]>(this.base_url);
  }

  addDragon(dragon: IDragon):Observable<IDragon> {
    return this.http.post<IDragon>(this.base_url, dragon);
  }

  deleteDragon(id: string):Observable<IDragon> {
    return this.http.delete<IDragon>(`${this.base_url}/${id}`);
  }
}
