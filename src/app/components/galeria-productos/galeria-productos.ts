import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router'; // ← Añadir RouterModule
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-galeria-productos',
  standalone: true,
  imports: [CommonModule, RouterModule], // ← Añadir aquí
  templateUrl: './galeria-productos.html',
  styleUrls: ['./galeria-productos.css']
})
export class GaleriaProductos implements OnInit {
  productos: any[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.http.get<any[]>('http://localhost:3000/api/productos')
      .subscribe({
        next: (data) => {
          this.productos = data;
          console.log('Productos cargados:', data);
        },
        error: (error) => {
          console.error('Error:', error);
        }
      });
  }

  agregarAlCarrito(producto: any) {
    this.cartService.addToCart(producto.id, 1).subscribe({
      next: (response) => {
        console.log('Producto agregado:', response);
        alert(`✅ ${producto.nombre} agregado al carrito`);
      },
      error: (error) => {
        console.error('Error:', error);
        alert('❌ Error al agregar al carrito');
      }
    });
  }

  verDetalle(productoId: number) {
    this.router.navigate(['/productos', productoId]);
  }
}