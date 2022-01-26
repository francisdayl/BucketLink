import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularViewComponent } from './celular-view.component';

describe('CelularViewComponent', () => {
  let component: CelularViewComponent;
  let fixture: ComponentFixture<CelularViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelularViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelularViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
