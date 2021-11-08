import { Injectable } from '@angular/core';
import { Celular,celulares } from './celulares';
@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  items: Celular[]=[];
 
  constructor() { 
    this.items=[];
  }

  add(celular: Celular){
    this.items.push(celular);
  }

  obtenerItems(): Celular[]{
    return this.items;
  }

  limpiar(): Celular[]{
    this.items=[];
    return this.items;
  }
}
