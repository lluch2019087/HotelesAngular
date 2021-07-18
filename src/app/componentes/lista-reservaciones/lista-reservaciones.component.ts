import { Component, OnInit } from '@angular/core';
import { HabitacionService } from 'src/app/servicios/habitacion.service';
import { HotelService } from 'src/app/servicios/hotel.service';
import { ReservacionService } from 'src/app/servicios/reservacion.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-lista-reservaciones',
  templateUrl: './lista-reservaciones.component.html',
  styleUrls: ['./lista-reservaciones.component.scss'],
  providers: [ReservacionService, UsuarioService, ReservacionService, HotelService]
})
export class ListaReservacionesComponent implements OnInit {
  public token: any;
  public reservaciones: any;
  public reservacionesEncontrados:any;
  public hoteles: any ={hotel: ''};
  public hotelEncontrado: any = {hotel: ''};
  public hotells: any = {hotel: ''};
  public usuario: any;
  public habi: any = {hotel: ''};
  public habitaciones: any;
  public habitacionEncontrada: any;
    constructor(public _hotelService: HotelService,
      public _reservacionService: ReservacionService,
      public _habitacionService: HabitacionService,
      public _usuarioService: UsuarioService) {
        this.token = this._usuarioService.getToken();
       }

    ngOnInit(): void {
      this.obtenerHabitaciones();
     this.obtenerHotel();
      this.obtenerHoteles();
      this.obtenerLista();
      console.log(this._reservacionService.getHotel()._id)
      }

     obtenerHoteles(){
        this.hoteles.hotel = this._usuarioService.getHotel()._id;
        this._usuarioService.obtenerHoteles().subscribe(
          response => {
          //console.log(response.hoteles_encontrados);
          this.hotelEncontrado = response.hoteles_encontrados;

          },error => {
            console.log(<any>error)
          }
        )
      }

     obtenerHotel(){
        this.hotells.hotel = this._usuarioService.getHotel()._id;
        this._usuarioService.obtenerHotel(this.hotells).subscribe(
          response => {
            console.log(response.hotelEncontrado)
            console.log(this.hotells)
            this.usuario = response.hotelEncontrado;
          }, error => {
            console.log(<any>error)
            console.log(this.hotells)
          }
        )
     }

      obtenerHabitaciones(){
        this.habi.hotel = this._habitacionService.getHotel()._id;
        this._habitacionService.obtenerHabitaciones(this.habi).subscribe(
          response => {
            console.log(response.habitacionesEncontradas)
            this.habitaciones = response.habitacionesEncontradas;
          }, error => {
            console.log(<any>error)
          }
        )
      }
      obtenerHabitacion(){
        this.habitaciones.hotel = this._habitacionService.getHotel()._id;
        this._habitacionService.obtenerHabitacion(this.habitaciones).subscribe(
          response => {
            this.habitacionEncontrada = response.habitacionesEncontradas;
              console.log(response.habitacionesEncontradas);

        }, error =>{
          console.log(<any>error)
        })
      }


  obtenerLista(){
    this.hoteles.hotel= this._reservacionService.getHotel()._id;
    this._reservacionService.listarReservaciones(this.reservaciones).subscribe(
      response => {
        this.reservacionesEncontrados = response.reservacionEncontrada;
          console.log(response.reservacionEncontrada);

    }, error => {
      console.log(<any>error)
    })
  }}
