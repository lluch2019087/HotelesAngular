import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.scss'],
  providers: [UsuarioService]
})
export class MiCuentaComponent implements OnInit {
  public persona: any;
  public usuarioModel: Usuario;
  public idUsuario =  ''
  constructor(public _usuarioService: UsuarioService
    ) {
  this.persona = _usuarioService.getIdentidad();
  this.usuarioModel = new Usuario("","","","","","");
  }

  ngOnInit(): void {
    this.obtenerMiCuenta()

  }

  obtenerMiCuenta(){
    this._usuarioService.obtenerMiCuenta().subscribe(
      response => {
      console.log(response.usuario_registrado)
      this.persona = response.usuario_registrado

      }, error =>{
        console.log(<any>error)

      }
    )
  }
  obtenerUsuario(_id: any){
    this.idUsuario = _id;
    this._usuarioService.obtenerUsuario(this.idUsuario).subscribe(
      response => {
      console.log(response.usuario_registrado)
      this.usuarioModel = response.usuario_registrado

      }, error =>{
        console.log(<any>error)

      }
    )
  }
  editarMiCuenta(){
     this._usuarioService.editarMiCuenta(this.usuarioModel).subscribe(
      response => {
      console.log(response);
      this.obtenerMiCuenta();
     })
   }
   eliminarMiCuenta(id: any){
    this._usuarioService.eliminarMiCuenta(id).subscribe(
      response => {
        console.log(response)
        this.obtenerMiCuenta();


      }
    )

   }



}
