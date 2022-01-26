import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkEditableComponent } from './link-editable.component';

describe('LinkEditableComponent', () => {
  let component: LinkEditableComponent;
  let fixture: ComponentFixture<LinkEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkEditableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
