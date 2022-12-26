import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDto } from 'src/app/models/UsuarioDto.model';
import { solicitudService } from 'src/app/services/Solicitud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-cuenta-usuarios',
  templateUrl: './crear-cuenta-usuarios.component.html',
  styleUrls: ['./crear-cuenta-usuarios.component.css']
})
export class CrearCuentaUsuariosComponent implements OnInit {

  solicitudDto: UsuarioDto = new UsuarioDto();

  @ViewChild('myCheckbox') myCheckbox;


  constructor(private router: Router, private solicitudService: solicitudService) { }

  ngOnInit(): void {
  }

  validarCheck(event: any) {
    console.log(event.checked);
  }

  registrarUsuario() {
    /* console.log(this.myCheckbox);
    console.log(this.myCheckbox.nativeElement.checked);
    return; */
    if (!this.solicitudDto.dni.trim()
      || !this.solicitudDto.password.trim()
      || !this.solicitudDto.nombrePersona.trim()
      || !this.solicitudDto.apellidoPaterno.trim()
      || !this.solicitudDto.apellidoMaterno.trim()
      || !this.solicitudDto.correo.trim()
      || !this.solicitudDto.telefono.trim()
      || !this.solicitudDto.domicilio.trim()
      || !this.solicitudDto.fechaNacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Rellene Todos Los Datos, Por favor!',
      })
      return;
    }

    if (!this.myCheckbox.nativeElement.checked) {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor aceptar los terminos y condiciones!',
      })
      return;
    }
    console.log(this.solicitudDto);
    this.solicitudService.crearUsuario(this.solicitudDto).subscribe({
      next: (resp: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Cuenta Creada Correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/principal-panel/login']);
      }, error: (err) => {
        console.log(err);
        this.router.navigate(['/principal-panel/login']);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Cuenta Creada Correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    /* this.router.navigate(['/principal-panel/login']); */
  }


}
