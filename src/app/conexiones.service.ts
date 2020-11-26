import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConexionesService {
  
  constructor() {

  }

  obtenerDatos(url: string): Promise<string> {

    return new Promise(function (resolve, reject) {
      var headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("Access-Control-Allow-Origin", "*");
      headers.append("Access-Control-Allow-Methods","GET, POST, PATCH, PUT, DELETE, OPTIONS");
      headers.append("Access-Control-Allow-Headers","Origin, Content-Type, X-Auth-Token");
      fetch(url, { "headers": headers, "method": "GET" }).then(response => response.json())
        .then(data => { return resolve(data) });

    })
  }

  //body: JSON.stringify(data)

  grabarDatos(url:string,data:object){
    return new Promise(function (resolve, reject) {
      var headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("Access-Control-Allow-Origin", "*");
      fetch(url, { "headers": headers, "method": "POST","body": JSON.stringify(data) }).then(response => response.json())
        .then(data => { return resolve(data) });

    })
  

  }

  
  
}
