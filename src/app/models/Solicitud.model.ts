import { NivelOrganizacion } from "./NivelOrganizacion.model";
import { OrganizacionSocial } from "./OrganizacionSocial.model";
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
    correoSolicitante?: string;
    tipoOrganizacion: TipoOrganizacion;
    zonaUbicacion: ZonaUbicacion;
    tipoSolicitud: TipoSolicitud;
    organizacionSocial: OrganizacionSocial;

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
        this.organizacionSocial = this.organizacionSocial;
    }
}

/* no usado */