import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

   private apiUrl = 'http://localhost:3000/email';

  constructor(private http: HttpClient) { }
  sendEmail(nombre: string, email: string) {
    return this.http.post(`${this.apiUrl}/send`, { nombre, email });
  }
}
