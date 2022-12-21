import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enviar-notificacion',
  templateUrl: './enviar-notificacion.component.html',
  styleUrls: ['./enviar-notificacion.component.css']
})
export class EnviarNotificacionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  enviar(){
    this.router.navigate(['/admin-panel/dashboard']);
  }
}
