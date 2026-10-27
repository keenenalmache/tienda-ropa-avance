import { Component, inject, signal } from '@angular/core';
import { Productos } from '../../services/productos';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {
  private servicio = inject(Productos);
  productos = signal<Producto[]>([]);

  constructor() {
    this.servicio.obtenerTodos().then((lista) => this.productos.set(lista));
  }
}