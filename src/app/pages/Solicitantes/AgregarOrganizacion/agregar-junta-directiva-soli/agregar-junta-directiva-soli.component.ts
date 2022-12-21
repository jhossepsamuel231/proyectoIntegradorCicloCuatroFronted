import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { ICargoJunta } from 'src/app/interfaces/CargoJunta.interface';
import { JuntaDirectiva } from 'src/app/models/JuntaDirectiva.model';
import { JuntaDirectivaDto } from 'src/app/models/JuntaDirectivaDto.model';
import { CargoJuntaService } from 'src/app/services/CargoJunta.service';
import { solicitudService } from 'src/app/services/Solicitud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-junta-directiva-soli',
  templateUrl: './agregar-junta-directiva-soli.component.html',
  styleUrls: ['./agregar-junta-directiva-soli.component.css']
})
export class AgregarJuntaDirectivaSoliComponent implements OnInit {


  cargoJunta: ICargoJunta[] = [];

  juntaDirectiva: JuntaDirectiva[] = [];

  registrarJuntaDirectiva: JuntaDirectivaDto = new JuntaDirectivaDto();

  constructor(private router: Router,
    private solicitudService: solicitudService,
    private cargoJuntaService: CargoJuntaService) { }

  ngOnInit(): void {
    this.getCargoJunta();
    this.listarJuntaDirectivaDelSolicitante();
  }

  siguiente() {
    
    Swal.fire({
      icon: 'success',
      title: 'Datos Guardados Corectamente',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(['/admin-panel/documentos-agregar-organizacion']);
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

  handleZonaUbicacion(event: Event) {
    const element = event.target as HTMLSelectElement;
    this.registrarJuntaDirectiva.idCargoJunta = parseInt(element.value);
  }



  addJuntaDirectiva() {
    const idSolicitud = localStorage.getItem('idSolicitudCreada');
    this.solicitudService.crearJuntaDirectiva(this.registrarJuntaDirectiva, idSolicitud).subscribe({
      next: (resp: any) => {
        console.log(resp);

        let juntaDirectiva: JuntaDirectivaDto = new JuntaDirectivaDto();
        this.registrarJuntaDirectiva = juntaDirectiva;
        Swal.fire({
          icon: 'success',
          title: 'Datos guardados Correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        this.listarJuntaDirectivaDelSolicitante();
      },
      error: (err: any) => {
        console.log(err)
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
