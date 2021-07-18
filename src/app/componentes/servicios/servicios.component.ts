import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/modelos/servicios.model';
import { HotelService } from 'src/app/servicios/hotel.service';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  public modeloServicio: Servicio;
  public token: String;
  public evento: any;
  constructor(
    private _usuarioService: UsuarioService,
    private _servicioService: ServiciosService,
    private _hotelService: HotelService
    ) {
    this.token = this._usuarioService.getToken();
    this.modeloServicio = new Servicio("","","");
   }

   ngOnInit(): void {
    this.obtenerEventos()
  }

  obtenerEventos(){
    this._hotelService.obtenerHoteles().subscribe(
      response => {
        this.evento = response.hoteles_encontrados;
        console.log(response.hoteles_encontrados)

      }, error => {
        console.log(<any>error)
      }
    )
  }


  registrarServicio(){
    this._servicioService.createServicio(this.modeloServicio, this.token).subscribe(
      response=> {
        console.log(response)
        Swal.fire({
          title: 'Servicio creado correctamente',
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
          title: 'Este servicio ya existe',
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
