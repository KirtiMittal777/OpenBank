import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOverlayComponent } from './header-overlay.component';

describe('HeaderOverlayComponent', () => {
  let component: HeaderOverlayComponent;
  let fixture: ComponentFixture<HeaderOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
