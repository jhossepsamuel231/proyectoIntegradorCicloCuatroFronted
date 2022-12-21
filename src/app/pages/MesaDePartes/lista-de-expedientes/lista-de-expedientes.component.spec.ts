import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeExpedientesComponent } from './lista-de-expedientes.component';

describe('ListaDeExpedientesComponent', () => {
  let component: ListaDeExpedientesComponent;
  let fixture: ComponentFixture<ListaDeExpedientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeExpedientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeExpedientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
