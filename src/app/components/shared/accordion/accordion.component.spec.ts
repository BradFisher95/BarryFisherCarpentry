import { ComponentFixture, TestBed } from '@angular/core/testing';

import { accordionComponent } from './accordion.component';

describe('accordionComponent', () => {
  let component: accordionComponent;
  let fixture: ComponentFixture<accordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [accordionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(accordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
