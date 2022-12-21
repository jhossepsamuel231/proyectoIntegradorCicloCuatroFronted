import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDocumentosSolicitudComponent } from './ver-documentos-solicitud.component';

describe('VerDocumentosSolicitudComponent', () => {
  let component: VerDocumentosSolicitudComponent;
  let fixture: ComponentFixture<VerDocumentosSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDocumentosSolicitudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerDocumentosSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
