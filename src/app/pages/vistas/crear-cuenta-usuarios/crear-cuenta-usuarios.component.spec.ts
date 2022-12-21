import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCuentaUsuariosComponent } from './crear-cuenta-usuarios.component';

describe('CrearCuentaUsuariosComponent', () => {
  let component: CrearCuentaUsuariosComponent;
  let fixture: ComponentFixture<CrearCuentaUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCuentaUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCuentaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
