import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLinkViewComponent } from './profile-link-view.component';

describe('ProfileLinkViewComponent', () => {
  let component: ProfileLinkViewComponent;
  let fixture: ComponentFixture<ProfileLinkViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileLinkViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLinkViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
