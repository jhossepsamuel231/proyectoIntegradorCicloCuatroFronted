import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  iniciarSesion() {

    this.authService.login(this.usuario).subscribe({
      next: (resp: any) => {
        // Get Token
        let token: string = resp.headers.get('Authorization');
        this.authService.getPayloadToken(token);
        // Obtener solo el token y quitar el Bearer
        token = token.replace('Bearer ', '')
        sessionStorage.setItem('token', token)
        this.router.navigate(['/admin-panel/dashboard']);
      },
      error: (err) => {
        console.log(err);

      }
    })

  }

  registrarSolicitud() {
    this.router.navigate(['/principal-panel/crear-cuenta']);
  }


}