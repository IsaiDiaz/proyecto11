import { Component, OnInit } from '@angular/core';
import {Celular, celulares} from '../celulares'
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.css']
})
export class CelularesComponent implements OnInit {
  celulares=celulares;
  
  constructor(
    private carritoService: CarritoService
  ) { }

  addToCart(celular: Celular){
    this.carritoService.add(celular);
    window.alert("Celular "+celular.nombre+" agregado al carrito")
  }

  ngOnInit(): void {
   
  }

}
