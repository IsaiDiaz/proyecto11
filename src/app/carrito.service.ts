import { Injectable } from '@angular/core';
import {Celular} from './celulares';
@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  items: Celular[]=[];
 
  constructor() {}

  add(celular: Celular){
    this.items.push(celular);
  }

  obtenerItems(){
    return this.items;
  }

  limpiar(){
    this.items=[];
    return this.items;
  }

}
