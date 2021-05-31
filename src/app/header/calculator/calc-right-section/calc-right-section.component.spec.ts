import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcRightSectionComponent } from './calc-right-section.component';

describe('CalcRightSectionComponent', () => {
  let component: CalcRightSectionComponent;
  let fixture: ComponentFixture<CalcRightSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcRightSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcRightSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
