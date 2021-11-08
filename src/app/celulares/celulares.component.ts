import { Component, OnInit } from '@angular/core';
import {Celular, celulares} from '../celulares'
import { CarritoService } from '../carrito.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.css']
})
export class CelularesComponent implements OnInit {
  celulares=celulares;

  constructor(
    private route: ActivatedRoute,
    private carrito: CarritoService
  ) { }

  addToCart(celular: Celular){
    this.carrito.add(celular);
    window.alert("Celular "+celular.nombre+" agregado al carrito")
  }

  ngOnInit(): void {
  }

}
