import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../modelos/usuario.model';
import { Hotel } from '../modelos/hotel.model';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  public url: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token: any;
  public identidad: any;
  public gestor: any;
  public hotel: any;
  constructor(public _http: HttpClient) {
  this.url = GLOBAL.url
  }

  registro(usuario: Usuario): Observable<any>{
    let params = JSON.stringify(usuario);
    return this._http.post(this.url + "createUser", params, {headers: this.headersVariable})
  }

  ObtenerUsuarios(): Observable<any>{
    let headersToken = this.headersVariable.set("Authorization", this.getToken());
    return this._http.get(this.url + "obtenerUsers", {headers: headersToken})
  }

  login(usuario: any, getToken:any ): Observable<any>{
    if(getToken != null){
      usuario.getToken = getToken;
    }
    let params = JSON.stringify(usuario);
    return this._http.post(this.url + "login", params , {headers: this.headersVariable});
  }

  editarUsuario(usuario: Usuario): Observable<any>{
    let params = JSON.stringify(usuario);
    let headersToken = this.headersVariable.set("Authorization", this.getToken());
    return this._http.put(this.url + "editar/" + usuario._id, params , {headers: headersToken})
  }
  eliminarUsuario(id: String): Observable<any>{
    return this._http.delete(this.url +"deleteUs/" + id, {headers: this.headersVariable})
  }

  obtenerUsuario(id: String): Observable<any>{
    return this._http.get(this.url +"obtenerUser/" + id, {headers: this.headersVariable})
  }

  editarMiCuenta(usuario: Usuario): Observable<any>{
    let params = JSON.stringify(usuario);
    let headersToken = this.headersVariable.set("Authorization", this.getToken());
    return this._http.put(this.url + "editarMiCuenta/" + usuario._id, params , {headers: headersToken})
  }
  eliminarMiCuenta(id: String): Observable<any>{
    return this._http.delete(this.url +"deleteMiCuenta/" + id, {headers: this.headersVariable})
  }

  obtenerMiCuenta(): Observable<any>{
    let headersToken = this.headersVariable.set("Authorization", this.getToken());
    return this._http.get(this.url +"obtenerMiCuenta", {headers: headersToken})
  }

  getIdentidad(){
    var identidad2 = JSON.parse(localStorage.getItem("identidad") ||"{}");
    if(identidad2 != "undefined"){
      this.identidad = identidad2;
    }else {
      this.identidad = null;
    }
    return this.identidad;
  }
  getToken(){
    var token2 = localStorage.getItem("token");
    if(token2 != "undefined"){
      this.token = token2;
    }else{
      this.token = null;
    }
    return this.token;
  }


  obtenerHotel(hotel: any): Observable<any>{
    let params = JSON.stringify(hotel);
    return this._http.post(this.url + "obtenerHotel", params, {headers: this.headersVariable});
  }


  obtenerAdminHotel():Observable<any>{
    let headersToken = this.headersVariable.set("Authorization", this.getToken());
    return this._http.get(this.url + "obtenerAdminHotel", {headers: headersToken});
  }

  obtenerHoteles(): Observable<any>{
    return this._http.get(this.url + "obtenerHoteles", {headers: this.headersVariable})
  }
  obtenerHoteles2(hotel: Hotel): Observable<any>{
    let params = JSON.stringify(hotel);
    return this._http.post(this.url + "obtenerHoteles", params, {headers: this.headersVariable})
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



