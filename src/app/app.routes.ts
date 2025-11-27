import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./components/galeria-productos/galeria-productos').then(m => m.GaleriaProductos) 
  },
  { 
    path: 'productos', 
    loadComponent: () => import('./components/galeria-productos/galeria-productos').then(m => m.GaleriaProductos) 
  },
  { 
    path: 'productos/:id', 
    loadComponent: () => import('./components/detalle-producto/detalle-producto').then(m => m.DetalleProducto) 
  },
  { 
    path: 'carrito', 
    loadComponent: () => import('./components/carrito/carrito').then(m => m.Carrito) 
  },
  { 
    path: 'checkout', 
    loadComponent: () => import('./components/checkout/checkout').then(m => m.Checkout) 
  },
  { 
    path: 'confirmacion-pedido', 
    loadComponent: () => import('./components/confirmacion-pedido/confirmacion-pedido').then(m => m.ConfirmacionPedido) 
  }
];