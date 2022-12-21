import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Solicitud } from '../models/Solicitud.model';
import { UsuarioDto } from 'src/app/models/UsuarioDto.model';
import { solicitudDto } from '../models/SolicitudDto.model';
import { JuntaDirectivaDto } from '../models/JuntaDirectivaDto.model';
import { JuntaDirectiva } from '../models/JuntaDirectiva.model';
import { DocumentoDto } from '../models/DocumentoDto.model';
import { Notificacion } from '../models/Notificacion.model';

@Injectable({
  providedIn: 'root'
})
export class solicitudService {

  endpoint: string = "http://localhost:8181/api"; // http://localhost:8090/api

  constructor(private http: HttpClient) { }

  crearSolcitud(solicitudDto: solicitudDto) {
    return this.http.post(`${this.endpoint}/solicitud/crearSolicitud`, solicitudDto);
  }

  crearJuntaDirectiva(juntaDirectivaDto: JuntaDirectivaDto, idSolicitud: any) {
    return this.http.post(`${this.endpoint}/solicitud/crearSolicitudJuntaDirectiva/${idSolicitud}`, juntaDirectivaDto);
  }

  listarJuntaDirectivaDelSolicitante(idSolicitud: any) {
    return this.http.get<JuntaDirectiva>(`${this.endpoint}/solicitud/listJuntaDirectivaDeSolicitante/${idSolicitud}`);
  }

  registrarDocumentosSolicitud(documentoDto: any, idSolicitud: number) {
    return this.http.post(`${this.endpoint}/solicitud/guardar-documentos-solicitud/${idSolicitud}`, { documentosRequisitos: documentoDto });
  }


  //actualizar organizacion

  crearSolcitudActualizarOrganizacion(solicitudDto: solicitudDto) {
    return this.http.post(`${this.endpoint}/solicitud/actualizarSolicitudOrganizacion`, solicitudDto);
  }


  //

  listarSoliParaMesaDePartes() {
    return this.http.get<Solicitud[]>(`${this.endpoint}/mesaDePartes/listarSolicitudesMesaDePartes`);
  }

  DerivarSolicitud(idSolicitud: any, area: String) {
    return this.http.get<Solicitud[]>(`${this.endpoint}/mesaDePartes/actualizarEstado/${idSolicitud}/${area}`);
  }

  crearUsuario(usuarioDto: UsuarioDto) {
    return this.http.post<UsuarioDto[]>(`${this.endpoint}/usuarios/crear-usuario`, usuarioDto);
  }


  buscarSolicitudPorId(idSolicitud: number) {
    return this.http.get<Solicitud>(`${this.endpoint}/gerencia/listarSoliParaResolucion/${idSolicitud}`);
  }

  verificarRegistroSolicitud(idUsuario: number) {
    return this.http.get<Solicitud>(`${this.endpoint}/usuarios/verificarRegistroSolicitud/${idUsuario}`);
  }

  verificarRegistradoSolicitud(idUsuario: number) {
    return this.http.get<Solicitud>(`${this.endpoint}/usuarios/verificarRegistradoSolicitud/${idUsuario}`);
  }

  //usuarios
  listadoSolicitudPorUsuario(idUsuario: number) {
    return this.http.get<Solicitud[]>(`${this.endpoint}/usuarios/listadoSolicitudPorUsuario/${idUsuario}`);
  }

  listadoNotificacionPorUsuario(idUsuario: number) {
    return this.http.get<Notificacion[]>(`${this.endpoint}/usuarios/listadoNotificacionPorUsuario/${idUsuario}`);
  }


}
