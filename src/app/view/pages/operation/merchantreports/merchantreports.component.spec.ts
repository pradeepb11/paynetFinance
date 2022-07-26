import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantreportsComponent } from './merchantreports.component';

describe('MerchantreportsComponent', () => {
  let component: MerchantreportsComponent;
  let fixture: ComponentFixture<MerchantreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
