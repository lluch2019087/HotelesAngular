import { Component, OnInit } from '@angular/core';
import { Habitacion } from 'src/app/modelos/habitaciones.model';
import { HabitacionService } from 'src/app/servicios/habitacion.service';
import { HotelService } from 'src/app/servicios/hotel.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.scss'],
  providers: [HabitacionService, UsuarioService, HotelService]
})
export class HabitacionesComponent implements OnInit {
  public modeloHabitacion: Habitacion;
  public token: String;
  public habitacion: any;
  constructor(
    private _hotelService: HotelService,
    private _habitacionService: HabitacionService,
    private _usuarioService: UsuarioService

  ) { this.token = this._usuarioService.getToken();
    this.modeloHabitacion = new Habitacion("","","","","");
}

  ngOnInit(): void {
    this.obtenerHoteles()
  }

  obtenerHoteles(){
    this._hotelService.obtenerHoteles().subscribe(
      response => {
        this.habitacion = response.hoteles_encontrados;
        console.log(response)

      }, error => {
        console.log(<any>error)
      }
    )
  }


  registrarHabitacion(){
    this._habitacionService.registrarHabitacion(this.modeloHabitacion, this.token).subscribe(
      response=> {
        console.log(response)
        Swal.fire({
          title: 'Habitacion creada correctamente',
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
          title: 'Esta habitacion ya existe',
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

