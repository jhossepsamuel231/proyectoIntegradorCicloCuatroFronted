import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarResolucionComponent } from './registrar-resolucion.component';

describe('RegistrarResolucionComponent', () => {
  let component: RegistrarResolucionComponent;
  let fixture: ComponentFixture<RegistrarResolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarResolucionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarResolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
