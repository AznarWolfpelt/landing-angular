import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart.service';
import { Escena3dComponent } from '../../components/escena3d/escena3d.component';
import { RouterModule } from '@angular/router'; // ← AÑADIR ESTO

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [
    CommonModule, 
    Escena3dComponent,
    RouterModule // ← AÑADIR ESTO
  ],
  templateUrl: './detalle-producto.html',
  styleUrls: ['./detalle-producto.css']
})
export class DetalleProducto implements OnInit {
  producto: any = null;
  cargando: boolean = true;
  productoId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productoId = +params['id'];
      this.cargarProducto();
    });
  }

  cargarProducto() {
    this.http.get<any>(`http://localhost:3000/api/productos/${this.productoId}`)
      .subscribe({
        next: (data) => {
          this.producto = data;
          this.cargando = false;
        },
        error: (error) => {
          console.error('Error:', error);
          this.cargando = false;
        }
      });
  }

  agregarAlCarrito() {
    if (!this.producto) return;
    
    this.cartService.addToCart(this.producto.id, 1).subscribe({
      next: (response) => {
        console.log('Producto agregado:', response);
        alert(`✅ ${this.producto.nombre} agregado al carrito`);
      },
      error: (error) => {
        console.error('Error:', error);
        alert('❌ Error al agregar al carrito');
      }
    });
  }
}