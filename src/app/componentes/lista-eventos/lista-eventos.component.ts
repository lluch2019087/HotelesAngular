import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/servicios/eventos.service';
import { HotelService } from 'src/app/servicios/hotel.service';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.scss'],
  providers: [EventoService,HotelService]
})
export class ListaEventosComponent implements OnInit {
  public eventos: any = {hotel: ''};
public eventosEncontrados:any;
  constructor(public _hotelService: HotelService,
    public _eventoService: EventoService,) {
      //this.eventos = _eventoService.getHotel();
     }

  ngOnInit(): void {
    this.obtenerobtenerListaEventos()
  }

obtenerobtenerListaEventos(){
  this.eventos.hotel = this._eventoService.getHotel()._id;
  this._eventoService.obtenerListaEventos(this.eventos).subscribe(
    response => {
      this.eventosEncontrados = response.eventoEncontrado;
        console.log(response.eventoEncontrado);

  })
}
}
