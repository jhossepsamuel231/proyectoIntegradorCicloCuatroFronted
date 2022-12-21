import { CargoJunta } from "./CargoJunta.model";
import { Persona } from "./Persona.model";
import { Solicitud } from "./Solicitud.model";

export class JuntaDirectiva {
    idJuntaDirectiva: number;
    estadoJuntaDirectiva: number;
    cargoJunta: CargoJunta;
    organizacionSocial: string;
    persona: Persona;
    solicitudJunta: Solicitud;

    constructor() {
        this.estadoJuntaDirectiva = 0;
        this.cargoJunta = this.cargoJunta;
        this.persona = this.persona;
        this.solicitudJunta = this.solicitudJunta;
    }
}