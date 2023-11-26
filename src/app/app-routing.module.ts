import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstacionamientoComponent } from './estacionamiento/estacionamiento.component';
import { NotasComponent } from './notas/notas.component';
import { RickAndMortyComponent } from './rickandmorty/rickandmorty.component';

const routes: Routes = [
  { path: 'estacionamiento', component: EstacionamientoComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'rickandmorty', component: RickAndMortyComponent },
  // Agrega tus rutas según sea necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}