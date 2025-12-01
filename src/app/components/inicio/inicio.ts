import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service';

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

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.cargarProductosDestacados();
  }

  // ELIMINA completamente ngAfterViewInit y inicializarCarrusel

  cargarProductosDestacados() {
    this.productsService.getProductos().subscribe({
      next: (response: any) => {
        let productos: any[] = [];
        
        if (Array.isArray(response)) {
          productos = response;
        } else if (response && Array.isArray(response.data)) {
          productos = response.data;
        } else if (response && Array.isArray(response.productos)) {
          productos = response.productos;
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