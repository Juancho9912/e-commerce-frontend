import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotografiaProductoComponent } from './fotografia-producto.component';

describe('FotografiaProductoComponent', () => {
  let component: FotografiaProductoComponent;
  let fixture: ComponentFixture<FotografiaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotografiaProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotografiaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
