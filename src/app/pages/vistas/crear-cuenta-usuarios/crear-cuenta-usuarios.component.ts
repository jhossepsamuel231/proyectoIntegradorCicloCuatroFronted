import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDto } from 'src/app/models/UsuarioDto.model';
import { solicitudService } from 'src/app/services/Solicitud.service';

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
    this.solicitudService.crearUsuario(this.solicitudDto).subscribe((res) => {
      console.log(res);
    })
    this.router.navigate(['/principal-panel/login']);
  }


}
