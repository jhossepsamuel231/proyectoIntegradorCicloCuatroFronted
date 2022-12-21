import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/Usuario.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: IUsuario;

  constructor(private router: Router) {
    let usuario_session = sessionStorage.getItem('usuarioLogged');
    this.usuario = JSON.parse(usuario_session!)
  }

  ngOnInit(): void {
  }

  principal() {
    this.router.navigate(['/admin-panel/dashboard']);
  }

  cerrarSesion() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuarioLogged');
    this.router.navigate(['/principal-panel/vista-publica'])
  }

}
