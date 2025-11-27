import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar implements OnInit {
  itemsCarrito: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.actualizarContadorCarrito();
    
    // Escuchar cambios en el carrito (opcional)
    this.cartService.getCartItems().subscribe(items => {
      this.itemsCarrito = items.reduce((total, item) => total + item.cantidad, 0);
    });
  }

  actualizarContadorCarrito() {
    this.cartService.getCartItems().subscribe({
      next: (items) => {
        this.itemsCarrito = items.reduce((total, item) => total + item.cantidad, 0);
      },
      error: (error) => {
        console.error('Error cargando carrito:', error);
      }
    });
  }
}