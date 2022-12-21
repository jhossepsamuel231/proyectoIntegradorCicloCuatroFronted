import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarNuevoRequisitoComponent } from './asignar-nuevo-requisito.component';

describe('AsignarNuevoRequisitoComponent', () => {
  let component: AsignarNuevoRequisitoComponent;
  let fixture: ComponentFixture<AsignarNuevoRequisitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarNuevoRequisitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarNuevoRequisitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
