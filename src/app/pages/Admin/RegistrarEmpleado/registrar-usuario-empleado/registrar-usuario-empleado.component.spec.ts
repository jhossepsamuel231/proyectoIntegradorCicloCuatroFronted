import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarUsuarioEmpleadoComponent } from './registrar-usuario-empleado.component';

describe('RegistrarUsuarioEmpleadoComponent', () => {
  let component: RegistrarUsuarioEmpleadoComponent;
  let fixture: ComponentFixture<RegistrarUsuarioEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarUsuarioEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarUsuarioEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
