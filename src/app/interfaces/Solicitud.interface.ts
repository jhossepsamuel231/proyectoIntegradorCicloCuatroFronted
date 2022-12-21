import { INivelOrganizacion } from "./NivelOrganizacion.interface";
import { ITipoOrganizacion } from "./TipoOrganizacion.interface";
import { IZonaUbicacion } from "./ZonaUbicacion.interface";

export interface ISolicitud{
    idSolicitud: number;
    nombreOrganizacion: string;
    direccionSolicitud: string;
    nivelOrganizacionSocial: INivelOrganizacion;
    tipoOrganizacionSocial: ITipoOrganizacion;
    zonaUbicacion: IZonaUbicacion;
}