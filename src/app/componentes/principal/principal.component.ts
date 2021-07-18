import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/modelos/hotel.model';
import { HotelService } from 'src/app/servicios/hotel.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
  providers: [UsuarioService, HotelService]
})
export class PrincipalComponent implements OnInit {
  public hoteles: any;
  public identidad: any;
  public hotelModel: any =  {hotel: ""};
  public hotelSeleccionado: any;
  public nombreHotel = {nombre: ""}
  constructor(public _usuarioService: UsuarioService,
    public _hotelesService: HotelService,
    private _router: Router) {
    this.identidad = this._usuarioService.getIdentidad();

    this.hotelModel = new Hotel("","","","","");
    }


  ngOnInit(): void {
    console.log(this.identidad);

  }

  obtenerHotel(){
    this._usuarioService.obtenerHotel(this.hotelModel).subscribe(
      response=>{
        console.log(response);

        this.hotelSeleccionado=response.hotelEncontrado;
        localStorage.setItem("hotelSeleccionado", JSON.stringify(this.hotelSeleccionado));
        console.log(response);
        this._router.navigate(['/listaHoteles']);
      },
      error=>{
        console.log(<any>error);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Este hotel no existe',
          showConfirmButton: false,
          timer: 1300
        })

      }
    )
  }


}



