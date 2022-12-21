import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Documento } from '../models/Documento';

@Injectable({
  providedIn: 'root'
})
export class DocumentoServiceService {

  constructor(private http: HttpClient) { }

  getDocumentos() {
    return this.http.get<Documento[]>(`http://localhost:8181/api/subGerencia/listar-informes`);
  }

  createDocumento(documento: Documento) {
    return this.http.post(`http://localhost:8181/api/subGerencia/crear-informe-tecnico`, documento);
  }


}
