import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpaymentprocessorComponent } from './addpaymentprocessor.component';

describe('AddpaymentprocessorComponent', () => {
  let component: AddpaymentprocessorComponent;
  let fixture: ComponentFixture<AddpaymentprocessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpaymentprocessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpaymentprocessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
