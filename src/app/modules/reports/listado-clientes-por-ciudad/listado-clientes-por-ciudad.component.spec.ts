import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoClientesPorCiudadComponent } from './listado-clientes-por-ciudad.component';

describe('ListadoClientesPorCiudadComponent', () => {
  let component: ListadoClientesPorCiudadComponent;
  let fixture: ComponentFixture<ListadoClientesPorCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoClientesPorCiudadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoClientesPorCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
