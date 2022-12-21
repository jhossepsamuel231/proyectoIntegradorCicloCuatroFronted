import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTipoEmpleadoComponent } from './registrar-tipo-empleado.component';

describe('RegistrarTipoEmpleadoComponent', () => {
  let component: RegistrarTipoEmpleadoComponent;
  let fixture: ComponentFixture<RegistrarTipoEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarTipoEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarTipoEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
