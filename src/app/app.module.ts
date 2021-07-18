import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminHotelComponent } from './componentes/admin-hotel/admin-hotel.component';
import { HotelesComponent } from './componentes/hoteles/hoteles.component';
import { HabitacionesComponent } from './componentes/habitaciones/habitaciones.component';
import { CRUDhotelComponent } from './componentes/crudhotel/crudhotel.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    UsuariosComponent,
    AdminHotelComponent,
    HotelesComponent,
    HabitacionesComponent,
    CRUDhotelComponent,
    PrincipalComponent,
    MiCuentaComponent,
    EventosComponent,
    ListaHotelesComponent,
    ReservacionesComponent,
    ListaHabitacionesComponent,
    ListaEventosComponent,
    TodosHotelesComponent,
    ListaReservacionesComponent,
    ServiciosComponent,
    ListaServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
