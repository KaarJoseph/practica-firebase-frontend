import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contacto } from '../domain/contacto';
import { ContactoService } from '../services/contacto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html', 
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  
  contacto: Contacto = new Contacto();

  constructor(private contactoService: ContactoService,
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.contacto = new Contacto()
        this.contacto = params['contacto']
      }
    }

    enviar() {
      console.log(this.contacto)
      this.contactoService.save(this.contacto)
      this.contacto = new Contacto()
    }

}
