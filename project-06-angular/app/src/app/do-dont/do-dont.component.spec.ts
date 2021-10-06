import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoDontComponent } from './do-dont.component';

describe('DoDontComponent', () => {
  let component: DoDontComponent;
  let fixture: ComponentFixture<DoDontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoDontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoDontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
