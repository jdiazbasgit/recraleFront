import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/clases/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }


  dameDatos(url:string):Observable<Object>{
    return this.http.get(url);
  }
  grabaDatos(url:string, objeto:any):Observable<Object>{
    return this.http.post(url,objeto);
  }

  borraDatos(url:string, objeto:any){
    return this.http.delete(url+"/"+objeto.id);
  }

}
