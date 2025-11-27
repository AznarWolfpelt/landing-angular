import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

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
    private router: Router
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
      } else {
        // Si no hay datos, redirigir al inicio
        this.router.navigate(['/']);
      }
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
  }
}