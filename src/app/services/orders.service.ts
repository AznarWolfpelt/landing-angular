import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OrderData {
  nombre: string;
  email: string;
  telefono: string;
  direccion: string;
  ciudad: string;
  notas?: string;
  subtotal: number;
  impuestos: number;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  createOrder(orderData: OrderData, sessionId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/pedidos/crear`, {
      ...orderData,
      session_id: sessionId
    });
  }
}