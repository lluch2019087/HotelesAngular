import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-todos-hoteles',
  templateUrl: './todos-hoteles.component.html',
  styleUrls: ['./todos-hoteles.component.scss']
})
export class TodosHotelesComponent implements OnInit {
  public hoteles: any;
  constructor(public _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerHoteles();
  }
  obtenerHoteles(){
    this._usuarioService.obtenerHoteles().subscribe(
      response => {
         console.log(response.hoteles_encontrados);
         this.hoteles = response.hoteles_encontrados

      },
      error => {
        console.log(<any>error);
      })
  }
}
