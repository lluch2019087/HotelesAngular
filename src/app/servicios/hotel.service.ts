import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../modelos/hotel.model';
import { Usuario } from '../modelos/usuario.model';
import { GLOBAL } from './global.service';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  public url: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token: any;
  public identidad: any;
  public hotel: any;
  constructor(public _http: HttpClient, public _usuarioService: UsuarioService) {
  this.url = GLOBAL.url,
  this.token = this._usuarioService.getToken();
  }

  obtenerHoteles(): Observable<any>{

    return this._http.get(this.url + "obtenerHoteles", {headers: this.headersVariable})
  }
  registroHotel(hotel: Hotel, token: any): Observable<any>{
    let params = JSON.stringify(hotel);
    let headersToken = this.headersVariable.set("Authorization", token);
    return this._http.post(this.url + "createHotel", params , {headers: headersToken})
  }

  editarHotel(hotel: Hotel, token: any): Observable<any>{
    let params = JSON.stringify(hotel);
    let headersToken = this.headersVariable.set("Authorization", token);
    return this._http.put(this.url + "editarHotel/" + hotel._id, params , {headers: headersToken})
  }
  eliminarHotel(id: String, token: any): Observable<any>{
    //let params = JSON.stringify(id);
    let headersToken = this.headersVariable.set("Authorization", token);
    return this._http.delete(this.url +"deleteHotel/" + id, {headers: headersToken})
  }

  obtenerHotel(id: String, token: any): Observable<any>{
    let headersToken = this.headersVariable.set("Authorization", token);
    return this._http.get(this.url +"obtenerHotel/" + id, {headers: headersToken})
  }
  obtenerHotel2(usuario: any): Observable<any>{
    let params = JSON.stringify(usuario);
    return this._http.get(this.url +"obtenerHotel" + params, {headers: this.headersVariable})
  }
  registroAdminHotel(usuario: Usuario,  token: any): Observable<any>{
    let params = JSON.stringify(usuario);
    let headersToken = this.headersVariable.set("Authorization", token);
    return this._http.post(this.url + "createAdminHotel", params , {headers: headersToken})
  }
  obtenerAdminHotel(): Observable<any>{
    let headersToken = this.headersVariable.set("Authorization", this.token);
    return this._http.get(this.url + "obtenerAdminHotel", {headers: headersToken})
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
