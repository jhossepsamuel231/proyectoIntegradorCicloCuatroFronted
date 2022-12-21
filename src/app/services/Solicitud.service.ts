import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Solicitud } from '../models/Solicitud.model';
import { UsuarioDto } from 'src/app/models/UsuarioDto.model';
import { solicitudDto } from '../models/SolicitudDto.model';
import { JuntaDirectivaDto } from '../models/JuntaDirectivaDto.model';
import { JuntaDirectiva } from '../models/JuntaDirectiva.model';
import { DocumentoDto } from '../models/DocumentoDto.model';

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
    return this.http.get<Solicitud[]>(`http://localhost:8181/api/mesaDePartes/listarSolicitudesMesaDePartes`);
  }

  DerivarSolicitud(idSolicitud: any, area: String) {
    return this.http.get<Solicitud[]>(`http://localhost:8181/api/mesaDePartes/actualizarEstado/${idSolicitud}/${area}`);
  }

  crearUsuario(usuarioDto: UsuarioDto) {
    return this.http.post<UsuarioDto[]>(`http://localhost:8181/api/usuarios/crear-usuario`, usuarioDto);
  }


  buscarSolicitudPorId(idSolicitud: number) {
    return this.http.get<Solicitud>(`http://localhost:8181/api/gerencia/listarSoliParaResolucion/${idSolicitud}`);
  }

  verificarRegistroSolicitud(idUsuario: number) {
    return this.http.get<Solicitud>(`http://localhost:8181/api/usuarios/verificarRegistroSolicitud/${idUsuario}`);
  }

}
