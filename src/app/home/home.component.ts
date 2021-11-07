import { Component, OnInit } from '@angular/core';
import {Celular, celulares} from '../celulares'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  celulares=celulares;

  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
