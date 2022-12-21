import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpezarRegistroResolucionComponent } from './empezar-registro-resolucion.component';

describe('EmpezarRegistroResolucionComponent', () => {
  let component: EmpezarRegistroResolucionComponent;
  let fixture: ComponentFixture<EmpezarRegistroResolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpezarRegistroResolucionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpezarRegistroResolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
