import { Component, OnInit } from '@angular/core';
import { Requisito } from 'src/app/models/Requisito.model';
import { VistaPublicaService } from 'src/app/services/VistaPublica.service';

@Component({
  selector: 'app-vista-publica',
  templateUrl: './vista-publica.component.html',
  styleUrls: ['./vista-publica.component.css']
})
export class VistaPublicaComponent implements OnInit {

  requisito: Requisito[] = [];

  constructor(private vistaPublicaService: VistaPublicaService) { }

  ngOnInit(): void {
    this.listarRequisitos();
    console.log("Vista Publica");
  }

  listarRequisitos() {
    this.vistaPublicaService.listarRequisitos().subscribe({
      next: (requisito: Requisito[]) => {
        this.requisito = requisito;
        console.log(requisito);
      }
    })
  }

  requisitoWord(requisitoDocWord: string) {
    window.open(requisitoDocWord, "_blank");
  }

  requisitoPdf(requisitoDocPdf: string) {
    window.open(requisitoDocPdf, "_blank");
  }

}
