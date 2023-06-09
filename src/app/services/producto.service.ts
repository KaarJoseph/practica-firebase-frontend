import { Injectable } from '@angular/core';
import { Producto} from '../domain/producto';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private dbPath = '/productos'; 
  productos: Producto[] = []

  productosRef: AngularFirestoreCollection<Producto>;

  constructor(private db: AngularFirestore) {
    this.productosRef = db.collection(this.dbPath);
  }

  save(producto: Producto){
    this.productos.push(producto)
    console.log(this.productos)
    producto.uid = this.db.createId()
    this.create(producto)
  }

  getList(){
    return this.productos
  }

  
  getAll() {
    return this.productosRef.valueChanges();
  }

  create(producto: Producto): any {
    return this.productosRef.doc(producto.uid).set({ ...producto });
  }

  update(id: string, data: any): Promise<void> {
    return this.productosRef.doc(id).update(data);
  }

  update2(producto: Producto): Promise<void> {
    const productoDoc = this.productosRef.doc(producto.uid);
    return productoDoc.update({ ...producto });
  }
  delete(id: string): Promise<void> {
    return this.productosRef.doc(id).delete();
  }
}