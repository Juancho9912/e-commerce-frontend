import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetChangeComponent } from './reset-change.component';

describe('ResetChangeComponent', () => {
  let component: ResetChangeComponent;
  let fixture: ComponentFixture<ResetChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
