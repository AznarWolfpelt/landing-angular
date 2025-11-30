import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service'; // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-confirmacion-pedido',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './confirmacion-pedido.html',
  styleUrls: ['./confirmacion-pedido.css']
})
export class ConfirmacionPedido implements OnInit {
  pedidoData: any = null;
  cargando: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService // ← Agregar este servicio
  ) {}

  ngOnInit() {
    // Obtener datos del pedido desde los parámetros de ruta o estado
    this.route.queryParams.subscribe(params => {
      if (params['codigo']) {
        this.pedidoData = {
          codigo: params['codigo'],
          total: params['total'],
          email: params['email'],
          fecha: new Date().toLocaleString('es-ES')
        };
        this.cargando = false;
        
        // ✅ LIMPIAR CARRITO DESPUÉS DE CONFIRMAR
        this.limpiarCarrito();
      } else {
        // Si no hay datos, redirigir al inicio
        this.router.navigate(['/']);
      }
    });
  }

  // ✅ NUEVO MÉTODO PARA LIMPIAR CARRITO
private limpiarCarrito() {
  console.log('🔍 CONFIRMACION - Limpiando carrito...');
  this.cartService.clearCart().subscribe({
    next: (response) => console.log('✅ Carrito limpiado:', response),
    error: (error) => console.error('❌ Error limpiando carrito:', error)
  });
}

  // También podemos recibir datos por estado (si vienen del checkout)
  recibirDatosDesdeCheckout(datos: any) {
    this.pedidoData = {
      codigo: datos.codigo,
      total: datos.total,
      email: datos.email,
      fecha: new Date().toLocaleString('es-ES')
    };
    this.cargando = false;
    
    // ✅ LIMPIAR CARRITO TAMBIÉN AQUÍ
    this.limpiarCarrito();
  }
}