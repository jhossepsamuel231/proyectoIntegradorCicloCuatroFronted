import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router, private solicitudService: solicitudService) { }

  ngOnInit(): void {
  }

  registrarUsuario() {
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
      }, error: (err) => {
        console.log(err);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Cuenta Creada Correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    this.router.navigate(['/principal-panel/login']);
  }


}
