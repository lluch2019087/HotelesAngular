import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHotelComponent } from './componentes/admin-hotel/admin-hotel.component';
import { CRUDhotelComponent } from './componentes/crudhotel/crudhotel.component';
import { HabitacionesComponent } from './componentes/habitaciones/habitaciones.component';
import { HotelesComponent } from './componentes/hoteles/hoteles.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { MiCuentaComponent } from './componentes/mi-cuenta/mi-cuenta.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { ListaHotelesComponent } from './componentes/lista-hoteles/lista-hoteles.component';
import { ReservacionesComponent } from './componentes/reservaciones/reservaciones.component';
import { ListaHabitacionesComponent } from './componentes/lista-habitaciones/lista-habitaciones.component';
import { ListaEventosComponent } from './componentes/lista-eventos/lista-eventos.component';
import { TodosHotelesComponent } from './componentes/todos-hoteles/todos-hoteles.component';
import { ListaReservacionesComponent } from './componentes/lista-reservaciones/lista-reservaciones.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { ListaServiciosComponent } from './componentes/lista-servicios/lista-servicios.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent },
  {path: "usuarios", component: UsuariosComponent},
  {path: "registroAdminHotel", component: AdminHotelComponent},
  {path: "hoteles", component: HotelesComponent},
  {path: "habitaciones", component: HabitacionesComponent},
  {path: "CRUDhoteles", component: CRUDhotelComponent},
  {path: "principal", component: PrincipalComponent},
  {path: "micuenta", component: MiCuentaComponent},
  {path: "eventos", component: EventosComponent},
  {path: "listaHoteles", component: ListaHotelesComponent},
  {path: "reservaciones", component: ReservacionesComponent},
  {path: "listaHabitaciones", component: ListaHabitacionesComponent},
  {path: "listaEventos", component: ListaEventosComponent},
  {path: "todoshoteles", component: TodosHotelesComponent},
  {path: "listaReservaciones", component: ListaReservacionesComponent},
  {path: "servicios", component: ServiciosComponent},
  {path: "listaServicios", component: ListaServiciosComponent},
  {path: "**", component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
