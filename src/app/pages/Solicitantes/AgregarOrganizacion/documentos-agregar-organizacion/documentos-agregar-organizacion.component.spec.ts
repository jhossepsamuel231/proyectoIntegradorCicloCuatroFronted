import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosAgregarOrganizacionComponent } from './documentos-agregar-organizacion.component';

describe('DocumentosAgregarOrganizacionComponent', () => {
  let component: DocumentosAgregarOrganizacionComponent;
  let fixture: ComponentFixture<DocumentosAgregarOrganizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosAgregarOrganizacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentosAgregarOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
