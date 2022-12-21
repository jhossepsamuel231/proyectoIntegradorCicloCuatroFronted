import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Requisito } from 'src/app/models/Requisito.model';
import { VistaPublicaService } from 'src/app/services/VistaPublica.service';
import Swal from 'sweetalert2';
import { solicitudService } from 'src/app/services/Solicitud.service';

@Component({
  selector: 'app-documentos-agregar-organizacion',
  templateUrl: './documentos-agregar-organizacion.component.html',
  styleUrls: ['./documentos-agregar-organizacion.component.css']
})
export class DocumentosAgregarOrganizacionComponent implements OnInit {

  documentos: string[];
  enviarDocumentos: any[];
  requisito: Requisito[] = [];
  loading: boolean = false;


  constructor(private storage: Storage, private router: Router, private vistaPublicaService: VistaPublicaService, private solicitudService: solicitudService) {
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
        this.requisito = requisito.filter((req: Requisito) => req.alcance == 1);
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

    const idSolicitud = localStorage.getItem('idSolicitudCreada');

    for (let index = 0; index < this.requisito.length; index++) {
      if (!this.requisito[index].file) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Faltan Documentos para registrar Su Organizacion!'
        })
        console.log("falta subir doc p")
        return;
      }
    }

    this.loading = true;

    for (let index = 0; index < this.requisito.length; index++) {

      // Obtener el tipo de documento (pdf, xlsx, png)
      const tipo_documento = this.requisito[index].file.name.split('.').at(-1)!;

      // Asignar referencia a donde se subira el documento
      const imgRef = ref(this.storage, `requisitos/${uuidv4()}.${tipo_documento}`)

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
        localStorage.removeItem("idSolicitudCreada");
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

  /* uploadFile($event: any) {

    const file = $event.target.files[0];

    this.enviarDocumentos.push(file);

    console.log(this.enviarDocumentos);

    / const docRef = ref(this.storage, `documentos/${file.name}`); /

    / uploadBytes(docRef, file)
      .then(response => {
        console.log(response)
        this.getFile();    
      })
      .catch(error => console.log(error)); /

  }

  envioDocumentos() {
    if (this.enviarDocumentos.length === 10) {

      for (const key of this.enviarDocumentos) {

        console.log(key)

        const docRef = ref(this.storage, `documentos/${key.name}`);

        uploadBytes(docRef, key)
          .then(response => {
            console.log(response)
            this.getFile();
            this.router.navigate(['/admin-panel/dashboard']);
          })
          .catch(error => console.log(error));


      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
    }

  }

  getFile() {

    const docsRef = ref(this.storage, `documentos`)

    listAll(docsRef)
      .then(async response => {
        console.log(response);
        this.documentos = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          this.documentos.push(url);
        }
      })
      .catch(error => console.log(error));

  } */

}
