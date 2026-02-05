import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-galeria-productos',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './galeria-productos.html',
  styleUrls: ['./galeria-productos.css']
})
export class GaleriaProductos implements OnInit {
  productos: any[] = [];
  productosFiltrados: any[] = [];
  categorias: string[] = [];
  
  // Filtros
  busqueda: string = '';
  categoria: string = '';
  
  // Paginación
  paginaActual: number = 1;
  productosPorPagina: number = 6;
  totalPaginas: number = 1;
  
  // Estados
  cargando: boolean = true;
  hayFiltros: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.cargarProductos();
    this.cargarCategorias();
  }

  private apiUrl = environment.apiUrl;

  cargarProductos() {
    this.cargando = true;
    this.http.get<any[]>(`${this.apiUrl}/productos`)
      .subscribe({
        next: (data) => {
          this.productos = data;
          this.aplicarFiltros();
          this.cargando = false;
        },
        error: (error) => {
          console.error('Error:', error);
          this.cargando = false;
        }
      });
  }

  cargarCategorias() {
    this.http.get<any[]>('http://localhost:3000/api/productos')
      .subscribe({
        next: (data) => {
          // Extraer categorías únicas
          this.categorias = [...new Set(data.map(p => p.categoria))].filter(c => c);
        }
      });
  }

  aplicarFiltros() {
    let filtrados = [...this.productos];
    
    // Filtro de búsqueda
    if (this.busqueda) {
      const busquedaLower = this.busqueda.toLowerCase();
      filtrados = filtrados.filter(producto => 
        producto.nombre.toLowerCase().includes(busquedaLower) ||
        (producto.descripcion && producto.descripcion.toLowerCase().includes(busquedaLower))
      );
    }
    
    // Filtro de categoría
    if (this.categoria) {
      filtrados = filtrados.filter(producto => producto.categoria === this.categoria);
    }
    
    this.productosFiltrados = filtrados;
    this.totalPaginas = Math.ceil(this.productosFiltrados.length / this.productosPorPagina);
    this.paginaActual = 1;
    this.hayFiltros = !!this.busqueda || !!this.categoria;
  }

  limpiarFiltros() {
    this.busqueda = '';
    this.categoria = '';
    this.aplicarFiltros();
  }

  cambiarPagina(pagina: number) {
    this.paginaActual = pagina;
  }

  get productosPagina() {
    const inicio = (this.paginaActual - 1) * this.productosPorPagina;
    const fin = inicio + this.productosPorPagina;
    return this.productosFiltrados.slice(inicio, fin);
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

  // Helper para mostrar stock
  mostrarStock(producto: any): string {
    if (producto.stock <= 0) return 'AGOTADO';
    if (producto.stock < 5) return `Solo ${producto.stock} disponible${producto.stock !== 1 ? 's' : ''}`;
    return '';
  }
}