import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component {

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

  actualizar() {
    console.log(this.contacto)
    this.contactoService.update(this.contacto.uid,this.contacto);
    this.router.navigate(["page/page6"])
  }

}
