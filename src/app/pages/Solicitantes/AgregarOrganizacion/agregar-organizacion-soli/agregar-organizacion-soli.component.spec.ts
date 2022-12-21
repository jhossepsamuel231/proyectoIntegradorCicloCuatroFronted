import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarOrganizacionSoliComponent } from './agregar-organizacion-soli.component';

describe('AgregarOrganizacionSoliComponent', () => {
  let component: AgregarOrganizacionSoliComponent;
  let fixture: ComponentFixture<AgregarOrganizacionSoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarOrganizacionSoliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarOrganizacionSoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
