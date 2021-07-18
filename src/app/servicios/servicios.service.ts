import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../modelos/servicios.model';
import { GLOBAL } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  public url: String;
  public hotel: any;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token: any;
  public identidad: any;
  constructor(public _http: HttpClient) {
  this.url = GLOBAL.url
  }

  createServicio(servicio: Servicio, token: any): Observable<any>{
    let params = JSON.stringify(servicio);
    let headersToken = this.headersVariable.set("Authorization", token);
    return this._http.post(this.url + "createServicio", params , {headers: headersToken})
  }

  obtenerListaServicios(servicios: any): Observable<any>{
    let params = JSON.stringify(servicios);

    return this._http.post(this.url + "serviciosHotel", params, {headers: this.headersVariable})
  }

  getHotel(){
    var hotel2 = JSON.parse(localStorage.getItem("hotelSeleccionado")||"{}");
    if(hotel2 != "undefined"){
      this.hotel = hotel2;
    }else {
      this.hotel = null;
    }
    return this.hotel;
  }

}
