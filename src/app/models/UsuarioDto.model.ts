export class UsuarioDto {
    password: string;
    nombrePersona: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    dni: string;
    telefono: string;
    domicilio: string;
    correo: string;
    fechaNacimiento: Date;
    constructor() {
        this.password = "";
        this.nombrePersona = "";
        this.apellidoPaterno = "";
        this.apellidoMaterno = "";
        this.dni = "";
        this.telefono = "";
        this.domicilio = "";
        this.correo = "";
        this.fechaNacimiento = this.fechaNacimiento;
    }
}