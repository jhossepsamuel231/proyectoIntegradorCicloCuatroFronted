import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarJuntaDirectivaSoliActualizarComponent } from './agregar-junta-directiva-soli-actualizar.component';

describe('AgregarJuntaDirectivaSoliActualizarComponent', () => {
  let component: AgregarJuntaDirectivaSoliActualizarComponent;
  let fixture: ComponentFixture<AgregarJuntaDirectivaSoliActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarJuntaDirectivaSoliActualizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarJuntaDirectivaSoliActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
