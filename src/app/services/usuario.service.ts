import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  // url = 'https://gorest.co.in/public/v1/users';
  // token= 'f3b1b418c08fb2ebabb42aa41ad2c376c77b7a7793b822bb2aea9520014c015e';
  url = 'https://rickandmortyapi.com/api/character';

  constructor(private _http:HttpClient ) { }

  getUsuarios() : Observable<any>{
    return this._http.get<any>(`${this.url}`);
  }

  getSingleUsuario(id: number): Observable<any>{
    return this._http.get<any>(`${this.url}/${id}`);

  }
}
