import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosActualizarOrganizacionComponent } from './documentos-actualizar-organizacion.component';

describe('DocumentosActualizarOrganizacionComponent', () => {
  let component: DocumentosActualizarOrganizacionComponent;
  let fixture: ComponentFixture<DocumentosActualizarOrganizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosActualizarOrganizacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentosActualizarOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
