import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarJuntaDirectivaSoliComponent } from './agregar-junta-directiva-soli.component';

describe('AgregarJuntaDirectivaSoliComponent', () => {
  let component: AgregarJuntaDirectivaSoliComponent;
  let fixture: ComponentFixture<AgregarJuntaDirectivaSoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarJuntaDirectivaSoliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarJuntaDirectivaSoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
