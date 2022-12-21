import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPublicaComponent } from './vista-publica.component';

describe('VistaPublicaComponent', () => {
  let component: VistaPublicaComponent;
  let fixture: ComponentFixture<VistaPublicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPublicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaPublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
