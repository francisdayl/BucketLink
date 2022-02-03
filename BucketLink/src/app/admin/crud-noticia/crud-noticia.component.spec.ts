import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudNoticiaComponent } from './crud-noticia.component';

describe('CrudNoticiaComponent', () => {
  let component: CrudNoticiaComponent;
  let fixture: ComponentFixture<CrudNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudNoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
