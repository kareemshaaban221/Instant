import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivStylesComponent } from './div-styles.component';

describe('DivStylesComponent', () => {
  let component: DivStylesComponent;
  let fixture: ComponentFixture<DivStylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivStylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
