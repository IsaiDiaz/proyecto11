import { Component, OnInit } from '@angular/core';
import {Celular, celulares} from '../celulares'

@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.css']
})
export class CelularesComponent implements OnInit {
  celulares=celulares;
  constructor() { }

  ngOnInit(): void {
  }

}
