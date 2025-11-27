import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-galeria-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria-productos.html',
  styleUrls: ['./galeria-productos.css']
})
export class GaleriaProductos implements OnInit {
  productos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/api/productos')
      .subscribe({
        next: (data) => {
          this.productos = data;
          console.log('Productos cargados:', data);
        },
        error: (error) => {
          console.error('Error:', error);
        }
      });
  }
}