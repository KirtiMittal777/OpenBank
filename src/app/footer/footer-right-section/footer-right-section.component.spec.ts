import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRightSectionComponent } from './footer-right-section.component';

describe('FooterRightSectionComponent', () => {
  let component: FooterRightSectionComponent;
  let fixture: ComponentFixture<FooterRightSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterRightSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterRightSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
