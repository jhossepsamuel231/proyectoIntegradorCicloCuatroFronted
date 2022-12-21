import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Requisito } from 'src/app/models/Requisito.model';
import { VistaPublicaService } from 'src/app/services/VistaPublica.service';
import Swal from 'sweetalert2';
import { solicitudService } from 'src/app/services/Solicitud.service';

@Component({
  selector: 'app-documentos-actualizar-organizacion',
  templateUrl: './documentos-actualizar-organizacion.component.html',
  styleUrls: ['./documentos-actualizar-organizacion.component.css']
})
export class DocumentosActualizarOrganizacionComponent implements OnInit {

  documentos: string[];
  enviarDocumentos: any[];
  requisito: Requisito[] = [];
  loading: boolean = false;


  constructor(private storage: Storage,
    private router: Router,
    private vistaPublicaService: VistaPublicaService,
    private solicitudService: solicitudService) {
    this.documentos = [];
    this.enviarDocumentos = [];
  }


  ngOnInit(): void {
    this.listarRequisitos();
    //this.getFile();
  }


  listarRequisitos() {
    this.vistaPublicaService.listarRequisitos().subscribe({
      next: (requisito: Requisito[]) => {
        this.requisito = requisito.filter((req: Requisito) => req.alcance == 2);
        console.log(requisito);
      }
    })
  }


  selectFile(event: any, indice: number) {
    this.requisito[indice].file = event.target.files[0];

    let blob = new Blob(event.target.files, { type: event.target.files[0].type });
    this.requisito[indice].verDocumento = window.URL.createObjectURL(blob);

    console.log(this.requisito);
  }

  verDocumento(url: any) {
    window.open(url, "_blank");
  }


  async subirArchivos() {

    const idSolicitud = localStorage.getItem('idSolicitudActualizacionCreada');

    for (let index = 0; index < this.requisito.length; index++) {
      if (!this.requisito[index].file) {
        console.log("falta subir doc p")
        return;
      }
    }

    this.loading = true;

    for (let index = 0; index < this.requisito.length; index++) {

      // Obtener el tipo de documento (pdf, xlsx, png)
      const tipo_documento = this.requisito[index].file.name.split('.').at(-1)!;

      // Asignar referencia a donde se subira el documento
      const imgRef = ref(this.storage, `solicitudActualizarOrganizacion/${uuidv4()}.${tipo_documento}`)

      // Subir el documento
      const result = await uploadBytes(imgRef, this.requisito[index].file);

      // Obtener el url del documento
      const url = await getDownloadURL(result.ref);

      this.requisito[index].file = url;

    }

    console.log(this.requisito)

    this.solicitudService.registrarDocumentosSolicitud(this.requisito, +idSolicitud).subscribe({
      next: (resp: any) => {
        this.loading = false;
        localStorage.removeItem("idSolicitudActualizacionCreada");
        Swal.fire({
          icon: 'success',
          title: 'Solicitud Enviada Correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl('/admin-panel/dashboard');
        console.log(resp)
      }, error: (err: any) => {
        this.loading = false;
        console.log(err);
      }
    })


  }


}
