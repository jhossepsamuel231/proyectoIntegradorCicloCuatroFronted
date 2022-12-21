import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaUsuariosLogeadosComponent } from './vista-usuarios-logeados.component';

describe('VistaUsuariosLogeadosComponent', () => {
  let component: VistaUsuariosLogeadosComponent;
  let fixture: ComponentFixture<VistaUsuariosLogeadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaUsuariosLogeadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaUsuariosLogeadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
