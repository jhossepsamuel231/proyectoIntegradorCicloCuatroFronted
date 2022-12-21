import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/Usuario.interface';

@Component({
  selector: 'app-vista-usuarios-logeados',
  templateUrl: './vista-usuarios-logeados.component.html',
  styleUrls: ['./vista-usuarios-logeados.component.css']
})
export class VistaUsuariosLogeadosComponent implements OnInit {

  usuario: IUsuario;

  constructor(private router: Router) { 
    let usuario_session = sessionStorage.getItem('usuarioLogged');
    this.usuario = JSON.parse(usuario_session!)
  }
  ngOnInit(): void {
  }

  uno(){
    this.router.navigate(['/admin-panel/solictud-agregar-organizacion']);
  }

  dos(){
    this.router.navigate(['/admin-panel/solictud-agregar-organizacion']);
  }

  tres(){
    this.router.navigate(['/admin-panel/ver-estado-solicitud']);
  }

  cuatro(){
    this.router.navigate(['/admin-panel/lista-solicitudes']);
  }

  cinco(){
    this.router.navigate(['/admin-panel/lista-notificaciones']);
  }

  seis(){
    this.router.navigate(['/admin-panel/lista-solicitudes']);
  }
}
