import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // ← Ya lo tienes
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // ← Verificar que esté
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css']
})
export class Carrito implements OnInit {
  items: CartItem[] = [];
  cargando: boolean = false;
  mensaje: string = '';
  tipoMensaje: 'success' | 'error' | '' = ''; // ← AÑADIR ESTA PROPIEDAD

  // Totales
  subtotal: number = 0;
  impuestos: number = 0;
  total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cargarCarrito();
  }

  cargarCarrito(): void {
    this.cargando = true;
    this.cartService.getCartItems().subscribe({
      next: (items) => {
        this.items = items;
        this.calcularTotales();
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error cargando carrito:', error);
        this.mostrarMensaje('Error al cargar el carrito', 'error');
        this.cargando = false;
      }
    });
  }

  actualizarCantidad(item: CartItem, nuevaCantidad: number): void {
    if (nuevaCantidad < 1 || nuevaCantidad > item.stock) {
      this.mostrarMensaje('Cantidad no válida', 'error');
      return;
    }

    this.cartService.updateQuantity(item.id, nuevaCantidad).subscribe({
      next: (response) => {
        item.cantidad = nuevaCantidad;
        this.calcularTotales();
        this.mostrarMensaje('Carrito actualizado', 'success');
      },
      error: (error) => {
        console.error('Error actualizando cantidad:', error);
        this.mostrarMensaje(error.error?.error || 'Error al actualizar', 'error');
        // Recargar para tener datos actualizados
        this.cargarCarrito();
      }
    });
  }

  eliminarItem(itemId: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este producto del carrito?')) {
      this.cartService.removeFromCart(itemId).subscribe({
        next: (response) => {
          this.items = this.items.filter(item => item.id !== itemId);
          this.calcularTotales();
          this.mostrarMensaje('Producto eliminado del carrito', 'success');
        },
        error: (error) => {
          console.error('Error eliminando item:', error);
          this.mostrarMensaje('Error al eliminar el producto', 'error');
        }
      });
    }
  }

  calcularTotales(): void {
    this.subtotal = this.items.reduce((sum, item) => sum + (item.precio_unit * item.cantidad), 0);
    this.impuestos = this.subtotal * 0.16; // 16% de impuestos
    this.total = this.subtotal + this.impuestos;
  }

  mostrarMensaje(mensaje: string, tipo: 'success' | 'error'): void {
    this.mensaje = mensaje;
    this.tipoMensaje = tipo;
    setTimeout(() => {
      this.mensaje = '';
      this.tipoMensaje = '';
    }, 5000);
  }
}