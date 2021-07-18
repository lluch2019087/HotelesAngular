import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/modelos/hotel.model';
import { Usuario } from 'src/app/modelos/usuario.model';
import { HotelService } from 'src/app/servicios/hotel.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.scss'],
  providers: [HotelService, UsuarioService]
})
export class HotelesComponent implements OnInit {
  //public administrador: Hotel;
  public userAdmins: any;
  public hoteles: any;
  public token: String;
  public modeloAgregarHotel: Hotel;
  public hotelesLista: any;
  public idHoteles =  ''
  public usuario: any;
  constructor(public _hotelService: HotelService,
    public _usuarioService: UsuarioService,
   // public _router: Router
    ){
      this.token = this._usuarioService.getToken();
      this.modeloAgregarHotel = new Hotel("","","","","")
    }

  ngOnInit(): void {
  this.obtenerUsuarios(),
  this.obtenerAdminHotel()
  }

  obtenerUsuarios(){
    this._hotelService.obtenerAdminHotel().subscribe(
      response => {

        console.log(response)
        this.userAdmins = response;
      }, error => {
        console.log(<any>error)
      }
    )
  }

  obtenerAdminHotel(){
    this._usuarioService.obtenerAdminHotel().subscribe(
      response => {
      this.usuario = response.usuarios;
        console.log(response);

      }
    )
  }



  registroHotel(){
    this._hotelService.registroHotel(this.modeloAgregarHotel,this.token).subscribe(
      response=>{
        console.log(response)
        this.hoteles = response.hotelGuardado;
        Swal.fire({
          title: 'Hotel creado correctamente',
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
          title: 'Hotel existente',
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


