import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Habitacion } from '../modelos/habitaciones.model';
import { Hotel } from '../modelos/hotel.model';

@Injectable({
  providedIn: 'root'
})

export class HabitacionService {
  public url: String;
  public hotel: any;

  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token: any;
  public identidad: any;
  constructor(public _http: HttpClient) {
  this.url = GLOBAL.url
  }

  registrarHabitacion(habitacion: Habitacion, token: any): Observable<any>{
    let params = JSON.stringify(habitacion);
    let headersToken = this.headersVariable.set("Authorization", token);
    return this._http.post(this.url + "createHabitacion", params , {headers: headersToken})
  }
  obtenerHabitaciones(hotel: any): Observable<any>{
    let params = JSON.stringify(hotel);
    return this._http.post(this.url + "habitaciones", params, {headers: this.headersVariable})
  }
  obtenerHabitacion(habitacion: any): Observable<any>{
    let params = JSON.stringify(habitacion);

    return this._http.post(this.url + "habitaciones", params, {headers: this.headersVariable})
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

