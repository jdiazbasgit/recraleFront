import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  nombre:string
  fecha:Date
  telefono:string
  pedido:string
  email:string

  constructor() { }

  ngOnInit(): void {
  }

}
