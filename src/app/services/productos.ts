import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

// Productos de ejemplo: esta versión no usa base de datos
const EJEMPLOS: Producto[] = [
  { id: 1, nombre: 'Camiseta básica', categoria: 'hombre', precio: 15, precioOferta: null, descuento: 0, destacado: true, nuevo: true, tallas: ['S', 'M', 'L'], colores: ['negro', 'blanco'], descripcion: 'Algodón suave para todos los días.', imagen: '' },
  { id: 2, nombre: 'Jean recto', categoria: 'hombre', precio: 40, precioOferta: 30, descuento: 25, destacado: true, nuevo: false, tallas: ['30', '32', '34'], colores: ['azul'], descripcion: 'Corte recto y cómodo.', imagen: '' },
  { id: 3, nombre: 'Chaqueta bomber', categoria: 'hombre', precio: 65, precioOferta: null, descuento: 0, destacado: false, nuevo: true, tallas: ['M', 'L'], colores: ['negro', 'verde'], descripcion: 'Ligera y con estilo.', imagen: '' },
  { id: 4, nombre: 'Hoodie oversize', categoria: 'hombre', precio: 38, precioOferta: 32, descuento: 16, destacado: true, nuevo: false, tallas: ['M', 'L', 'XL'], colores: ['gris', 'negro'], descripcion: 'Holgado y abrigado.', imagen: '' },
  { id: 5, nombre: 'Blusa de lino', categoria: 'mujer', precio: 18, precioOferta: null, descuento: 0, destacado: true, nuevo: true, tallas: ['S', 'M'], colores: ['blanco', 'beige'], descripcion: 'Fresca y cómoda para el día a día.', imagen: '' },
  { id: 6, nombre: 'Vestido midi', categoria: 'mujer', precio: 35, precioOferta: 28, descuento: 20, destacado: true, nuevo: false, tallas: ['S', 'M', 'L'], colores: ['negro', 'rojo'], descripcion: 'Elegante para cualquier ocasión.', imagen: '' },
  { id: 7, nombre: 'Falda plisada', categoria: 'mujer', precio: 24, precioOferta: null, descuento: 0, destacado: false, nuevo: false, tallas: ['S', 'M'], colores: ['beige'], descripcion: 'Movimiento y comodidad.', imagen: '' },
  { id: 8, nombre: 'Pantalón palazzo', categoria: 'mujer', precio: 32, precioOferta: null, descuento: 0, destacado: true, nuevo: false, tallas: ['S', 'M', 'L'], colores: ['negro'], descripcion: 'Tela fluida y tiro alto.', imagen: '' },
];

@Injectable({ providedIn: 'root' })
export class Productos {
  async obtenerTodos(): Promise<Producto[]> {
    return EJEMPLOS;
  }

  async obtenerPorId(id: number): Promise<Producto | undefined> {
    return EJEMPLOS.find((p) => p.id === id);
  }
}