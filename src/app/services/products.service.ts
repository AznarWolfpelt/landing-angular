// products.service.ts - Versión mejorada
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  imagen: string;
  stock: number;
  creado_en: string;
}

export interface Paginacion {
  paginaActual: number;
  totalPaginas: number;
  totalProductos: number;
  porPagina: number;
}

export interface RespuestaProductos {
  productos: Producto[];
  paginacion: Paginacion;
  filtros: {
    busqueda: string;
    categoria: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProductos(filtros?: any): Observable<RespuestaProductos> {
    let params = new HttpParams();
    
    if (filtros) {
      if (filtros.busqueda) params = params.set('q', filtros.busqueda);
      if (filtros.categoria) params = params.set('categoria', filtros.categoria);
      if (filtros.page) params = params.set('page', filtros.page.toString());
    }

    return this.http.get<RespuestaProductos>(`${this.apiUrl}/productos`, { params });
  }

  getCategorias(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/categorias`);
  }

  getProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/productos/${id}`);
  }
}