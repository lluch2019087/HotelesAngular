import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/servicios/hotel.service';

@Component({
  selector: 'app-lista-hoteles',
  templateUrl: './lista-hoteles.component.html',
  styleUrls: ['./lista-hoteles.component.scss'],
  providers: [HotelService]
})
export class ListaHotelesComponent implements OnInit {

  constructor( public _hotelService: HotelService) { }

  ngOnInit(): void {
  }

}
