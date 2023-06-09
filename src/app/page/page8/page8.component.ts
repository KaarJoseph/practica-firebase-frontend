import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Producto } from 'src/app/domain/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-page8',
  templateUrl: './page8.component.html',
  styleUrls: ['./page8.component.css']
})
export class Page8Component {
  listadoProductos: Producto[] = [];
  listadoProductosFire: any;

  constructor(private productoService: ProductoService, private router: Router) {

    this.listadoProductos=productoService.getList()
    this.listadoProductosFire=productoService.getAll()
  }

  editar(producto: Producto){
    let params: NavigationExtras = {
      queryParams: {
        producto: producto,
        nombre: 'Joseph'
      }
    };
    this.router.navigate(['page/page7'], params);
  }

    eliminar(event: Event,producto:Producto){
      this.productoService.delete(producto.uid)
    }
  
  nuevo() {
    this.router.navigate(['page/page7']);
  }
}
