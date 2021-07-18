import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/servicios/hotel.service';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-lista-servicios',
  templateUrl: './lista-servicios.component.html',
  styleUrls: ['./lista-servicios.component.scss'],
  providers: [ServiciosService, HotelService]
})
export class ListaServiciosComponent implements OnInit {

  public servicios: any = {hotel: ''};
public serviciosEncontrados: any;
  constructor(public _hotelService: HotelService,
    public _servicioService: ServiciosService,) {
      //this.eventos = _eventoService.getHotel();
     }

  ngOnInit(): void {
    this.obtenerListaServicios()
  }

obtenerListaServicios(){
  this.servicios.hotel = this._servicioService.getHotel()._id;
  this._servicioService.obtenerListaServicios(this.servicios).subscribe(
    response => {
      this.serviciosEncontrados = response.servicioEncontrado;
        console.log(response.servicioEncontrado);

  })
}}
