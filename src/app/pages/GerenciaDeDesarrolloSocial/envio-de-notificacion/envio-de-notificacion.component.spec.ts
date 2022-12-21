import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioDeNotificacionComponent } from './envio-de-notificacion.component';

describe('EnvioDeNotificacionComponent', () => {
  let component: EnvioDeNotificacionComponent;
  let fixture: ComponentFixture<EnvioDeNotificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioDeNotificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvioDeNotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
