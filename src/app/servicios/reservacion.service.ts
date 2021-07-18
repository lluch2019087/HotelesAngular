import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservaciones } from '../modelos/reservaciones.model';
import { GLOBAL } from './global.service';
import { Hotel } from '../modelos/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {

  public url: String;
  public hotel: any;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token: any;
  public identidad: any;
  constructor(public _http: HttpClient) {
  this.url = GLOBAL.url
  }

  registroReservacion(reservacion: Reservaciones, token: any): Observable<any>{
    let params = JSON.stringify(reservacion);
    let headersToken = this.headersVariable.set("Authorization", token);
    return this._http.post(this.url + "createReservacion", params , {headers: headersToken})
  }

listarReservaciones(hotel: Hotel): Observable<any>{
  let params = JSON.stringify(hotel);
  //let headersToken = this.headersVariable.set("Authorization", token);
  return this._http.post(this.url +"listarReservaciones", params, {headers: this.headersVariable})
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
