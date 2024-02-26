import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from '../domain/contacto';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient ) { }

  save(contacto: Contacto){
    return this.http.post<any>("http://localhost:8080/webapp/rs/clientes", contacto)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/webapp/rs/clientes/all")
  }

  delete(cedula: String) {
    console.log(cedula)
    return this.http.delete<any>("http://localhost:8080/webapp/rs/clientes/elim/"+cedula);
  }
}
