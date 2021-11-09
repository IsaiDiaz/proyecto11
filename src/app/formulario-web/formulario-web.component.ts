import { Component, OnInit } from '@angular/core';
import {Celular, celulares} from '../celulares'
import { FormBuilder } from '@angular/forms';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-formulario-web',
  templateUrl: './formulario-web.component.html',
  styleUrls: ['./formulario-web.component.css']
})
export class FormularioWebComponent implements OnInit {

  celulares=celulares;
  formulario=this.formBuilder.group({
    nombre: '',
    CI:'',
    telefono:'',
    correo: '',
    celular: '',
    descuento: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    public carritoService: CarritoService
  ) { }

  onSubmit():void {
    console.warn('Orden confirmada',this.formulario.value);
    this.formulario.reset();
  }

  ngOnInit(): void {
  }

}
