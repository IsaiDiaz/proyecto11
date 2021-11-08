import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CelularesComponent } from './celulares/celulares.component';
import { FormularioWebComponent } from './formulario-web/formulario-web.component';
import { ContactosComponent } from './contactos/contactos.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'celulares',
    component:CelularesComponent
  },
  {
    path:'formulario-web',
    component:FormularioWebComponent
  },
  {
    path:'contactos',
    component:ContactosComponent
  },
  {
    path:'carrito', component:CarritoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
