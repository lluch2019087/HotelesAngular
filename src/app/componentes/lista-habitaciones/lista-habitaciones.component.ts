import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/modelos/hotel.model';
import { HabitacionService } from 'src/app/servicios/habitacion.service';
import { HotelService } from 'src/app/servicios/hotel.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-lista-habitaciones',
  templateUrl: './lista-habitaciones.component.html',
  styleUrls: ['./lista-habitaciones.component.scss'],
  providers: [HotelService, HabitacionService]
})
export class ListaHabitacionesComponent implements OnInit {
  public habitaciones: any = {hotel: ''};
  public habitacionEncontrada:any;
    constructor(public _hotelService: HotelService,
      public _habitacionService: HabitacionService,) {
        //this.eventos = _eventoService.getHotel();
       }

    ngOnInit(): void {
      this.obtenerHabitacion()
    }

    obtenerHabitacion(){
    this.habitaciones.hotel = this._habitacionService.getHotel()._id;
    this._habitacionService.obtenerHabitacion(this.habitaciones).subscribe(
      response => {
        this.habitacionEncontrada = response.habitacionesEncontradas;
          console.log(response.habitacionesEncontradas);

    })
  }}

