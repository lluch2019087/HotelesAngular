import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/modelos/hotel.model';
import { HotelService } from 'src/app/servicios/hotel.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crudhotel',
  templateUrl: './crudhotel.component.html',
  styleUrls: ['./crudhotel.component.scss'],
  providers: [HotelService, UsuarioService]
})
export class CRUDhotelComponent implements OnInit {
  public modeloHotel: Hotel;
  public administrador: any;
  public hoteles: any;
  public token: string;
  public hotelesLista: any;
  public idHoteles =  ''
  constructor(
    private _hotelService: HotelService,
    private _usuarioService: UsuarioService,
  ) {this.token = this._usuarioService.getToken();
    this.modeloHotel = new Hotel("","","","",""); }

  ngOnInit(): void {
    this.obtenerHoteles()
  }

  obtenerHoteles(){
    this._hotelService.obtenerHoteles().subscribe(
      response => {
         console.log(response.hoteles_encontrados);
         this.hotelesLista = response.hoteles_encontrados

      },
      error => {
        console.log(<any>error);
      })
  }

  obtenerHotel(_id: any){
    this.idHoteles=_id;
    this._hotelService.obtenerHotel(this.idHoteles, this.token).subscribe(
      response => {
        this.modeloHotel = response.hotel_registrado
        console.log(response.hotel_registrado);
    })

  }
  editarHotel(){
     this._hotelService.editarHotel(this.modeloHotel, this.token).subscribe(
      response => {
      console.log(response);
      this.obtenerHoteles();

     })
   }
   eliminarHotel(id: any){
    this._hotelService.eliminarHotel(id, this.token).subscribe(
      response => {
        console.log(response)
        this.obtenerHoteles();
      }
    )

   }
}
