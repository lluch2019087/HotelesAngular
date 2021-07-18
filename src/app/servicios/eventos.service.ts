import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Evento } from '../modelos/eventos.model';
import { Hotel } from '../modelos/hotel.model';

@Injectable({
  providedIn: 'root'
})

export class EventoService {
  public url: String;
  public hotel: any;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token: any;
  public identidad: any;
  constructor(public _http: HttpClient) {
  this.url = GLOBAL.url
  }

  createEventos(evento: Evento, token: any): Observable<any>{
    let params = JSON.stringify(evento);
    let headersToken = this.headersVariable.set("Authorization", token);
    return this._http.post(this.url + "createEventos", params , {headers: headersToken})
  }

  obtenerListaEventos(evento: any): Observable<any>{
    let params = JSON.stringify(evento);

    return this._http.post(this.url + "eventosHotel", params, {headers: this.headersVariable})
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

