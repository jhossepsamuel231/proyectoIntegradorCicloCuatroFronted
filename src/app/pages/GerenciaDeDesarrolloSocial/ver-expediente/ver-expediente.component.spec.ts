import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerExpedienteComponent } from './ver-expediente.component';

describe('VerExpedienteComponent', () => {
  let component: VerExpedienteComponent;
  let fixture: ComponentFixture<VerExpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerExpedienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
