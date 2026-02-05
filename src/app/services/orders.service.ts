import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

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
private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createOrder(orderData: OrderData, sessionId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/pedidos/crear`, {
      ...orderData,
      session_id: sessionId
    });
  }
}