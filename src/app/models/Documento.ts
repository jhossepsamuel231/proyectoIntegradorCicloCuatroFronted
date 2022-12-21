import { Requisito } from "./Requisito.model";
import { Solicitud } from "./Solicitud.model";

export class Documento {
    idDocumento: number;
    adjuntableDocumento: string;
    solicitudDocumento: Solicitud;
    requisitoDocumento: Requisito;

    constructor(){
        this.adjuntableDocumento = '';
        this.solicitudDocumento = this.solicitudDocumento;
        this.requisitoDocumento=this.requisitoDocumento;
    }

}
