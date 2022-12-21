import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Requisito } from '../models/Requisito.model';

@Injectable({
    providedIn: 'root'
})
export class VistaPublicaService {

    endpoint: string = "http://localhost:8181/api"; // http://localhost:8090/api

    constructor(private http: HttpClient) { }

    listarRequisitos() {
        return this.http.get<Requisito[]>(`${this.endpoint}/vistaPublica/listarRequsitos`);
    }

}
