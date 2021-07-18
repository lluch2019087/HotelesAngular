import { Component, OnInit } from '@angular/core';
import { Reservaciones } from 'src/app/modelos/reservaciones.model';
import { HabitacionService } from 'src/app/servicios/habitacion.service';
import { HotelService } from 'src/app/servicios/hotel.service';
import { ReservacionService } from 'src/app/servicios/reservacion.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.scss'],
  providers: [ReservacionService, HotelService, UsuarioService]
})
export class ReservacionesComponent implements OnInit {
  public habitacionEncontrada: any;
  public token: String;
  public reservacion: any;
  public usuario: any;
  public hotelEncontrado: any = {hotel: ''};
  public hoteles: any ={hotel: ''};
  public habi: any = {hotel: ''};
  public habitaciones: any;
  public hotells: any = {hotel: ''};
  public modeloAgregarReservacion: Reservaciones;
  constructor(public _hotelService: HotelService,
    public _usuarioService: UsuarioService, public _reservacionService: ReservacionService,
    public _habitacionService: HabitacionService) {
      this.token = this._usuarioService.getToken();
      this.modeloAgregarReservacion = new Reservaciones("","","","","","")
    }

  ngOnInit(): void {
  this.obtenerHabitaciones();
  this.obtenerHotel();
  this.obtenerHoteles();
  console.log(this._habitacionService.getHotel()._id)
  }

  obtenerHoteles(){
    this.hoteles.hotel = this._usuarioService.getHotel()._id;
    this._usuarioService.obtenerHoteles().subscribe(
      response => {
      console.log(response.hoteles_encontrados);
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

    })
  }



  registroReservacion(){
    this.modeloAgregarReservacion.hotel = this._habitacionService.getHotel()._id;
    this._reservacionService.registroReservacion(this.modeloAgregarReservacion,this.token).subscribe(
      response=>{
        console.log(response)
        this.reservacion = response.reservacionGuardado;
        Swal.fire({
          title: 'Reservacion creado correctamente',
          width: 600,
          padding: '3em',
          background: '#fff url(/images/trees.png)',
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
        })
        //this._router.navigate(["/login"]);
      },
      error=>{
        console.log(<any>error);
        Swal.fire({
          title: 'No se pudo realizar reservacion',
          width: 600,
          padding: '3em',
          background: '#fff url(/images/trees.png)',
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
        })
        //this._router.navigate(["/login"]);
      }
    )
  }

}
