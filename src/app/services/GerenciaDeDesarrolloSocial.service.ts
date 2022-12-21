import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Documento } from '../models/Documento';
import { InformeTecnico } from '../models/InformeTecnico.model';
import { Notificacion } from '../models/Notificacion.model';
import { Requisito } from '../models/Requisito.model';
import { ResolucionDto } from '../models/ResolucionDto';
import { Solicitud } from '../models/Solicitud.model';

@Injectable({
    providedIn: 'root'
})
export class GerenciaDeDesarrolloSocialService {

    endpoint: string = "http://localhost:8181/api"; // http://localhost:8090/api

    constructor(private http: HttpClient) { }

    /* primera Parte */

    ListarParaPrimeraRevision() {
        return this.http.get<Solicitud[]>(`${this.endpoint}/gerencia/listarSoliParaPrimeraRevision`);
    }

    ListarSoliDocParaPrimeraRevision(idSolicitud: any) {
        return this.http.get<Documento[]>(`${this.endpoint}/gerencia/listarSoliDocParaPrimeraRevision/${idSolicitud}`);
    }

    /* parte dos */

    listarInformesTecnicosParaRegistroResolucion() {
        return this.http.get<InformeTecnico[]>(`${this.endpoint}/gerencia/listarParaRegistrarResolucion`)

    }

    buscarSoliParaRegistrarResolucion(idInformeTecnico: any) {
        return this.http.get<InformeTecnico>(`${this.endpoint}/gerencia/listadoSoliParaRegistrar/${idInformeTecnico}`)
    }

    buscarSoliPorCodigoParaRegistrarResolucion(codigo: String) {
        return this.http.get<Solicitud[]>(`${this.endpoint}/gerencia/buscarSoliParaResolucion?codigo=${codigo}`);
    }

    registrarResolucion(resolucionDto: ResolucionDto, idSolicitud: number) {
        return this.http.post<ResolucionDto>(`${this.endpoint}/gerencia/registrar-resolucion-orgSocial/${idSolicitud}`, resolucionDto)
    }

    enviarNotificacion(notificacion: Notificacion, idSolicitud: number) {
        return this.http.post<Notificacion>(`${this.endpoint}/gerencia/enviarNotificacion/${idSolicitud}`, notificacion)
    }

    //buscador registrar resolucion

    buscarSolicitudParaRegistrarResolucion(codigoInformeTecnico: string) {
        return this.http.get<InformeTecnico>(`${this.endpoint}/gerencia/buscarSoliParaRegistrarResolucion/${codigoInformeTecnico}`)
    }

}
