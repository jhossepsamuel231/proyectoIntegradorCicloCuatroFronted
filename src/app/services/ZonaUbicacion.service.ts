import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IZonaUbicacion } from '../interfaces/ZonaUbicacion.interface';

@Injectable({
  providedIn: 'root'
})
export class ZonaUbicacionService {

  endpoint: string = "http://localhost:8181/api"; // http://localhost:8090/api

  constructor(private http: HttpClient) { }

  getZonaUbicacion() {
      return this.http.get<IZonaUbicacion[]>(`${this.endpoint}/zonaUbicacion/listarZonaUbic`);
  }
}
