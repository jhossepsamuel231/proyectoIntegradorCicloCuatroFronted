import { Solicitud } from "./Solicitud.model";

export class Notificacion{

    idNotificacion: number;
    resultadoNotificacion: string;
    documentoNotificacion: string;
    correoEnviado: string;
    descripcionNotificacion: string;
    solicitud: Solicitud;
}