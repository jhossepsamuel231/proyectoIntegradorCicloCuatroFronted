import { NivelOrganizacion } from "./NivelOrganizacion.model";
import { TipoOrganizacion } from "./TipoOrganizacion.model";
import { TipoSolicitud } from "./TipoSolicitud.model";
import { ZonaUbicacion } from "./ZonaUbicacion.model";

export class Solicitud {
    idSolicitud: number;
    nombreOrganizacion: string;
    estadoSolicitd: number;
    codigoSolicitud: string;
    numeroExpediente: string;
    direccionSolicitud: string;
    fechaRegistro: Date;
    nivelOrganizacionSocial: NivelOrganizacion;
    tipoOrganizacion: TipoOrganizacion;
    zonaUbicacion: ZonaUbicacion;
    tipoSolicitud: TipoSolicitud;

    constructor() {
        this.nombreOrganizacion = "";
        this.direccionSolicitud = "";
        this.numeroExpediente = "";
        this.estadoSolicitd = 0;
        this.codigoSolicitud = "";
        this.nivelOrganizacionSocial = this.nivelOrganizacionSocial;
        this.tipoOrganizacion = this.tipoOrganizacion;
        this.zonaUbicacion = this.zonaUbicacion;
        this.tipoSolicitud = this.tipoSolicitud;
    }
}

/* no usado */