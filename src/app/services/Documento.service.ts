import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Documento } from '../models/Documento';

@Injectable({
  providedIn: 'root'
})
export class DocumentoServiceService {

  endpoint: string = "http://localhost:8181/api"; // http://localhost:8090/api

  constructor(private http: HttpClient) { }

  getDocumentos() {
    return this.http.get<Documento[]>(`${this.endpoint}/subGerencia/listar-informes`);
  }

  createDocumento(documento: Documento) {
    return this.http.post(`${this.endpoint}/subGerencia/crear-informe-tecnico`, documento);
  }


}
