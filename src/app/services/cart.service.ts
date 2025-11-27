import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CartItem {
  id: number;
  producto_id: number;
  cantidad: number;
  precio_unit: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  imagen: string;
  stock: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:3000/api';
  private sessionId = this.generateSessionId();

  constructor(private http: HttpClient) { }

  private generateSessionId(): string {
    // Generar un session ID único para el carrito
    let sessionId = localStorage.getItem('cart_session_id');
    if (!sessionId) {
      sessionId = 'angular_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('cart_session_id', sessionId);
    }
    return sessionId;
  }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`${this.apiUrl}/carrito?session_id=${this.sessionId}`);
  }

  addToCart(producto_id: number, cantidad: number = 1): Observable<any> {
    return this.http.post(`${this.apiUrl}/carrito/agregar`, {
      session_id: this.sessionId,
      producto_id,
      cantidad
    });
  }

  updateQuantity(itemId: number, cantidad: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/carrito/actualizar/${itemId}`, {
      session_id: this.sessionId,
      cantidad
    });
  }

  removeFromCart(itemId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/carrito/eliminar/${itemId}`, {
      body: { session_id: this.sessionId }
    });
  }
}