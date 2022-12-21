import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarInformeTecnicoComponent } from './registrar-informe-tecnico.component';

describe('RegistrarInformeTecnicoComponent', () => {
  let component: RegistrarInformeTecnicoComponent;
  let fixture: ComponentFixture<RegistrarInformeTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarInformeTecnicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarInformeTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
