import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(
    public carritoService: CarritoService
  ) {}

  limpiar(){
    this.carritoService.limpiar();
  }

  actualizar(){
   this.carritoService.obtenerItems();
  }

  ngOnInit(): void {
  }

}
