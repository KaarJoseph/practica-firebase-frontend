import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/services/contacto.service';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.css']
})
export class Page6Component implements OnInit {
  listadoContactosWS: any;

  constructor(
    private contactoService: ContactoService,
    private personasService: PersonasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listadoContactosWS = this.personasService.getAll();
  }

  editar(contacto: Contacto) {
    console.log(contacto);
    let params: NavigationExtras = {
      queryParams: {
        contacto: contacto,
        nombre: 'Joseph'
      }
    };
    this.router.navigate(['page/page5'], params);
  }

  eliminar(cedula: string) {
    if (!isNaN(Number(cedula)) && cedula.length === 10) {
    this.personasService.delete(cedula).subscribe(() => {
      console.log("Contacto eliminado con éxito.");
      this.ngOnInit()
      //this.listadoContactosWS = this.listadoContactosWS.filter((contacto: Contacto) => contacto.cedula !== cedula);
      //this.reloadPage(); // Llamamos a la función para actualizar la página
    });
    console.log(cedula);
    this.reloadPage();
    }else {
      alert("Nro. Cedula Incorrecta")
    }
  }

  nuevo() {
    this.router.navigate(['formulario']);
  }

  reloadPage() {
    window.location.reload();
  }
}
