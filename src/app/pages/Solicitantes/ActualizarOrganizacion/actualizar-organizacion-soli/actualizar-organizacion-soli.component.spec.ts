import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarOrganizacionSoliComponent } from './actualizar-organizacion-soli.component';

describe('ActualizarOrganizacionSoliComponent', () => {
  let component: ActualizarOrganizacionSoliComponent;
  let fixture: ComponentFixture<ActualizarOrganizacionSoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarOrganizacionSoliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarOrganizacionSoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
