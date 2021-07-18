import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/modelos/eventos.model';
import { EventoService } from 'src/app/servicios/eventos.service';
import { HotelService } from 'src/app/servicios/hotel.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  providers: [EventoService, UsuarioService, HotelService]
})
export class EventosComponent implements OnInit {
  public modeloEvento: Evento;
  public token: String;
  public evento: any;
  constructor(
    private _usuarioService: UsuarioService,
    private _eventoService: EventoService,
    private _hotelService: HotelService
    ) {
    this.token = this._usuarioService.getToken();
    this.modeloEvento = new Evento("","","","","");
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


  registrarEvento(){
    this._eventoService.createEventos(this.modeloEvento, this.token).subscribe(
      response=> {
        console.log(response)
        Swal.fire({
          title: 'Evento creado correctamente',
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
          title: 'Este evento ya existe',
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
