import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEstadoSolicitudComponent } from './ver-estado-solicitud.component';

describe('VerEstadoSolicitudComponent', () => {
  let component: VerEstadoSolicitudComponent;
  let fixture: ComponentFixture<VerEstadoSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEstadoSolicitudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerEstadoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
