import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  nombre:string;
  fecha:Date;
  pedido:string;
  telefono:string;
  email:string;
  leido:number;
  constructor() {
    
   }
   grabaPedido(){

    console.log(this.nombre+" - "+this.fecha)
   }

  ngOnInit(): void {
  }

}
