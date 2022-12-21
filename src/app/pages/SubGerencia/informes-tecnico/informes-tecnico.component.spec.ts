import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesTecnicoComponent } from './informes-tecnico.component';

describe('InformesTecnicoComponent', () => {
  let component: InformesTecnicoComponent;
  let fixture: ComponentFixture<InformesTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesTecnicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformesTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
