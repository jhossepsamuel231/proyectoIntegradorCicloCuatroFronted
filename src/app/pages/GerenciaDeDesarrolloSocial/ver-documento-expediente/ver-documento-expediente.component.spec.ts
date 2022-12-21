import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDocumentoExpedienteComponent } from './ver-documento-expediente.component';

describe('VerDocumentoExpedienteComponent', () => {
  let component: VerDocumentoExpedienteComponent;
  let fixture: ComponentFixture<VerDocumentoExpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDocumentoExpedienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerDocumentoExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
