import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/domain/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-page7',
  templateUrl: './page7.component.html',
  styleUrls: ['./page7.component.css']
})
export class Page7Component {


  producto: Producto = new Producto();

  constructor(private productoService: ProductoService,
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.producto = new Producto()
        this.producto = params['producto']
      }
    }
    

  enviar() {
    this.productoService.save(this.producto)
    this.producto = new Producto()
  }

  actualizar() {
    this.productoService.update(this.producto.uid,this.producto);
    this.router.navigate(["page/page8"])
  }

}
