import { Component, OnInit } from '@angular/core';
import { ConexionesService } from '../conexiones.service';

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
  url="http://localhost:8080/api/pedidoes"

  service:ConexionesService

  constructor(service:ConexionesService) { 
    this.service=service
  }

  ngOnInit(): void {
  }

  grabarDatos(){
    let data=new Pedido()
    data.nombre=this.nombre
    data.email=this.email
    data.telefono=this.telefono
    data.fecha=new Date()
    this.pedido=this.pedido
    this.service.grabarDatos(this.url,data).then(function(datos){

    })

    
  }

}
class Pedido{
  nombre:string
  email:string
  telefono:string
  pedido:string;
  fecha:Date
  
}
