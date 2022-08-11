import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
private myAppUrl='https://localhost:44345/'
private myApiUrl='api/TarjetaCredito/'
  constructor(private http:HttpClient) {
   
   }
   getListTarjetas(): Observable<any> {
    return this.http.get('https://localhost:44345/api/TarjetaCredito');
  }
  deleteTarjeta(id:number):Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl+id)
  }
  saveTarjeta(tarjeta:any):Observable<any>{
  return this.http.post(this.myAppUrl+ this.myApiUrl,tarjeta)
  }
}
