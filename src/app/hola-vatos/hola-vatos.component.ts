import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-vatos',
  templateUrl: './hola-vatos.component.html',
  styleUrls: ['./hola-vatos.component.css']
})
export class HolaVatosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  titulo = 'Daniel Pichardo';
}
