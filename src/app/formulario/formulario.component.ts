import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contacto } from '../domain/contacto';
import { ContactoService } from '../services/contacto.service';
import { Router } from '@angular/router';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html', 
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  contacto: Contacto = new Contacto();

  constructor(private contactoService: ContactoService,
    private personasService: PersonasService,
    private router: Router) {

    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if (params) {
      console.log(params)
      this.contacto = new Contacto()
      this.contacto = params['contacto']
    }
  }

  enviar() {
    console.log(this.contacto)
    if (!isNaN(Number(this.contacto.cedula)) && this.contacto.cedula.length === 10) {
    this.personasService.save(this.contacto).subscribe(data => {
      console.log("Resultado WS save", data);
      this.reloadPage();
    });
    this.contacto = new Contacto();
  }else{
    alert("Nro. Cedula Incorrecta")
    }
  }

  reloadPage() {
    window.location.reload();
  }
  
}
