import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InformeTecnicoDto } from '../models/InformeTecnicoDto.model';
import { Requisito } from '../models/Requisito.model';
import { Solicitud } from '../models/Solicitud.model';

@Injectable({
    providedIn: 'root'
})
export class SubGerenciaDeDesarrolloSocialService {

    endpoint: string = "http://localhost:8181/api"; // http://localhost:8090/api

    constructor(private http: HttpClient) { }


    listarParaSubirInformetecnico() {
        return this.http.get<Solicitud[]>(`${this.endpoint}/subGerencia/listarSoliParaSubirInformeTecnico`);
    }

    buscarSoliPorCodigoParaRegistrarInformeTecnico(codigo: String) {
        return this.http.get<Solicitud[]>(`${this.endpoint}/gerencia/buscarSoliParaResolucion?codigo=${codigo}`);
    }

    registrarInformeTecnico(informTecnicoDto: InformeTecnicoDto, idSolicitud: any){
        return this.http.post<InformeTecnicoDto>(`${this.endpoint}/subGerencia/crear-informe-tecnico/${idSolicitud}`, informTecnicoDto)
    }

    //buscar para subir informe tecnico
    buscarSolicitudParaSubirInformeTecnico(codigoSolicitud: string) {
        return this.http.get<Solicitud>(`${this.endpoint}/subGerencia/buscarSolicitudParaSubirInformeTecnico/${codigoSolicitud}`)
    }

}
