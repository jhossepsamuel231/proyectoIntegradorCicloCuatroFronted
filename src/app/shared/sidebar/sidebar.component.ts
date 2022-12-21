import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/Usuario.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usuario: IUsuario;

  constructor(private router: Router) { 
    let usuario_session = sessionStorage.getItem('usuarioLogged');
    this.usuario = JSON.parse(usuario_session!)
  }

  ngOnInit(): void {
    
  }
  

}
