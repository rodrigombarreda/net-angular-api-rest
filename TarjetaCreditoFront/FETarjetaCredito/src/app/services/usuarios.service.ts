import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private myAppUrl='https://localhost:44345/'
  private myApiUrl='api/Usuario/'
  constructor(private http:HttpClient) { 

  }
  getUsuarios(usuario:string , contrasenia:string): Observable<any> {
    console.log(usuario + contrasenia)
    return this.http.get('https://localhost:44345/api/Usuario',
    {params:{usuario: usuario,contrasenia: contrasenia}   });
  }
}
