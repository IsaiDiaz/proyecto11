import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  celulares=this.carrito.obtenerItems();

  constructor(
    private carrito: CarritoService
  ) { }

  limpiar(){
    this.carrito.limpiar();
  }

  actualizar(){
    this.celulares=this.carrito.obtenerItems();
    window.alert("Actualizado")
  }

  ngOnInit(): void {
  }

}
