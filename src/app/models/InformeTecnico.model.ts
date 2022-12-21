import { Solicitud } from "./Solicitud.model";

export class InformeTecnico{
    idInformeTecnico: number;
    codigoInformeTecnico: string;
    descripcion: string;
    docInformeTecnico: string;
    resultado: string;
    fechaEmision: Date;
    empleado: string;
    solicitud: Solicitud;
}