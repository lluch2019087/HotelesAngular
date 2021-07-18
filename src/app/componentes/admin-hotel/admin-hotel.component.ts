import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/modelos/hotel.model';
import { Usuario } from 'src/app/modelos/usuario.model';
import { HotelService } from 'src/app/servicios/hotel.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-admin-hotel',
  templateUrl: './admin-hotel.component.html',
  styleUrls: ['./admin-hotel.component.scss'],
  providers: [UsuarioService, HotelService]
})
export class AdminHotelComponent implements OnInit {
    public modeloUsuario: Usuario;
    public modeloHotel: Hotel;
    public token: string;
    constructor(
      private _usuarioService: UsuarioService,
      private _hotelService: HotelService
      //private _router: Router
      )
      {
      this.token = this._usuarioService.getToken();
      this.modeloHotel = new Hotel("","","","","");
      this.modeloUsuario = new Usuario("","","","","","");
     }

    ngOnInit(): void {
    }
    registroAdminHotel(){
      this._hotelService.registroAdminHotel(this.modeloUsuario, this.token).subscribe(
        response=> {
          console.log(response)
          Swal.fire({
            title: 'Admin Hotel creado correctamente',
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
            title: 'Este usuario ya existe o no tienes permisos',
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
        }
      )
    }


  }
