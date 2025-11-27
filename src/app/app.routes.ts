import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./components/galeria-productos/galeria-productos').then(m => m.GaleriaProductos) 
  },
  { 
    path: 'productos', 
    loadComponent: () => import('./components/galeria-productos/galeria-productos').then(m => m.GaleriaProductos) 
  }
];