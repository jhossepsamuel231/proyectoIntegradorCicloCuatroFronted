import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario.model';
import { IUsuario } from '../interfaces/Usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /* auth_token: string = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb3NlbWFudWVsIiwiZXhwIjoxNjcxNjM1OTI0LCJpZF91c3VhcmlvIjoxLCJub21icmUiOiJKb3NlIE1hbnVlbCIsInJvbCI6IkFETUlOX1JPTEUifQ.eIIzondQxEHedJU9jtGI6uHEql31pARf4BC6S2CK7YQ";
  */
  usuarioLogged: IUsuario;

  constructor(private http: HttpClient) { }
  
  login(usuario: Usuario){
    console.log(usuario)
    return this.http.post("http://localhost:8181/api/login", usuario, {observe: 'response'});
  }

  getPayloadToken(token: string){
    let payload = JSON.parse(atob(token.split(".")[1]));
    delete payload.sub;
    delete payload.exp;
    this.usuarioLogged = payload;    
    sessionStorage.setItem("usuarioLogged", JSON.stringify(this.usuarioLogged))
  }

}
