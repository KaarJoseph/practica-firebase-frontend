import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component {

  contacto: Contacto = new Contacto();

  constructor(
    private personasService: PersonasService,
    private router: Router
  ) {
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if (params) {
      console.log(params);
      this.contacto = new Contacto();
      this.contacto = params['contacto'];
    }
  }

  enviar() {
    console.log(this.contacto);
    if (!isNaN(Number(this.contacto.cedula)) && this.contacto.cedula.length === 10) {

    this.personasService.save(this.contacto).subscribe(data => {
      console.log("Resultado WS save", data);
      this.reloadPage();
    });
  }else{
    alert("Nro. Cedula Incorrecta")
  }
  }

  actualizar() {
    console.log(this.contacto);
    if (!isNaN(Number(this.contacto.cedula)) && this.contacto.cedula.length === 10) {
    this.personasService.save(this.contacto).subscribe(data => {
      console.log("Resultado WS update", data);
      this.router.navigate(["page/page6"])
      //this.reloadPage();
    });
  }else{
    alert("Nro. Cedula Incorrecta")
  }
  }

  reloadPage() {
    window.location.reload();
  }
}
