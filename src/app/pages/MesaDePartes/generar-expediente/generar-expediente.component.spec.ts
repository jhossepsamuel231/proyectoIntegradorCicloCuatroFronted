import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarExpedienteComponent } from './generar-expediente.component';

describe('GenerarExpedienteComponent', () => {
  let component: GenerarExpedienteComponent;
  let fixture: ComponentFixture<GenerarExpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarExpedienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
