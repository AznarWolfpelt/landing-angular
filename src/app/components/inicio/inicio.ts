import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service'; // Nombre correcto

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class Inicio implements OnInit {
  productosDestacados: any[] = [];
  cargando: boolean = true;

  constructor(private productsService: ProductsService) {} // Nombre correcto

  ngOnInit() {
    this.cargarProductosDestacados();
  }

cargarProductosDestacados() {
  this.productsService.getProductos().subscribe({
    next: (response: any) => {
      let productos: any[] = [];
      
      // Diferentes formas en que podría venir la respuesta
      if (Array.isArray(response)) {
        productos = response;
      } else if (response && Array.isArray(response.data)) {
        productos = response.data;
      } else if (response && Array.isArray(response.productos)) {
        productos = response.productos;
      } else if (response && typeof response === 'object') {
        // Intentar extraer array del objeto
        const possibleArrays = Object.values(response).filter(val => Array.isArray(val));
        if (possibleArrays.length > 0) {
          productos = possibleArrays[0];
        }
      }
      
      this.productosDestacados = productos.slice(0, 6);
      this.cargando = false;
    },
    error: (error) => {
      console.error('Error cargando productos destacados:', error);
      this.cargando = false;
    }
  });
}
}