import { Component, OnInit } from '@angular/core';
import {Celular, celulares} from '../celulares'

@Component({
  selector: 'app-formulario-web',
  templateUrl: './formulario-web.component.html',
  styleUrls: ['./formulario-web.component.css']
})
export class FormularioWebComponent implements OnInit {

  celulares=celulares;

  constructor() { }

  ngOnInit(): void {
  }

}
