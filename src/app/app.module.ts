import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Asegúrate de agregar FormsModule si lo necesitas
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module'; // Asegúrate de agregar tu módulo de enrutamiento
import { AppComponent } from './app.component';
import { EstacionamientoComponent } from './estacionamiento/estacionamiento.component';
import { NotasComponent } from './notas/notas.component';
import { RickAndMortyComponent } from './rickandmorty/rickandmorty.component';

@NgModule({
  declarations: [
    EstacionamientoComponent,
    NotasComponent,
    RickAndMortyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Agrega FormsModule si es necesario
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
