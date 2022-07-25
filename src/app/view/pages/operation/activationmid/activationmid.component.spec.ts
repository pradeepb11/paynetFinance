import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationmidComponent } from './activationmid.component';

describe('ActivationmidComponent', () => {
  let component: ActivationmidComponent;
  let fixture: ComponentFixture<ActivationmidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivationmidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationmidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
