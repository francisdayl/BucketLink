import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLandingComponent } from './registro-landing.component';

describe('RegistroLandingComponent', () => {
  let component: RegistroLandingComponent;
  let fixture: ComponentFixture<RegistroLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
