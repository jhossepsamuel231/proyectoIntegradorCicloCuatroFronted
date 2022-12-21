import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosDeSolicitudComponent } from './documentos-de-solicitud.component';

describe('DocumentosDeSolicitudComponent', () => {
  let component: DocumentosDeSolicitudComponent;
  let fixture: ComponentFixture<DocumentosDeSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosDeSolicitudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentosDeSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
