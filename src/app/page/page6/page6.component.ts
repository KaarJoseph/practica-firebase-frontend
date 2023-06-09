import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.css']
})
export class Page6Component{

  listadoContactos: Contacto[] = [];
  listadoContactosFire: any;

  constructor(private contactoService: ContactoService, private router: Router) {

    this.listadoContactos=contactoService.getList()
    console.log('lista productos', this.listadoContactos)

    this.listadoContactosFire=contactoService.getAll()
  }

  editar(contacto: Contacto){
    console.log(contacto);
    let params: NavigationExtras = {
      queryParams: {
        contacto: contacto,
        nombre: 'Joseph'
      }
    };
    //this.router.navigate(['formulario'], params);
    this.router.navigate(['page/page5'], params);
  }

    eliminar(event: Event,contacto:Contacto){
      this.contactoService.delete(contacto.uid)
    }
  
  nuevo() {
    this.router.navigate(['formulario']);
  }
}
