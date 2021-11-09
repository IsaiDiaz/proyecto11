import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  formulario=this.formBuilder.group({
    nombre: '',
    celular:'',
    email:'',
    ciudad: '',
    mensaje: ''
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  onSubmit():void {
    console.warn('Mensaje registrado',this.formulario.value);
    window.alert("Mensaje registrado");
    this.formulario.reset();
  }

  ngOnInit(): void {
  }

}
