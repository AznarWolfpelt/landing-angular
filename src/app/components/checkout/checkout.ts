import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css']
})
export class Checkout implements OnInit {
  items: CartItem[] = [];
  cargando: boolean = true;
  
  // Datos del formulario
  formData = {
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    notas: '',
    tipoEnvio: 'regular' // Nuevo campo para tipo de envío
  };

  // Totales
  subtotal: number = 0;
  impuestos: number = 0;
  envio: number = 10.00; // ENVÍO FIJO DE $10
  total: number = 0;

  // Estados
  procesando: boolean = false;
  mensaje: string = '';
  tipoMensaje: 'success' | 'error' | '' = '';

  constructor(
    private cartService: CartService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarCarrito();
  }

  cargarCarrito() {
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

  calcularTotales() {
    this.subtotal = this.items.reduce((sum, item) => sum + (item.precio_unit * item.cantidad), 0);
    this.impuestos = this.subtotal * 0.16;
    this.envio = 10.00; // FIJO $10
    this.total = this.subtotal + this.impuestos + this.envio;
  }

  confirmarPedido() {
    console.log('🔍 CHECKOUT - Items en carrito:', this.items);
    console.log('🔍 CHECKOUT - Session ID:', this.cartService.sessionId);
    if (this.items.length === 0) {
      this.mostrarMensaje('Tu carrito está vacío', 'error');
      return;
    }

    if (!this.validarFormulario()) {
      this.mostrarMensaje('Por favor completa todos los campos requeridos', 'error');
      return;
    }

    this.procesando = true;

    const sessionId = this.cartService.sessionId;
    console.log('🔍 CHECKOUT - Session ID a enviar:', sessionId);

    const pedidoData = {
      session_id: sessionId,
      ...this.formData,
      items: this.items.map(item => ({
        producto_id: item.producto_id,
        nombre: item.nombre,
        precio_unit: item.precio_unit,
        cantidad: item.cantidad
      })),
      subtotal: this.subtotal,
      impuestos: this.impuestos,
      envio: this.envio, // Incluir costo de envío
      total: this.total,
      tipoEnvio: this.formData.tipoEnvio // Tipo de envío seleccionado
    };

    this.http.post('http://localhost:3000/api/ordenes', pedidoData).subscribe({
      next: (response: any) => {
        this.procesando = false;
        
        this.router.navigate(['/confirmacion-pedido'], {
          queryParams: {
            codigo: response.codigo,
            total: response.total,
            email: this.formData.email
          }
        });
      },
      error: (error) => {
        console.error('Error confirmando pedido:', error);
        this.procesando = false;
        this.mostrarMensaje('Error al procesar el pedido: ' + (error.error?.error || 'Error desconocido'), 'error');
      }
    });
  }

  validarFormulario(): boolean {
    return !!(this.formData.nombre && 
              this.formData.email && 
              this.formData.telefono && 
              this.formData.direccion && 
              this.formData.ciudad);
  }

  limpiarCarrito() {
    this.items.forEach(item => {
      this.cartService.removeFromCart(item.id).subscribe();
    });
  }

  mostrarMensaje(mensaje: string, tipo: 'success' | 'error') {
    this.mensaje = mensaje;
    this.tipoMensaje = tipo;
    setTimeout(() => {
      this.mensaje = '';
      this.tipoMensaje = '';
    }, 5000);
  }
}