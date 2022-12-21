import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICargoJunta } from '../interfaces/CargoJunta.interface';
import { INivelOrganizacion } from '../interfaces/NivelOrganizacion.interface';

@Injectable({
    providedIn: 'root'
})
export class CargoJuntaService {

    endpoint: string = "http://localhost:8181/api"; // http://localhost:8090/api

    constructor(private http: HttpClient) { }

    getCargoJunta() {
        return this.http.get<ICargoJunta[]>(`${this.endpoint}/cargoJunta/cargosJuntas`);
    }

}
