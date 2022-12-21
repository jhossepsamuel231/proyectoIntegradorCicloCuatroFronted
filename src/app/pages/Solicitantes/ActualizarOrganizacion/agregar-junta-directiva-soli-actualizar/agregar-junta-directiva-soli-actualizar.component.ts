import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICargoJunta } from 'src/app/interfaces/CargoJunta.interface';
import { JuntaDirectiva } from 'src/app/models/JuntaDirectiva.model';
import { JuntaDirectivaDto } from 'src/app/models/JuntaDirectivaDto.model';
import { CargoJuntaService } from 'src/app/services/CargoJunta.service';
import { solicitudService } from 'src/app/services/Solicitud.service';

@Component({
  selector: 'app-agregar-junta-directiva-soli-actualizar',
  templateUrl: './agregar-junta-directiva-soli-actualizar.component.html',
  styleUrls: ['./agregar-junta-directiva-soli-actualizar.component.css']
})
export class AgregarJuntaDirectivaSoliActualizarComponent implements OnInit {

  cargoJunta: ICargoJunta[] = [];

  juntaDirectiva: JuntaDirectiva[] = [];

  registrarJuntaDirectiva: JuntaDirectivaDto = new JuntaDirectivaDto();

  constructor(private router: Router,
    private solicitudService: solicitudService,
    private cargoJuntaService: CargoJuntaService) { }

  ngOnInit(): void {

  }

  siguiente() {
    this.router.navigate(['/admin-panel/documentos-actualizar-organizacion']);
  }


  getCargoJunta() {
    this.cargoJuntaService.getCargoJunta().subscribe({
      next: (resp: ICargoJunta[]) => {
        console.log(resp);
        this.cargoJunta = resp;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  listarJuntaDirectivaDelSolicitante() {
    const idSolicitud = localStorage.getItem('idSolicitudCreada');
    this.solicitudService.listarJuntaDirectivaDelSolicitante(+idSolicitud).subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.juntaDirectiva = resp;
      }
    })
  }



}
