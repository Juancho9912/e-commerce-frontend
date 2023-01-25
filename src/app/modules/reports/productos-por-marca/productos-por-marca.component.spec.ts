import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosPorMarcaComponent } from './productos-por-marca.component';

describe('ProductosPorMarcaComponent', () => {
  let component: ProductosPorMarcaComponent;
  let fixture: ComponentFixture<ProductosPorMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosPorMarcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosPorMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
