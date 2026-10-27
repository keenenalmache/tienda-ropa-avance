import { Injectable, signal } from '@angular/core';
import { NEGOCIO } from '../negocio.config';

export interface DatosNegocio {
  nombre: string;
  lema: string;
  whatsapp: string;
  telefono: string;
  direccion: string;
  horario: string;
  instagram: string;
  frases: string;
}

// Datos fijos: esta versión no usa base de datos
@Injectable({ providedIn: 'root' })
export class Negocio {
  datos = signal<DatosNegocio>({
    nombre: NEGOCIO.nombre,
    lema: 'Ropa cómoda y con estilo.',
    whatsapp: NEGOCIO.whatsapp,
    telefono: NEGOCIO.telefono,
    direccion: NEGOCIO.direccion,
    horario: NEGOCIO.horario,
    instagram: NEGOCIO.instagram,
    frases: '¡Nueva colección!\nMira las ofertas de la semana\n¿Dudas con la talla? ¡Escríbenos!',
  });
}