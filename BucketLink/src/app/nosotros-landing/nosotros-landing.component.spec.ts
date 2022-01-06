import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosLandingComponent } from './nosotros-landing.component';

describe('NosotrosLandingComponent', () => {
  let component: NosotrosLandingComponent;
  let fixture: ComponentFixture<NosotrosLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrosLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
